const EventEmitter = require('events');

class School extends EventEmitter {
    startPeriod = () => {
        console.log('start period');

        // raise an event
        setTimeout(() => {
            this.emit('bellRing', 'second period is over');
        }, 2000);
    };
}

module.exports = School;