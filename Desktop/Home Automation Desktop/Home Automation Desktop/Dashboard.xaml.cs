using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Net.Http;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media.Imaging;
using System.Windows.Media;
using System.Windows.Shapes;
using System.Globalization;
using System.Windows.Data;


namespace Home_Automation_Desktop
{
    public partial class Dashboard : Window, INotifyPropertyChanged
    {
        private readonly MongoDbContext _context;
        private const string ApiKey = "7ff3f1c7505846dce72c394d2588a9cc";
        private const string City = "Colombo";

        private double _humidity;
        private double _temperature;
        private string _condition;
       

        public event PropertyChangedEventHandler PropertyChanged;

        public double Humidity
        {
            get { return _humidity; }
            set
            {
                _humidity = Math.Round(value);
                OnPropertyChanged(nameof(Humidity));
                UpdateHumidityArc(_humidity);
            }
        }
        
        private void UpdateHumidityArc(double percentage)
        {
            double angle = (percentage / 100) * 270; // Convert 100% to a 270° arc
            double radians = (angle - 90) * (Math.PI / 180);
            double x = 75 + 65 * Math.Cos(radians);
            double y = 75 + 65 * Math.Sin(radians);

            // Create Arc Path
            HumidityArc.Data = Geometry.Parse($"M 75,10 A 65,65 0 {(percentage > 50 ? 1 : 0)} 1 {x},{y}");
        }

        public double Temperature
        {
            get { return _temperature; }
            set
            {
                _temperature = value;
                OnPropertyChanged(nameof(Temperature));
            }
        }

        public string Condition
        {
            get { return _condition; }
            set
            {
                _condition = value;
                OnPropertyChanged(nameof(Condition));
            }
        }

       

        public Dashboard()
        {
            InitializeComponent();
            DataContext = this; // Set the data context for binding
            _context = new MongoDbContext();
            Loaded += async (s, e) => await LoadWeatherData();
        }

        private async Task LoadWeatherData()
        {
            try
            {
                var currentWeather = await GetCurrentWeather();
                UpdateCurrentWeatherUI(currentWeather);

                var forecast = await GetWeatherForecast();
                forecastList.ItemsSource = forecast;

                // Fetch and update light percentage
                int lightPercentage = await GetLightPercentage();
                txtLightPercentage.Text = $"Lights On: {lightPercentage}%"; // Update UI
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Error loading weather and light data: {ex.Message}", "Error",
                    MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        private async Task<dynamic> GetCurrentWeather()
        {
            using (var client = new HttpClient())
            {
                var response = await client.GetAsync(
                    $"https://api.openweathermap.org/data/2.5/weather?q={City}&units=metric&appid={ApiKey}");
                response.EnsureSuccessStatusCode();
                return Newtonsoft.Json.JsonConvert.DeserializeObject(await response.Content.ReadAsStringAsync());
            }
        }

        private async Task<List<ForecastItem>> GetWeatherForecast()
        {
            using (var client = new HttpClient())
            {
                var response = await client.GetAsync(
                    $"https://api.openweathermap.org/data/2.5/forecast?q={City}&units=metric&appid={ApiKey}");
                response.EnsureSuccessStatusCode();

                var jsonData = Newtonsoft.Json.JsonConvert.DeserializeObject<dynamic>(
                    await response.Content.ReadAsStringAsync());

                var forecast = new List<ForecastItem>();
                foreach (var item in jsonData.list)
                {
                    if (DateTime.Parse((string)item.dt_txt).Hour == 12)
                    {
                        forecast.Add(new ForecastItem
                        {
                            Date = DateTime.Parse((string)item.dt_txt).ToString("ddd, MMM d"),
                            Icon = $"https://openweathermap.org/img/wn/{item.weather[0].icon}@2x.png",
                            Temp = $"{item.main.temp}°C",
                            Description = (string)item.weather[0].description
                        });
                    }
                }
                return forecast;
            }
        }

        private void UpdateCurrentWeatherUI(dynamic weatherData)
        {
            Temperature = weatherData.main.temp;
            Condition = weatherData.weather[0].description;
            Humidity = weatherData.main.humidity;

            // Set image directly to the XAML control
            imgCurrentWeather.Source = new BitmapImage(
                new Uri($"https://openweathermap.org/img/wn/{weatherData.weather[0].icon}@2x.png"));
        }

        private async void Dashboard_Click(object sender, RoutedEventArgs e)
        {
            // Reset ContentSection to show the original weather widgets
            ContentSection.Content = widgetSection; // Reference the named StackPanel
            ContentSection.Visibility = Visibility.Visible;
            deviceGrid.Visibility = Visibility.Collapsed;

            await LoadWeatherData(); // Refresh data
        }

        public async Task<int> GetLightPercentage()
        {
            try
            {
                // Corrected "Light" to "light" in the query
                var lights = await _context.Devices.Find(d => d.Type == "light").ToListAsync();
                if (lights.Count == 0)
                {
                    Console.WriteLine("No light devices found.");
                    return 0;
                }

                // Corrected "On" to "on" in the status check
                int onLights = lights.Count(d => d.Status == "on");
                Console.WriteLine($"Total lights: {lights.Count}, Lights on: {onLights}");

                return (onLights * 100) / lights.Count;
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Error fetching light data: {ex.Message}", "Error",
                    MessageBoxButton.OK, MessageBoxImage.Error);
                return 0;
            }
        }

        protected void OnPropertyChanged(string propertyName)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }

        private void Lights_Click(object sender, RoutedEventArgs e)
        {
            ContentSection.Content = new LightsView(_context);
            ToggleViews();
        }

        private void Fans_Click(object sender, RoutedEventArgs e)
        {
            ContentSection.Content = new FansView(_context);
            ToggleViews();
        }

        private void Cameras_Click(object sender, RoutedEventArgs e)
        {
            ContentSection.Content = new CamerasView(_context);
            ToggleViews();
        }

        private void ToggleViews()
        {
            deviceGrid.Visibility = Visibility.Collapsed;
            ContentSection.Visibility = Visibility.Visible;
        }

        private void Devices_Click(object sender, RoutedEventArgs e)
        {
           
            ContentSection.Content = new DeviceView();
            ToggleViews();
        }

        private void Add_Click(object sender, RoutedEventArgs e)
        {
            var newDevice = new Devices();
            var addWindow = new AddWindow(newDevice)
            {
                Owner = this,
                WindowStartupLocation = WindowStartupLocation.CenterOwner
            };

            if (addWindow.ShowDialog() == true)
            {
                try
                {
                    _context.Devices.InsertOne(newDevice);
                    LoadData();
                    MessageBox.Show("Device added successfully!", "Success",
                        MessageBoxButton.OK, MessageBoxImage.Information);
                }
                catch (Exception ex)
                {
                    MessageBox.Show($"Failed to add device: {ex.Message}", "Error",
                        MessageBoxButton.OK, MessageBoxImage.Error);
                }
            }
        }

        private async void LoadData()
        {
            try
            {
                var devices = await _context.Devices.Find(_ => true).ToListAsync();
                deviceGrid.ItemsSource = devices;
                deviceGrid.Visibility = Visibility.Visible;
                ContentSection.Visibility = Visibility.Collapsed;
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Error loading devices: {ex.Message}", "Error",
                    MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

       





    }


} 
    

