using Microsoft.EntityFrameworkCore;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.ObjectModel;
using System.Windows;
using System.Windows.Controls;

namespace Home_Automation_Desktop
{
    public partial class AddWindow : Window
    {
        public Devices Devices { get; private set; }
        public ObservableCollection<Devices> DeviceCollection { get; set; }
        private readonly MongoDbContext _context;

        public AddWindow(Devices device)
        {
            Devices = device ?? new Devices();
            DeviceCollection = new ObservableCollection<Devices>();
            // Bind data to the DataGrid
            InitializeComponent();
            _context = new MongoDbContext();
            LoadData();
        }

        private async void LoadData()
        {
            try
            {
                var devices = await _context.Devices.Find(_ => true).ToListAsync();
                addWindowComponentTable.ItemsSource = devices; // Bind the data to the DataGrid
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Error loading data: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        private void CloseButton_Click(object sender, RoutedEventArgs e)
        {
            Close();
        }

        private void SaveButton_Click(object sender, RoutedEventArgs e)
        {
            if (string.IsNullOrWhiteSpace(NameTextbox.Text))
            {
                MessageBox.Show("Please enter a valid Name.", "Validation Error", MessageBoxButton.OK, MessageBoxImage.Warning);
                return;
            }

            // Assign values to the Devices object
            Devices.Name = NameTextbox.Text;
            Devices.Type = ((ComboBoxItem)TypeComboBox.SelectedItem)?.Content.ToString();
            Devices.Status = ((ComboBoxItem)StatusComboBox.SelectedItem)?.Content.ToString();

            // Validate and assign the ComponentId (if needed)
            if (int.TryParse(ComponentIdTextbox.Text, out var componentId))
            {
                Devices.ComponentId = componentId;
                DeviceCollection.Add(new Devices // Add the new device to the collection
                {
                    Name = Devices.Name,
                    Type = Devices.Type,
                    Status = Devices.Status,
                    ComponentId = componentId
                });
            }
            else
            {
                MessageBox.Show("Please enter a valid integer for Component ID.", "Validation Error", MessageBoxButton.OK, MessageBoxImage.Warning);
                return;
            }

            // Close the dialog with success
            DialogResult = true;
            // Close();
        }

        private void EditButton_Click(object sender, RoutedEventArgs e)
        {
            var button = sender as Button;
            var device = button.DataContext as Devices;

            // Populate text boxes with the selected device data
            ComponentIdTextbox.Text = device.ComponentId.ToString();
            NameTextbox.Text = device.Name;
            TypeComboBox.SelectedItem = TypeComboBox.Items.Cast<ComboBoxItem>().FirstOrDefault(item => item.Content.ToString() == device.Type);
            StatusComboBox.SelectedItem = StatusComboBox.Items.Cast<ComboBoxItem>().FirstOrDefault(item => item.Content.ToString() == device.Status);

            // Remove the existing device from the collection
            DeviceCollection.Remove(device);
        }

        private async void DeleteButton_Click(object sender, RoutedEventArgs e)
        {
            var button = sender as Button;
            var device = button.DataContext as Devices;

            // Remove the selected device from the collection
            DeviceCollection.Remove(device);

            try
            {
                // Remove the device from the database
                var filter = Builders<Devices>.Filter.Eq(d => d.ComponentId, device.ComponentId);
                await _context.Devices.DeleteOneAsync(filter);
                MessageBox.Show("Device deleted successfully!", "Success", MessageBoxButton.OK, MessageBoxImage.Information);
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Failed to delete the device: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }
    }
}
