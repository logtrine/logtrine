const os = require('os');
const fs = require('fs');
const util = require('util');
const Logger = require('./Logger.js');

/**
 * This class provides logging to a file.
 * @extends Logger
 */
module.exports = class FileLogger extends Logger {

    /**
     *
     */
    constructor(file, level, logger) {
        super(level, logger);
        this.file = file;
    }

    /**
     * 
     * @param {*} output 
     */
    _write(output) {
        if(output && output.length > 1) {
            let content = output.map(term => term instanceof Object ? util.inspect(term) : term).join(' ');
            fs.appendFile(this.file, content + os.EOL, error => {});
        }
    }

    /**
     * Delete all content of the log file
     */
    clear() {
        fs.truncate(this.file, error => {});
    }

    /**
     * Create a log message when the level is LEVEL.Trace or below.
     * Returns undefined if the level is below the loggers configured level.
     * @param  {...(string|Object)} content 
     */
    trace(...content) {
        this._write(super.trace(...content));
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
        this._write(super.debug(...content));
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
        this._write(super.verbose(...content));
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
        this._write(super.info(...content));
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
        this._write(super.warn(...content));
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
        this._write(super.error(...content));
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
        this._write(super.critical(...content));
        if(this.logger instanceof Logger) {
            this.logger.critical(...content);
        }
    }
}