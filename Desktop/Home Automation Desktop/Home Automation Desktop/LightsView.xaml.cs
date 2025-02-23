using MongoDB.Driver;
using System.Windows;
using System.Windows.Controls;

namespace Home_Automation_Desktop
{
    public partial class LightsView : UserControl
    {
        private readonly MongoDbContext _context;

        public LightsView(MongoDbContext context)
        {
            InitializeComponent();
            _context = context;
            LoadLights();
        }

        private async void LoadLights()
        {
            var lights = await _context.Devices.Find(d => d.Type == "light").ToListAsync();

            foreach (var light in lights)
            {
                light.ImagePath = light.Status == "on" ? "pack://application:,,,/Images/light_on.png" : "pack://application:,,,/Images/light_off.png";
            }

            LightsList.ItemsSource = lights;
        }


        private void ToggleLight(object sender, RoutedEventArgs e)
        {
            var button = sender as Button;
            var light = button.DataContext as Devices;
            light.Status = light.Status == "on" ? "off" : "on";
            _context.Devices.ReplaceOne(d => d.Id == light.Id, light);
            LoadLights();
        }
    }
}
