const NATS = require('nats');
const Transport = require('winston-transport');
const {format} = require('winston'); 

const levels = { 
  error: 0, 
  warn: 1, 
  info: 2, 
  verbose: 3, 
  debug: 4, 
  silly: 5 
}

const defaults = {
  encoding: "utf8",
  json: false,
  maxPingOut: 2,
  maxReconnectAttempts: 10,
  nkey: "",
  noRandomize: false,
  pedantic: false,
  pingInterval: 120000,
  preserveBuffers: false,
  reconnect: true,
  reconnectTimeWait: 2000,
  tls: false,
  url: "nats://localhost:4222",
  useOldRequestStyle: false,
  usercreds: "",
  userjwt: "",
  verbose: false,
  waitOnFirstConnect:false,
  defaultChannel: "log",
  level: "info",
  format: format.simple()
}

module.exports = class NATSTransport extends Transport {
  constructor(opts) {
    super(opts);

    this.settings = Object.assign({}, defaults, opts);

    this.client = NATS.connect(this.settings);
    this.format = this.settings.format;
    this.level = this.settings.level
  }

  changeChannel(channel) {
    this.settings.defaultChannel = channel;
  }

  changeLogLevel(level) {
    this.settings.level = level;
    this.level = this.settings.level;
  }

  log(info, callback) {
    if (callback) {
      setImmediate(callback)
    }
    this.client.publish(
      this.settings.defaultChannel,
      JSON.stringify(info)
    )
  }

  close() {
    this.client.close();
  }
}