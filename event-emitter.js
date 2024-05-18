const EventEmitter = require("events")
const myEmitter = new EventEmitter()

myEmitter.on('birthday',()=>{
    console.log(`Happy Birthday to you`);
})

myEmitter.emit('birthday')