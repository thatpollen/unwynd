import pino, { Logger } from "pino";
import systemConfig from "../configs";

const logger: Logger = pino({
  level: systemConfig.LOG_LEVEL || process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  enabled: process.env.NODE_ENV !== 'test',
  redact: [] // prevent sensitive data from being logged
});

export default logger;
