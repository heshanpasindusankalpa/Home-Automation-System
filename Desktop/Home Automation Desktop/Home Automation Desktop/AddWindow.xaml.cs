using MongoDB.Bson;
using System;
using System.Windows;

namespace Home_Automation_Desktop
{
    public partial class AddWindow : Window
    {
        public Devices Devices { get; private set; }

        public AddWindow(Devices device)
        {
            InitializeComponent();
            Devices = device ?? new Devices();
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

            // Assign the plain string to Devices.Name
            Devices.Name = NameTextbox.Text;

            // Assign the Type
            Devices.Type = TypeTextbox.Text;

            // Validate and assign the Status
            if (!bool.TryParse(StatusTextbox.Text, out var status))
            {
                MessageBox.Show("Please enter a valid boolean value (True/False) for Status.", "Validation Error", MessageBoxButton.OK, MessageBoxImage.Warning);
                return;
            }

            Devices.Status = status;

            // Close the dialog with success
            DialogResult = true;
            Close();
        }


    }
}

