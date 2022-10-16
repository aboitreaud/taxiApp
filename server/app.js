const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

const data = require('./db.json');
const fs = require('fs');

const computePrice = (distance, startTime, duration, initialCharge = 1,
  baseDistanceFare = 0.5, nightExtra = 0.5, busyExtra = 1) => {
  // Ride pricing applied by this function:
  // Initial charge of 1 EUR as soon as taxi starts moving (ie. if distance > 0)
  // .50EUR per 1/5 of a mile started
  // Additional .50EUR charged if ride starts or ends between 8PM and 6AM
  // Additional 1 EUR charged if ride starts or ends between 4PM and 7PM
  let price = 0;
  if (distance > 0) {

    const d = new Date(startTime);
    const startHour = d.getUTCHours();

    var date = new Date(null);
    date.setSeconds(duration);
    var endTime = new Date(null);
    endTime.setTime(d.getTime() + duration * 1000);
    const endHour = endTime.getUTCHours();
    console.log(endHour);
    price = initialCharge;
    price += baseDistanceFare * Math.ceil(distance * 5);

    if (startHour <= 6 || endHour >= 20 || endHour == 0) {
      // starts before 6 AM or ends after 8 PM, ie ride is, at least partially, in a night period
      price += nightExtra;
    }
    if ((endHour >= 16 && endHour <= 19) || (startHour >= 16 && startHour <= 19) ) {
      // ends after 4PM or starts before 7PM, ie ride is, at least partially, in a busy period
      price += busyExtra;
    }
  }
  return price.toFixed(2);
};

function getRidePrices() {
  for (let rideId = 0; rideId < data.length; rideId++) {
    data[rideId]['price'] = computePrice(data[rideId]['distance'], data[rideId]['startTime']);
  }
  return data;
};

app.get('/rides', (req, res) => {
  dataWithPrices = getRidePrices();
  return res.send(dataWithPrices);
});

module.exports = { app, computePrice };
