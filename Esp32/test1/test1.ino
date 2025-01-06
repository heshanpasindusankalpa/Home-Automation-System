#include <WiFi.h>
#include <HTTPClient.h>

const char* ssid = "Galaxy A13 00F4";
const char* password = "elfv3871";
const char* serverUrl = "http://<your-backend-ip>:3001>/api/data"; // Replace with your backend endpoint

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nConnected to Wi-Fi!");
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin(serverUrl);

    // Prepare JSON data
    String jsonData = "{\"temperature\": 25.4, \"humidity\": 60.2}";
    http.addHeader("Content-Type", "application/json");

    // Send HTTP POST request
    int httpResponseCode = http.POST(jsonData);

    if (httpResponseCode > 0) {
      String response = http.getString();
      Serial.println("Response: " + response);
    } else {
      Serial.println("Error in sending request: " + String(httpResponseCode));
    }

    http.end();
  }

  delay(5000); // Send data every 5 seconds
}
