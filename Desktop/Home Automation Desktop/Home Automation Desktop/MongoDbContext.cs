using MongoDB.Driver;

namespace Home_Automation_Desktop
{
    public class MongoDbContext
    {
        private readonly IMongoDatabase _database;

        public MongoDbContext()
        {
            var connectionString = "mongodb+srv://user2:HP123@cluster0.u3yt5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Replace with your MongoDB connection string
            var client = new MongoClient(connectionString);
            _database = client.GetDatabase("test"); // Replace with your database name
        }

        public IMongoCollection<Devices> Devices => _database.GetCollection<Devices>("components"); // Replace "Devices" with your collection name
    }
}
