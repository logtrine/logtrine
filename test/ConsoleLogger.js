const ConsoleLogger = require('../src/ConsoleLogger.js');

let testee = new ConsoleLogger();

describe('ConsoleLogger', function() {

    it('STDOUT', () => {
        testee.level = ConsoleLogger.LEVEL.All;
        testee.trace('0', 'a');
        testee.debug('1', 'b');
        testee.verbose('2', 'c');
        testee.info('3', 'd');
        testee.warn('4', 'e');
        testee.error('5', 'f');
        testee.critical('6', 'g');
        
        testee.info('x');
        testee.info({ a:1, b:2 }, 'c:3');
        testee.info();
    });
});