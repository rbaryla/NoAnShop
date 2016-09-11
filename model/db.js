/**
 * Created by Robert Baryła on 13.08.2016.
 */

/**
 * Funkcja tworzy połączenie do bazy danych na podstawie pliku konfiguracyjnego.
 * @param {config} config Plik konfiguracyjny
 * @returns {*} mongoose
 */
function dbConnect(config) {
    var mongoose = require('mongoose');

    // sprawdzam czy jestem połączony

    if (mongoose.connection.readyState === 0) {
        let dbConfig = config.db;
        let host = dbConfig.host || 'localhost',
            database = dbConfig.database || 'test',
            port = dbConfig.port || 27017,
            user = dbConfig.user || 'user',
            pass = dbConfig.pass || 'pass';
        mongoose.Promise = global.Promise;
        mongoose.connect(`mongodb://${user}:${pass}@${host}:${port}/${database}`);
    }

    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        // console.info('db connected');
    });

    return mongoose;
}

module.exports = dbConnect;
