using System.Windows;
using System.Windows.Controls;
using System.Windows.Media.Imaging;

namespace Home_Automation_Desktop
{
    public partial class WeatherView : UserControl
    {
        public WeatherView()
        {
            InitializeComponent();
            Loaded += WeatherView_Loaded;
        }

        private async void WeatherView_Loaded(object sender, RoutedEventArgs e)
        {
            try
            {
                var weatherService = new WeatherService();
                var weatherData = await weatherService.GetWeatherAsync("1248991"); // Your city ID

                TemperatureText.Text = $"Temperature: {weatherData.main.temp} °C";
                ConditionText.Text = $"Condition: {weatherData.weather[0].description}";
                HumidityText.Text = $"Humidity: {weatherData.main.humidity}%";

                string iconUrl = $"http://openweathermap.org/img/wn/{weatherData.weather[0].icon}@2x.png";
                WeatherIcon.Source = new BitmapImage(new Uri(iconUrl));
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Failed to load weather data: {ex.Message}", "Error",
                    MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }
    }
}