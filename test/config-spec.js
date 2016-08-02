/**
 * Scenariusze testowe dla pliku konfiguracyjnego
 * Created by Robert on 2016-08-02.
 */

describe('Plik konfiguracyjny', function() {
    var config = require('./../config')
    var expect = require('chai').expect;
    it('powinien zwrocic obiekt w formacie JSON', function(done) {
        expect(config).to.be.an('object');
        done();
    });
});