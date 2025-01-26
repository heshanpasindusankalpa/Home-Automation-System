#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>
#include <elapsedMillis.h>

const char *ssid = "Galaxy A13 00F4";
const char *password = "elfv3871";

// Change to match your REST Server IP Address example: http://192.168.100.22:5000/api/sensors
const char *serverName = "http://d85f-175-157-246-219.ngrok-free.app/api/sensors";


// Sample sensor data to send
float sampleHumidity = 50.0;      // Sample humidity (in %)
float sampleTempInC = 25.0;       // Sample temperature in Celsius
float sampleTempInF = 77.0;       // Sample temperature in Fahrenheit
float sampleHeatIndexC = 27.0;    // Sample heat index in Celsius
float sampleHeatIndexF = 80.6;    // Sample heat index in Fahrenheit

// Time interval before saving next readings
elapsedMillis timeElapsed;
unsigned long intervalSaveRequest = 10000;

// Forward declaration of saving sensor readings
void saveSensorRecord(const char *, float, float, float, float, float);

void setup()
{
  // Set Baud Rate
  Serial.begin(115200);

  // Begin WiFi connection
  WiFi.begin(ssid, password);
  Serial.println("Connecting");
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected to WiFi network with IP Address: ");
  Serial.println(WiFi.localIP());
}

void loop()
{
  if (timeElapsed >= intervalSaveRequest)
  {
    if (WiFi.status() == WL_CONNECTED)
    {
      Serial.println("Saving sensor records...");
      // Send sample sensor data
      saveSensorRecord("dht-garage", sampleTempInC, sampleTempInF, sampleHumidity, sampleHeatIndexC, sampleHeatIndexF);
    }
    else
    {
      Serial.println("WiFi Disconnected");
    }
    timeElapsed = 0;
  }
}

void saveSensorRecord(const char *sensor_id, float dhtTempInC, float dhtTempInF, float dhtHumidity, float dhtHiC, float dhtHiF)
{
  WiFiClient client;
  HTTPClient http;

  // Begin connection with your REST server
  http.begin(client, serverName);
  // Set content type to JSON
  http.addHeader("Content-Type", "application/json");

  // Write JSON of sensor readings
  StaticJsonDocument<200> doc;
  doc["sensor_id"] = sensor_id;
  doc["temperature_in_c"] = dhtTempInC;
  doc["temperature_in_f"] = dhtTempInF;
  doc["humidity"] = dhtHumidity;
  doc["heat_index_in_c"] = dhtHiC;
  doc["heat_index_in_f"] = dhtHiF;
  String requestBody;
  serializeJson(doc, requestBody);

  // HTTP Post to REST server
  int httpResponseCode = http.POST(requestBody);

  if (httpResponseCode > 0)
  {
    String response = http.getString(); // Get the response to the request
    Serial.println(httpResponseCode);   // Print return code
    Serial.println(response);           // Print request answer
  }
  else
  {
    Serial.print("Error on sending POST: ");
    Serial.println(httpResponseCode);
  }

  http.end();
}

