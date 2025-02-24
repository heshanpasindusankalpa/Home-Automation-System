using MongoDB.Driver;
using System;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media.Imaging;
using System.Windows.Media.Animation;
using WpfAnimatedGif;
using System.Net.Http;

namespace Home_Automation_Desktop
{
    public partial class Dashboard : Window
    {
        private readonly MongoDbContext _context;

        public Dashboard()
        {
            InitializeComponent();
            _context = new MongoDbContext();
          //  ShowWeatherView();
            LoadForecastData();
        }

        private async void LoadData()
        {
            try
            {
                var devices = await _context.Devices.Find(_ => true).ToListAsync();
                deviceGrid.ItemsSource = devices;
                deviceGrid.Visibility = Visibility.Visible; // Show the DataGrid
                ContentSection.Visibility = Visibility.Collapsed; // Hide other content
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Error loading data: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        private void Image_Loaded(object sender, RoutedEventArgs e)
        {
            try
            {
                var image = sender as Image;
                var gifImageSource = new Uri("pack://application:,,,/Images/Logo.gif", UriKind.Absolute);
                var imageSource = new BitmapImage(gifImageSource);
                ImageBehavior.SetAnimatedSource(image, imageSource);
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Error loading GIF: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
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
                    MessageBox.Show("Device added successfully!", "Success", MessageBoxButton.OK, MessageBoxImage.Information);
                }
                catch (Exception ex)
                {
                    MessageBox.Show($"Failed to add the device: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                }
            }
        }

        private void Lights_Click(object sender, RoutedEventArgs e)
        {
            ContentSection.Content = new LightsView(_context);
            deviceGrid.Visibility = Visibility.Collapsed;
            ContentSection.Visibility = Visibility.Visible;
        }

        private void Fans_Click(object sender, RoutedEventArgs e)
        {
            ContentSection.Content = new FansView(_context);
            deviceGrid.Visibility = Visibility.Collapsed;
            ContentSection.Visibility = Visibility.Visible;
        }

        private void Cameras_Click(object sender, RoutedEventArgs e)
        {
            ContentSection.Content = new CamerasView(_context);
            deviceGrid.Visibility = Visibility.Collapsed;
            ContentSection.Visibility = Visibility.Visible;
        }

        private void Devices_Click(object sender, RoutedEventArgs e)
        {
            LoadData(); // Show the devices list
        }

        private void deviceGrid_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
        }

        private void ShowWeatherView()
        {
            ContentSection.Content = new WeatherView();
            deviceGrid.Visibility = Visibility.Collapsed;
            ContentSection.Visibility = Visibility.Visible;
        }

        private void Dashboard_Click(object sender, RoutedEventArgs e)
        {
            ShowWeatherView();
        }

        private async void LoadForecastData()
        {
            try
            {
                string apiKey = "7ff3f1c7505846dce72c394d2588a9cc"; // Replace with your OpenWeatherMap API key
                string city = "Colombo"; // Replace with your preferred city
                string apiUrl = $"https://api.openweathermap.org/data/2.5/forecast?q={city}&units=metric&appid={apiKey}";

                using (var client = new HttpClient())
                {
                    var response = await client.GetAsync(apiUrl);
                    response.EnsureSuccessStatusCode();

                    var jsonString = await response.Content.ReadAsStringAsync();
                    dynamic jsonData = Newtonsoft.Json.JsonConvert.DeserializeObject(jsonString);

                    var forecast = new List<ForecastItem>();

                    // Extracting the 5-day forecast (3-hour interval data, take 1 per day)
                    for (int i = 0; i < jsonData.list.Count; i += 8)
                    {
                        var item = jsonData.list[i];
                        var date = DateTime.Parse((string)item.dt_txt).ToString("ddd, MMM d");
                        var iconCode = (string)item.weather[0].icon;
                        var temp = $"{item.main.temp}°C";
                        var description = (string)item.weather[0].description;

                        forecast.Add(new ForecastItem
                        {
                            Date = date,
                            Icon = $"https://openweathermap.org/img/wn/{iconCode}@2x.png",
                            Temp = temp,
                            Description = description
                        });
                    }

                    forecastList.ItemsSource = forecast;
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Failed to load weather data: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }


    }
}
