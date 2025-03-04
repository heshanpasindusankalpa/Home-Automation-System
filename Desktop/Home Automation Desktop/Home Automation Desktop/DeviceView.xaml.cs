using System;
using System.Collections.Generic;
using System.Threading.Tasks;
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
            _context = new MongoDbContext(); // Assuming MongoDbContext is the class to manage MongoDB connection
        }

        private async void OpenDevices_Click(object sender, RoutedEventArgs e)
        {
            await LoadDeviceData(); // Load data when the button is clicked
        }

        private async Task LoadDeviceData()
        {
            try
            {
                var devices = await _context.Devices.Find(_ => true).ToListAsync(); // Fetch all devices from the database
                deviceGrid.ItemsSource = devices; // Bind the fetched devices to the DataGrid
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Error loading devices: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }
    }
}
