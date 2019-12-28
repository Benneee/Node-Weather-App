const request = require("request");

const forecast = (longitude, latitude, callback) => {
  const url = `https://api.darksky.net/forecast/0bb3f9a06986871e44f977a63529a356/${latitude},${longitude}?units=si`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback(`Unable to connect to weather service`, undefined);
    } else if (response.body.error) {
      callback(`Unable to find location`, undefined);
    } else {
      const data = response.body.currently;
      const dailyData = response.body.daily.data[0];
      callback(
        undefined,
        `${dailyData.summary} It is currently ${data.temperature} degrees out. There is a ${data.precipProbability}% chance of rain`
      );
    }
  });
};

module.exports = forecast;
