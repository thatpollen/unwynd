import pino, { Logger } from "pino";
import systemConfig from "../configs";

export const logger: Logger = pino({
  level: systemConfig.logLevel || process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  enabled: process.env.NODE_ENV !== 'test',
  redact: [] // prevent sensitive data from being logged
});
