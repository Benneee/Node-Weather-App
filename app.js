const request = require("request");
const log = console.log;

// Address => Lat/Long => Weather

const url =
  "https://api.darksky.net/forecast/0bb3f9a06986871e44f977a63529a356/37.8267,-122.4233?units=si";

request({ url: url, json: true }, (error, response) => {
  if (error) {
    log(`Unable to connect to weather service`);
  } else if (response.body.error) {
    log("Unable to find location");
  } else {
    //   log(response.body.currently); // The current data report of the said location
    const data = response.body.currently;
    const dailyData = response.body.daily.data[0];
    log(
      `${dailyData.summary} It is currently ${data.temperature} degrees out. There is a ${data.precipProbability}% chance of rain`
    );
  }
});

const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYmVubmVlZSIsImEiOiJjazRvcmdqZGgxbncwM2psZDZ2MTR0YjJ6In0.vEaw6GyZ_hG8ozdmmWtqVg&limit=1";

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    // log(`Unable to connect to geocoding service`);
  } else if (response.body.message) {
    // log("Place not found");
  } else if (response.body.features.length === 0) {
    log(`Unable to find location, kindly check your entry`);
  } else {
    const data = response.body.features[0].center;
    // log(`Longitude: ${data[0]}, Latitude: ${data[1]}`);
  }
});
