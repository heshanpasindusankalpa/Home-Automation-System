using System;
using System.Windows;
using System.Windows.Controls;
using MongoDB.Driver;

namespace Home_Automation_Desktop
{
    public partial class DeviceView : UserControl
    {
        private readonly MongoDbContext _context;

        public DeviceView()
        {
            InitializeComponent();
            _context = new MongoDbContext();
        }

        private async void UserControl_Loaded(object sender, RoutedEventArgs e)
        {
            await LoadDeviceData();
        }

        private async Task LoadDeviceData()
        {
            try
            {
                var devices = await _context.Devices.Find(_ => true).ToListAsync();
                deviceGrid.ItemsSource = devices;
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Error loading devices: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }
    }
}