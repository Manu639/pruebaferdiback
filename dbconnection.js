const mongoose = require('mongoose');
const db = mongoose.connection;

(async () => {
    await mongoose.connect('mongodb://localhost:27017/users');
})();

db.on('error', console.error.bind(console, 'error de conexion:'));

db.once('open', () => {
    console.log('db conectada');
});