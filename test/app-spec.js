/**
 * Scenariusze testowe dla pliku app.js
 * Testy obejmują uruchomienie serwera i sprawdzenie odpowiedzi głównych składników systemu
 * Created by Robert on 2016-07-30.
 */

var request = require('supertest');
describe('Serwer NodeJs Express', function () {

    var server = require('./../app');

    it('dla adresu  / odpowiada statusem 200 z naglowkiem Content-Type text/html; charset=UTF-8', function (done) {
        request(server)
            .get('/')
            .expect('Content-Type', 'text/html; charset=UTF-8')
            .expect(200)
            .end(done)
        ;
    });
    it('dla nieisteniejacego adresu odpowiada stausetm 404', function (done) {
        request(server)
            .get('/foo/bar')
            .expect(404)
            .end(done);
    });

});

