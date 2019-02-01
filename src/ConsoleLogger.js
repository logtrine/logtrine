const Logger = require('./Logger.js');

/**
 * This class provides logging to STDOUT through the console.
 * @extends Logger
 */
module.exports = class ConsoleLogger extends Logger {

    /**
     *
     */
    constructor(level, logger) {
        super(level, logger);
    }

    /**
     * 
     * @param {*} color 
     * @param {*} output 
     */
    _echo(color, output) {
        if(output && output.length > 0) {
            console.log(color, ...output, '\x1b[0m');
        }
    }

    /**
     * Create a log message when the level is LEVEL.Trace or below.
     * Returns undefined if the level is below the loggers configured level.
     * @param  {...(string|Object)} content 
     */
    trace(...content) {
        this._echo('\x1b[97m', super.trace(...content));
        if(this.logger instanceof Logger) {
            this.logger.trace(...content);
        }
    }

    /**
     * Create a log message when the level is LEVEL.Debug or below.
     * Returns undefined if the level is below the loggers configured level.
     * @param  {...(string|Object)} content 
     */
    debug(...content) {
        this._echo('\x1b[97m', super.debug(...content));
        if(this.logger instanceof Logger) {
            this.logger.debug(...content);
        }
    }

    /**
     * Create a log message when the level is LEVEL.Verbose or below.
     * Returns undefined if the level is below the loggers configured level.
     * @param  {...(string)} content 
     */
    verbose(...content) {
        this._echo('\x1b[97m', super.verbose(...content));
        if(this.logger instanceof Logger) {
            this.logger.verbose(...content);
        }
    }

    /**
     * Create a log message when the level is LEVEL.Info or below.
     * Returns undefined if the level is below the loggers configured level.
     * @param  {...(string)} content 
     */
    info(...content) {
        this._echo('\x1b[0m', super.info(...content));
        if(this.logger instanceof Logger) {
            this.logger.info(...content);
        }
    }

    /**
     * Create a log message when the level is LEVEL.Warn or below.
     * Returns undefined if the level is below the loggers configured level.
     * @param  {...(string|Error|Object)} content 
     */
    warn(...content) {
        this._echo('\x1b[33m', super.warn(...content));
        if(this.logger instanceof Logger) {
            this.logger.warn(...content);
        }
    }

    /**
     * Create a log message when the level is LEVEL.Error or below.
     * Returns undefined if the level is below the loggers configured level.
     * @param  {...(string|Error|Object)} content 
     */
    error(...content) {
        this._echo('\x1b[91m', super.error(...content));
        if(this.logger instanceof Logger) {
            this.logger.error(...content);
        }
    }

    /**
     * Create a log message when the level is LEVEL.Critical or below.
     * Returns undefined if the level is below the loggers configured level.
     * @param  {...(string|Error|Object)} content 
     */
    critical(...content) {
        this._echo('\x1b[91m', super.critical(...content));
        if(this.logger instanceof Logger) {
            this.logger.critical(...content);
        }
    }
}