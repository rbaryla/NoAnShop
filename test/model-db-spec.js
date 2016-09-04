/**
 * Created by Robert Baryła on 13.08.2016.
 */
var it = require('mocha/lib/mocha.js').it;
var describe = require('mocha/lib/mocha.js').describe;

describe('Polaczenie z baza danych', function () {
    var config = require('./../config');
    var db = require('./../model/db')(config);
    var expect = require('chai').expect;

    var testSchema = db.Schema({foo: String});
    var Test = db.model('Test', testSchema);

    // test zapisu danych
    it('powinno pozwolic na zapis danych', function (done) {
        var testIns = new Test({foo: 'test'});
        expect(testIns).to.be.an('object');
        expect(testIns).to.have.property('_id');
        done();
    });

    // test poboru danych
    it('powinno zwrocic dane z modelu testowego', function (done) {
        Test.find({}).exec(function(err, result) {
            if (err) {
                console.log(err);
            }
            expect(err).to.be.a('null');
            expect(result).to.be.an('array');
            done();
        });
    });

    // test usunięcia danych
    it('powinno pozwolic na usuniecie danych', function (done) {
        Test.remove({}, function(err) {
            if (!err) {
                done();
            }
        });
    });
});
