using MongoDB.Driver;
using System.Windows;
using System.Windows.Controls;

namespace Home_Automation_Desktop
{
    public partial class FansView : UserControl
    {
        private readonly MongoDbContext _context;

        public FansView(MongoDbContext context)
        {
            InitializeComponent();
            _context = context;
            LoadFans();
        }

        private async void LoadFans()
        {
            var fans = await _context.Devices.Find(d => d.Type == "fan").ToListAsync();
            


            foreach (var fan in fans)
            {
                fan.ImagePath = fan.Status == "on" ? "pack://application:,,,/Images/fan_on.gif" : "pack://application:,,,/Images/fan_off.png";
            }
            FansList.ItemsSource = fans;
        }

        private void ToggleFan(object sender, RoutedEventArgs e)
        {
            var button = sender as Button;
            var fan = button.DataContext as Devices;
            fan.Status = fan.Status == "on" ? "off" : "on";
            _context.Devices.ReplaceOne(d => d.Id == fan.Id, fan);
            LoadFans();
        }
    }
}
