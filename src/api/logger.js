'use strict';

const chalk = require('chalk');
const moment = require('moment');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

class Logger {
  constructor () {
    this.date = moment().format('YYYY-MM-DD HH:mm:ss');
    this.messageFormat = printf(info => `[${info.timestamp}] [${info.level}]: ${info.message}`);
    this.logger = this.initializeWinston();
  }

  initializeWinston () {
    return createLogger({
      format: combine(
        timestamp(),
        this.messageFormat
      ),
      transports: [
        new transports.File({ filename: 'logs/hum.log' })
      ]
    });
  }

  writeToConsole (message, level) {
    let messageFormat = `[${this.date}] [${level}]: ${message}`;
    const levelSwitch = (level) => ({
      'info': chalk.bold(messageFormat),
      'error': chalk.red(messageFormat),
      'warn': chalk.yellow(messageFormat)
    })[level];

    console.log(levelSwitch(level));
  }

  writeToFile (message, level) {
    this.logger.log({ message: message, level: level });
  }

  log (message, level) {
    this.writeToFile(message, level);
    this.writeToConsole(message, level);
  }
}

module.exports = Logger;
