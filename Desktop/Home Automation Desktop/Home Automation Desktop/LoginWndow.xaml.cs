using System.Windows;

namespace Home_Automation_Desktop
{
    public partial class LoginWndow : Window
    {
        // Hard-coded admin credentials
        private const string AdminUsername = "admin";
        private const string AdminPassword = "admin123";

        public LoginWndow()
        {
            InitializeComponent();
        }

        private void LoginButton_Click(object sender, RoutedEventArgs e)
        {
            string username = UsernameTextBox.Text.Trim();
            string password = PasswordBox.Password.Trim();

            // Disable button to prevent multiple clicks
            LoginButton.IsEnabled = false;

            // Check credentials
            if (username == AdminUsername && password == AdminPassword)
            {
                // Hide any previous error message
                ErrorText.Visibility = Visibility.Collapsed;

                // Open the Dashboard window
                Dashboard dashboard = new Dashboard();
                dashboard.Show();

                // Close the Login window
                this.Close();
            }
            else
            {
                // Show error message
                ErrorText.Text = "Invalid username or password!";
                ErrorText.Visibility = Visibility.Visible;
            }

            // Re-enable the login button
            LoginButton.IsEnabled = true;
        }

        // Clear placeholder text when user clicks on Username
        private void UsernameTextBox_GotFocus(object sender, RoutedEventArgs e)
        {
            if (UsernameTextBox.Text == "Enter your username")
            {
                UsernameTextBox.Text = "";
            }
        }

        // Clear placeholder text when user clicks on Password
        private void PasswordBox_GotFocus(object sender, RoutedEventArgs e)
        {
            if (PasswordBox.Password == "Enter your password")
            {
                PasswordBox.Password = "";
            }
        }
    }
}
