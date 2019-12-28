const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const log = console.log;

// Address => Lat/Long => Weather

geocode("Lagos", (error, data) => {
  if (error && error !== "undefined") {
    log("Error: ", error);
  } else {
    log("Location: ", data);
  }
});

forecast(-75.7088, 44.1545, (error, data) => {
  if (error && error !== "undefined") {
    log("Error: ", error);
  } else {
    log("Forecast: ", data);
  }
});
