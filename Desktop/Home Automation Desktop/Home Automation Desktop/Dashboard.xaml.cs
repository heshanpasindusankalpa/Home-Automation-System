using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;
using System.Windows.Media.Effects;
using System.Windows.Media.Imaging;

namespace Home_Automation_Desktop
{
    public partial class Dashboard : Window
    {
        private readonly MongoDbContext _context;
        private const string ApiKey = "7ff3f1c7505846dce72c394d2588a9cc";
        private const string City = "Colombo";

        public Dashboard()
        {
            InitializeComponent();
            _context = new MongoDbContext();
            Loaded += async (s, e) => await LoadWeatherData();
        }

        private async System.Threading.Tasks.Task LoadWeatherData()
        {
            try
            {
                var currentWeather = await GetCurrentWeather();
                UpdateCurrentWeatherUI(currentWeather);
                var forecast = await GetWeatherForecast();
                forecastList.ItemsSource = forecast;
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Error loading weather data: {ex.Message}", "Error",
                    MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        // Device Management Methods
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

        private void Devices_Click(object sender, RoutedEventArgs e)
        {
            LoadData(); // This now shows the device grid
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

        // Other device-related methods
        private void deviceGrid_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            // Handle device selection if needed
        }

        // Weather Methods (unchanged)
        private async System.Threading.Tasks.Task<dynamic> GetCurrentWeather()
        {
            using (var client = new HttpClient())
            {
                var response = await client.GetAsync(
                    $"https://api.openweathermap.org/data/2.5/weather?q={City}&units=metric&appid={ApiKey}");
                response.EnsureSuccessStatusCode();
                return Newtonsoft.Json.JsonConvert.DeserializeObject(
                    await response.Content.ReadAsStringAsync());
            }
        }

        private async System.Threading.Tasks.Task<List<ForecastItem>> GetWeatherForecast()
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
            txtTemperature.Text = $"{weatherData.main.temp}°C";
            txtCondition.Text = weatherData.weather[0].description;
            txtHumidity.Text = $"Humidity: {weatherData.main.humidity}%";
            CurrentWeatherIcon.Source = new BitmapImage(
                new Uri($"https://openweathermap.org/img/wn/{weatherData.weather[0].icon}@2x.png"));
        }

        // Other button handlers
        private void Dashboard_Click(object sender, RoutedEventArgs e)
        {
            ContentSection.Visibility = Visibility.Visible;
            deviceGrid.Visibility = Visibility.Collapsed;
           // LoadWeatherData();
            Loaded += async (s, e) => await LoadWeatherData();
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
    }

   
}