import {Format} from 'logform';
import Transport from 'winston-transport';

export enum levels {
  error="error", 
  warn="warn", 
  info="info", 
  verbose="verbose", 
  debug="debug",
  silly="silly" 
};

export interface Options {
  encoding: string;
  json: boolean;
  maxPingOut: number;
  maxReconnectAttempts: number;
  name: string;
  client: string;
  nkey: string;
  noEcho: boolean;
  noRandomize: boolean;
  dontRandomize: boolean;
  NoRandomize: boolean;
  pass: string;
  password: string;
  pedantic: boolean;
  pingInterval: number;
  preserveBuffers: boolean;
  reconnect: boolean;
  reconnectTimeWait: number;
  servers: [string];
  urls: [string];
  sigCb: string;
  tls: boolean;
  secure: boolean;
  token: string;
  url: string;
  useOldRequestStyle: boolean;
  user: string;
  usercreds: string;
  userjwt: string;
  verbose: boolean;
  waitOnFirstConnect: boolean;
  yieldTime: number;
  defaultChannel: string;
  level: string;
  format: Format;
}

export default class NATSTransport extends Transport {
  constructor(opts:Options);
  changeChannel(channel:string):void;
  changeLevel(level:levels):void;
}