using MongoDB.Driver;
using System.Windows;
using System.Windows.Controls;

namespace Home_Automation_Desktop
{
    public partial class CamerasView : UserControl
    {
        private readonly MongoDbContext _context;

        public CamerasView(MongoDbContext context)
        {
            InitializeComponent();
            _context = context;
            LoadCameras();
        }

        private async void LoadCameras()
        {
        

            var cameras = await _context.Devices.Find(d => d.Type == "camera").ToListAsync();

            foreach (var camera in cameras)
            {
                camera.ImagePath = camera.Status == "on" ? "pack://application:,,,/Images/camera_on.jpg" : "pack://application:,,,/Images/camera_on.jpg";
            }

            CamerasList.ItemsSource = cameras;
        }

        private void ToggleCamera(object sender, RoutedEventArgs e)
        {
            var button = sender as Button;
            var camera = button.DataContext as Devices;
            camera.Status = camera.Status == "on" ? "off" : "on";
            _context.Devices.ReplaceOne(d => d.Id == camera.Id, camera);
            LoadCameras();
        }
    }
}
