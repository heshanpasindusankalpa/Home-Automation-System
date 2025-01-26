using MongoDB.Driver;
using System;
using System.Windows;

namespace Home_Automation_Desktop
{
    public partial class Dashboard : Window
    {
        private readonly MongoDbContext _context;

        public Dashboard()
        {
            InitializeComponent();
            _context = new MongoDbContext();
           LoadData();
        }

        private void LoadData()
        {
            try
            {
                var devices = _context.Devices.Find(_ => true).ToList();
                deviceGrid.ItemsSource = devices; // Replace with the actual WPF DataGrid control name
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Error loading data: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        private void Add(object sender, RoutedEventArgs e)
        {
            var newDevice = new Devices();
            var addWindow = new AddWindow(newDevice);
            if (addWindow.ShowDialog() == true)
            {
                try
                {
                    // Insert the new device into the database
                    _context.Devices.InsertOne(newDevice);

                    // Reload the data grid to reflect the added device
                    LoadData();

                    MessageBox.Show("Device added successfully!", "Success", MessageBoxButton.OK, MessageBoxImage.Information);
                }
                catch (Exception ex)
                {
                    MessageBox.Show($"Failed to add the device: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                }
            }
        }

        private void DashboardView(object sender, RoutedEventArgs e)
        {

        }

        private void CloseWindow(object sender, RoutedEventArgs e)
        {
            this.Close();

        }
    }
}
