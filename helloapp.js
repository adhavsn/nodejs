const myModule = require('./count');
const events = require('events');
const util = require('util');

console.log(myModule);

console.log(myModule.count(['Madhu', 'Suji', 'Adhav', 'Muhil']));

// Event Emitter

var myEmitter = new events.EventEmitter()

myEmitter.on('eventA', (msg) => {console.log(msg)});


myEmitter.emit('eventA', 'Event A occured in the morning');

// Inherit class

ProblemTicket = function(no, desc){
    this.no = no;
    this.desc = desc;
}

util.inherits(ProblemTicket, events.EventEmitter);

var t1 = new ProblemTicket('One', ' Not able to login');
var t2 = new ProblemTicket('Two', ' Not showig any data');


var tickets = [t1, t2]

tickets.forEach(ticket => {ticket.on('incident', function display(mesg){ console.log(mesg + this.no + this.desc)});
    
});

// t1.on('incident', function display(mesg){ console.log(mesg + this.no + this.desc)});

t1.emit('incident', 'Incidet occured : ');
t2.emit('incident', 'Incidet occured : ');


//Read Write files
const fs = require('fs');

fs.readFile('readMe.txt','utf8', function(err, data){
    fs.appendFile('writeMe.txt',data, () => {});
});

fs.mkdir('files', () => {fs.readFile('readMe.txt', 'utf8', (err, data) => {fs.appendFile('./files/dupfile.txt', data, () => {})})})