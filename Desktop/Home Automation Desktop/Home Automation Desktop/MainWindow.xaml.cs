using System;
using System.Windows;
using System.Windows.Media;
using System.Windows.Media.Animation;

namespace Home_Automation_Desktop
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            StartLoadingAnimation();
        }

        private void StartLoadingAnimation()
        {
            // Create a rotation animation
            var rotateAnimation = new DoubleAnimation
            {
                From = 0,
                To = 360,
                Duration = new Duration(TimeSpan.FromSeconds(1)),
                RepeatBehavior = RepeatBehavior.Forever
            };

            // Apply the animation to the spinner
            LoadingSpinner.BeginAnimation(RotateTransform.AngleProperty, rotateAnimation);
        }

        private void GetStartedButton_Click(object sender, RoutedEventArgs e)
        {
            // Show the loading overlay
            LoadingOverlay.Visibility = Visibility.Visible;

            // Simulate a loading delay
            System.Threading.Tasks.Task.Delay(3000).ContinueWith(_ =>
            {
                Dispatcher.Invoke(() =>
                {
                    // Hide the loading overlay
                    LoadingOverlay.Visibility = Visibility.Collapsed;

                    // Open the LoginWindow
                    LoginWndow loginWindow = new LoginWndow();
                    loginWindow.Show();

                    // Close the MainWindow
                    this.Close();
                });
            });
        }
    }
}
