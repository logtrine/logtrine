const assert = require('assert');
const Logger = require('../src/Logger.js');

let testee = new Logger();

describe('ConsoleLogger', function() {

    it('undefined message', () => {
        testee.level = Logger.LEVEL.All;
        let params = undefined;
        let result = testee._log(Logger.LEVEL.Info, params);
        assert.equal(result.length, 3);
        assert.equal(result[1], Logger._TAGS[Logger.LEVEL.Info]);
        assert.equal(result[2], params);
    });

    it('string message', () => {
        testee.level = Logger.LEVEL.All;
        let params = 'test';
        let result = testee._log(Logger.LEVEL.Info, params);
        assert.equal(result.length, 3);
        assert.equal(result[1], Logger._TAGS[Logger.LEVEL.Info]);
        assert.equal(result[2], params);
    });

    it('mixed message', () => {
        testee.level = Logger.LEVEL.All;
        let params = ['test', { a: 1, b: 2 }];
        let result = testee._log(Logger.LEVEL.Info, ...params);
        assert.equal(result.length, 4);
        assert.equal(result[1], Logger._TAGS[Logger.LEVEL.Info]);
        assert.equal(result[2], params[0]);
        assert.equal(result[3], params[1]);
    });
    
    it('level.all', () => {
        testee.level = Logger.LEVEL.All;
        let params = 'test';
        assert.equal(testee.trace(params)[2], params);
        assert.equal(testee.debug(params)[2], params);
        assert.equal(testee.verbose(params)[2], params);
        assert.equal(testee.info(params)[2], params);
        assert.equal(testee.warn(params)[2], params);
        assert.equal(testee.error(params)[2], params);
        assert.equal(testee.critical(params)[2], params);
    });
    
    it('level.trace', () => {
        testee.level = Logger.LEVEL.Trace;
        let params = 'test';
        assert.equal(testee.trace(params)[2], params);
        assert.equal(testee.debug(params)[2], params);
        assert.equal(testee.verbose(params)[2], params);
        assert.equal(testee.info(params)[2], params);
        assert.equal(testee.warn(params)[2], params);
        assert.equal(testee.error(params)[2], params);
        assert.equal(testee.critical(params)[2], params);
    });
    
    it('level.debug', () => {
        testee.level = Logger.LEVEL.Debug;
        let params = 'test';
        assert.equal(testee.trace(params), undefined);
        assert.equal(testee.debug(params)[2], params);
        assert.equal(testee.verbose(params)[2], params);
        assert.equal(testee.info(params)[2], params);
        assert.equal(testee.warn(params)[2], params);
        assert.equal(testee.error(params)[2], params);
        assert.equal(testee.critical(params)[2], params);
    });
    
    it('level.verbose', () => {
        testee.level = Logger.LEVEL.Verbose;
        let params = 'test';
        assert.equal(testee.trace(params), undefined);
        assert.equal(testee.debug(params), undefined);
        assert.equal(testee.verbose(params)[2], params);
        assert.equal(testee.info(params)[2], params);
        assert.equal(testee.warn(params)[2], params);
        assert.equal(testee.error(params)[2], params);
        assert.equal(testee.critical(params)[2], params);
    });
    
    it('level.info', () => {
        testee.level = Logger.LEVEL.Info;
        let params = 'test';
        assert.equal(testee.trace(params), undefined);
        assert.equal(testee.debug(params), undefined);
        assert.equal(testee.verbose(params), undefined);
        assert.equal(testee.info(params)[2], params);
        assert.equal(testee.warn(params)[2], params);
        assert.equal(testee.error(params)[2], params);
        assert.equal(testee.critical(params)[2], params);
    });
    
    it('level.warn', () => {
        testee.level = Logger.LEVEL.Warn;
        let params = 'test';
        assert.equal(testee.trace(params), undefined);
        assert.equal(testee.debug(params), undefined);
        assert.equal(testee.verbose(params), undefined);
        assert.equal(testee.info(params), undefined);
        assert.equal(testee.warn(params)[2], params);
        assert.equal(testee.error(params)[2], params);
        assert.equal(testee.critical(params)[2], params);
    });
    
    it('level.error', () => {
        testee.level = Logger.LEVEL.Error;
        let params = 'test';
        assert.equal(testee.trace(params), undefined);
        assert.equal(testee.debug(params), undefined);
        assert.equal(testee.verbose(params), undefined);
        assert.equal(testee.info(params), undefined);
        assert.equal(testee.warn(params), undefined);
        assert.equal(testee.error(params)[2], params);
        assert.equal(testee.critical(params)[2], params);
    });
    
    it('level.critical', () => {
        testee.level = Logger.LEVEL.Critical;
        let params = 'test';
        assert.equal(testee.trace(params), undefined);
        assert.equal(testee.debug(params), undefined);
        assert.equal(testee.verbose(params), undefined);
        assert.equal(testee.info(params), undefined);
        assert.equal(testee.warn(params), undefined);
        assert.equal(testee.error(params), undefined);
        assert.equal(testee.critical(params)[2], params);
    });
    
    it('level.none', () => {
        testee.level = Logger.LEVEL.None;
        let params = 'test';
        assert.equal(testee.trace(params), undefined);
        assert.equal(testee.debug(params), undefined);
        assert.equal(testee.verbose(params), undefined);
        assert.equal(testee.info(params), undefined);
        assert.equal(testee.warn(params), undefined);
        assert.equal(testee.error(params), undefined);
        assert.equal(testee.critical(params), undefined);
    });
});