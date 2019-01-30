var EventEmitter = require('events').EventEmitter;

var dispatcher = new EventEmitter();

dispatcher.on('error', function (err) {
    console.log("Error");
});

dispatcher.on('connect', function (data) {
    console.log('Connect 1', data);
});

dispatcher.on('connect', function (data) {
    console.log('Connect 2', data);
});


dispatcher.emit('connect', {foo: 1});

dispatcher.emit('error', new Error('Something went wrong!'));