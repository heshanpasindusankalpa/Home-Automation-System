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
    /// Interaction logic for Dashboard.xaml
    /// </summary>
    public partial class Dashboard : Window
    {
        private DeviceDbContext db = new DeviceDbContext();
        public Dashboard()
        {
            InitializeComponent();
           
            LoadData();
        }
        private void LoadData()//2
        {
            deviceGrid.ItemsSource = db.devices.ToList();//3 RENAME GRID
        }



        private void CloseButton_Click(object sender, RoutedEventArgs e)
        {
            // Closes the current window
            this.Close();
        }

        

        private void Add(object sender, RoutedEventArgs e)
        {

           
            Devices device = new Devices();
            AddWindow AWindow = new AddWindow(device);
            if (AWindow.ShowDialog() == true)
            {
                db.devices.Add(device);
                db.SaveChanges();

                LoadData();
            }


        }
    }
}
