using System.Windows;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace Home_Automation_Desktop
{
    /// <summary>
    /// Interaction logic for LoginWndow.xaml
    /// </summary>
    public partial class LoginWndow : Window
    {
        public LoginWndow()
        {
            InitializeComponent();
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            // Open the Dashboard window
            Dashboard dashboard = new Dashboard();
            dashboard.Show();

            // Close the Login window
            this.Close();
        }
    }
}
