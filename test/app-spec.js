/**
 * Scenariusze testowe dla pliku app.js
 * Testy obejmują uruchomienie serwera i sprawdzenie odpowiedzi głównych składników systemu
 * Created by Robert on 2016-07-30.
 */
var request = require('supertest');
describe('Serwer NodeJs Express', function () {

    var server = require('./../app');

    it('dla adrestu  / odpowiada statusem 200 z naglowkiem Content-Type text/html; charset=UTF-8', function (done) {
        request(server)
            .get('/')
            .expect('Content-Type', 'text/html; charset=UTF-8')
            .expect(200, done);
    });
    it('dla niejsteniejacego adresu odpowiada stausetm 404', function (done) {
        request(server)
            .get('/foo/bar')
            .expect(404, done);
    });

});

