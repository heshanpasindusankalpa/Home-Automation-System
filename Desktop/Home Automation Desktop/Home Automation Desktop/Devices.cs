using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class Devices
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }

    [BsonElement("Name")]
    public string Name { get; set; } // Treated as a plain string

    [BsonElement("Type")]
    public string Type { get; set; }

    [BsonElement("Status")]
    public bool Status { get; set; }
}
