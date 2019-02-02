/**
 * This is a base class for specific logger implementations.
 * All methods will return the log output instead of processing it.
 */
module.exports = class Logger {

    /**
     * Create a new basic logger instance.
     * @param {number} level Only message types equal to or above the given level will be logged (see LEVEL for predefined values)
     * @param {Logger} logger A logger to which each meassge will be chained through
     */
    constructor(level, logger) {
        this.logger = logger || null;
        this.level = level || Logger.LEVEL.Info;
    }

    /**
     * 
     */
    get level() {
        return this._level;
    }

    /**
     * 
     */
    set level(value) {
        this._level = value;
        if(this.logger instanceof Logger) {
            this.logger.level = value;
        }
    }

    /**
     * 
     */
    get logger() {
        return this._logger;
    }

    /**
     * 
     */
    set logger(value) {
        this._logger = value;
        if(this._logger instanceof Logger) {
            this._logger.level = this.level;
        }
    }

    /**
     * Enumeration for predefined log levels to limit/filter the log output:
     * @returns {LEVEL}
     * 
     * @typedef {Object} LEVEL
     * @property {number} All - Log all levels
     * @property {number} Trace - Log anything from LEVEL.Debug + traces
     * @property {number} Debug - Log anything from LEVEL.Verbose + debug output
     * @property {number} Verbose - Log anything from LEVEL.Info + verbose output
     * @property {number} Info - Log anything from LEVEL.Warn + informations
     * @property {number} Warn - Log anything from LEVEL.Error + warnings
     * @property {number} Error - Log anything from LEVEL.Critical + errors
     * @property {number} Critical - Log only Critical
     * @property {number} None - Logging is disabled
     */
    static get LEVEL() {
        return {
            // NOTE: never use 0, because it cannot be used for default assignment (0 => false)
            All: -Infinity,
            Trace: 1,
            Debug: 2,
            Verbose: 3,
            Info: 4,
            Warn: 5,
            Error: 6,
            Critical: 7,
            None: Infinity
        };
    }

    /**
     * Map of predefined tags providing a text representation for a corresponding log level.
     */
    static get _TAGS() {
        return {
            1: '<TRACE>   ',
            2: '<DEBUG>   ',
            3: '<VERBOSE> ',
            4: '<INFO>    ',
            5: '<WARNING> ',
            6: '<ERROR>   ',
            7: '<CRITICAL>'
        }
    }

    /**
     * Returns the given content along with a timestamg and the level tag.
     * If the level is below the loggers configured level, undefned will be returned.
     * @param {number} level A level to detemrine if the content shall be logged or not
     * @param  {...(string|Error)} content The content that shall be logged
     */
    _log(level, ...content) {
        if(level >= this.level) {
            return [(new Date()).toISOString(), Logger._TAGS[level], ...content];
        } else {
            return undefined;
        }
    }

    /**
     * Create a log message when the level is LEVEL.Trace or below.
     * Returns undefined if the level is below the loggers configured level.
     * @param  {...(string|Object)} content 
     */
    trace(...content) {
        return this._log(Logger.LEVEL.Trace, ...content);
    }

    /**
     * Create a log message when the level is LEVEL.Debug or below.
     * Returns undefined if the level is below the loggers configured level.
     * @param  {...(string|Object)} content 
     */
    debug(...content) {
        return this._log(Logger.LEVEL.Debug, ...content);
    }

    /**
     * Create a log message when the level is LEVEL.Verbose or below.
     * Returns undefined if the level is below the loggers configured level.
     * @param  {...(string)} content 
     */
    verbose(...content) {
        return this._log(Logger.LEVEL.Verbose, ...content);
    }

    /**
     * Create a log message when the level is LEVEL.Info or below.
     * Returns undefined if the level is below the loggers configured level.
     * @param  {...(string)} content 
     */
    info(...content) {
        return this._log(Logger.LEVEL.Info, ...content);
    }

    /**
     * Create a log message when the level is LEVEL.Warn or below.
     * Returns undefined if the level is below the loggers configured level.
     * @param  {...(string|Error|Object)} content 
     */
    warn(...content) {
        return this._log(Logger.LEVEL.Warn, ...content);
    }

    /**
     * Create a log message when the level is LEVEL.Error or below.
     * Returns undefined if the level is below the loggers configured level.
     * @param  {...(string|Error|Object)} content 
     */
    error(...content) {
        return this._log(Logger.LEVEL.Error, ...content);
    }

    /**
     * Create a log message when the level is LEVEL.Critical or below.
     * Returns undefined if the level is below the loggers configured level.
     * @param  {...(string|Error|Object)} content 
     */
    critical(...content) {
        return this._log(Logger.LEVEL.Critical, ...content);
    }
}