const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const chalk = require("chalk");
const log = console.log;

const takeOut = (a, b, ...others) => {
  return others;
};

// Address => Lat/Long => Weather

const args = process.argv;
// log(args.length);
let address = "";
if (args.length === 3) {
  address = args[2];
} else if (args.length > 3) {
  address = takeOut(...args).join(" ");
} else {
  log(chalk.red.bold("Please enter the name of your city"));
}

if (address && address !== "") {
  geocode(address, (error, data) => {
    if (error && error !== "undefined") {
      log("Error: ", error);
    } else {
      forecast(data.longitude, data.latitude, (error, forecastData) => {
        if (error && error !== "undefined") {
          log("Error: ", error);
        } else {
          log(data.location);
          log(forecastData);
        }
      });
    }
  });
}
