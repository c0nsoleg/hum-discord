const path = require('path');
const { includeFiles } = require('../utils/helpers');
const commandsDirectory = path.resolve(__dirname, '../commands/**/*.js');

class Commands {
  loadCommands () {
    try {
      includeFiles(commandsDirectory);
      console.log(`Sucessfully loaded commands files!`);
    } catch (error) {
      console.log(`Error while trying load commands files (Error: ${error.message} / ${error.stack})!`);
    }
  }
}

module.exports = Commands;
