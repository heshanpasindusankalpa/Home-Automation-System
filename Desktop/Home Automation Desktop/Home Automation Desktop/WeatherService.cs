using System;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Home_Automation_Desktop
{
    public class WeatherService
    {
        private const string API_KEY = "7ff3f1c7505846dce72c394d2588a9cc"; // Replace with your API Key
        private const string BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

        public async Task<WeatherData> GetWeatherAsync(string cityId)
        {
            using (HttpClient client = new HttpClient())
            {
                string url = $"{BASE_URL}?id={cityId}&appid={API_KEY}&units=metric";
                HttpResponseMessage response = await client.GetAsync(url);

                if (response.IsSuccessStatusCode)
                {
                    string json = await response.Content.ReadAsStringAsync();
                    return JsonConvert.DeserializeObject<WeatherData>(json);
                }
                else
                {
                    throw new Exception("Failed to fetch weather data");
                }
            }
        }
    }

    public class WeatherData
    {
        public Main main { get; set; }
        public Weather[] weather { get; set; }
    }

    public class Main
    {
        public double temp { get; set; }
        public int humidity { get; set; }
    }

    public class Weather
    {
        public string description { get; set; }
        public string icon { get; set; }
    }
}
