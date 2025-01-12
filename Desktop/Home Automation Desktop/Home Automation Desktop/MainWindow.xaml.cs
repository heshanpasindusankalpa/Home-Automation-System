using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace Home_Automation_Desktop
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void Log(object sender, RoutedEventArgs e)
        {
            Dashboard DWindow = new Dashboard();
            DWindow.Show();
            this.Close();

        }

        private void Add(object sender, RoutedEventArgs e)
        {

        }
    }
}