using MongoDB.Driver;
using System;

namespace Home_Automation_Desktop
{
    public static class MongoDb
    {
        private static readonly IMongoCollection<Devices> collection;

        static MongoDb()
        {
            try
            {
                // Temporary: Replace with environment variable in production
                string connectionString = "mongodb+srv://pasindusankalpa2021:QF5WTOkietfbnoLV@cluster0.mongodb.net/?retryWrites=true&w=majority";

                if (string.IsNullOrWhiteSpace(connectionString))
                {
                    throw new Exception("Connection string is null or empty.");
                }

                var mongoClientSettings = MongoClientSettings.FromConnectionString(connectionString);
                mongoClientSettings.ConnectTimeout = TimeSpan.FromSeconds(10);
                var mongoClient = new MongoClient(mongoClientSettings);

                var database = mongoClient.GetDatabase("test");
                collection = database.GetCollection<Devices>("components");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Failed to initialize MongoDB: {ex.Message}");
                throw; // Rethrow for visibility in the application
            }
        }

        public static bool InsertDocument(Devices device)
        {
            try
            {
                collection.InsertOne(device);
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Insert failed: {ex.Message}");
                return false;
            }
        }
    }
}
