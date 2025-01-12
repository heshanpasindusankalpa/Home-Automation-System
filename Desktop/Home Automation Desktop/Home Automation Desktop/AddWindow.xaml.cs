using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace Home_Automation_Desktop
{
    /// <summary>
    /// Interaction logic for AddWindow.xaml
    /// </summary>
    public partial class AddWindow : Window
    {
        public Devices Devices { get; private set; }
        public AddWindow(Devices device)
        {
            InitializeComponent();     
        
        
            Devices = device;
        }

        private void CloseButton_Click(object sender, RoutedEventArgs e)
        {
            this.Close();
        }

        private void SaveButton(object sender, RoutedEventArgs e)
        {
            Devices.Name = NameTextbox.Text;
            Devices.Type= TypeTextbox.Text;
            bool status;
            if (!bool.TryParse(StatusTextbox.Text, out status))
            {
                // Show error if the value can't be parsed as boolean
                MessageBox.Show("Please enter a valid boolean value (True/False) for Status.", "Invalid Input", MessageBoxButton.OK, MessageBoxImage.Error);
                return;
            }
            Devices.Status = status;

            Devices.Id = Convert.ToInt32(IdTextbox.Text);
            DialogResult = true;
            Close();


        }

    }



  
    
}
