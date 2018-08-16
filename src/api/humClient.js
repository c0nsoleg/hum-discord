const Logger = require('../api/logger');
const { Client } = require('discord.js');
const EventsStore = require('../store/events');
const CommandsStore = require('../store/commands');

class HumClient extends Client {
  constructor () {
    super();
    this.logger = new Logger(this);
    this.events = new EventsStore(this);
    this.commands = new CommandsStore(this);
  }

  /**
   * Authorize bot with Discord.
   *
   * @param {string} secret
   */
  async authorize (secret) {
    super.login(secret);
    await this.initialize();
  }

  /**
   * Initialize bot.
   */
  async initialize () {
    await Promise.all([this.events.loadEvents(), this.commands.loadCommands()]);
  }

  /**
   * Log something.
   *
   * @param {string} message
   * @param {string} type
   */
  log (message, type) {
    this.logger.log(message, type);
  }
}

module.exports = HumClient;
