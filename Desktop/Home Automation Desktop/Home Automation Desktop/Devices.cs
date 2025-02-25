using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

[BsonIgnoreExtraElements] // Ignore extra fields like '__v'
public class Devices
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; } // MongoDB ObjectId (string representation)

    [BsonElement("id")]
    public int ComponentId { get; set; } // Matches the 'id' field in MongoDB

    [BsonElement("name")]
    public string Name { get; set; } // Matches the 'name' field in MongoDB

    [BsonElement("type")]
    public string Type { get; set; } // Matches the 'type' field in MongoDB

    [BsonElement("place")]
    public string Place { get; set; } // Matches the 'type' field in MongoDB

    [BsonElement("status")]
    public string Status { get; set; } // Matches the 'status' field in MongoDB
    public string ImagePath { get; set; }
}