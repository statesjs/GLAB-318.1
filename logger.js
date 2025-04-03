const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    console.log(message);
    //raise an event
    this.emit("signal", { id: 3, url: "http://" });
  }
}

module.exports = Logger;
