const path = require('path');
const { includeFiles } = require('../utils/helpers');
const eventsDirectory = path.resolve(__dirname, '../events/**/*.js');

class Events {
  loadEvents () {
    try {
      includeFiles(eventsDirectory);
      console.log(`Sucessfully loaded event files!`);
    } catch (error) {
      console.log(`Error while trying load events files (Error: ${error.message} / ${error.stack})!`);
    }
  }
}

module.exports = Events;
