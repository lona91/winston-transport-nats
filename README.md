# Winston NATS Transporter

## Installation
    npm i --save winston-transport-nats
    
## Usage
    const {createLogger} = require("winston")

    const Logger = createLogger({
        transports: [
          new NATSTransporter(options)
        ]
    });
    
## Options
For options view NATS package options (https://www.npmjs.com/package/nats) plus

| Option                 | Default                   | Description
|--------                |---------                  |------------
| `defaultChannel`       | `"log"`                   | NATS default channel 
| `level`                | `"info"`                  | Logging level
| `format`               | `format.simple()`         | Winston format