/**
 * Created by Robert Baryła on 13.08.2016.
 */

/**
 * Funkcja tworzy połączenie do bazy danych na podstawie pliku konfiguracyjnego.
 * @param config Plik konfiguracyjny
 * @returns {*} mongoose.connection
 */
function dbConnect(config) {
    var mongoose = require('mongoose');

    // sprawdzam czy jestem połączony

    if (mongoose.connection.readyState===0) {
        mongoose.connect('mongodb://localhost/test');
    }


    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        // console.info('db connected');
    });

    return mongoose.connection;
}

module.exports = dbConnect;
