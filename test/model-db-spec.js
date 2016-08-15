/**
 * Created by Robert Baryła on 13.08.2016.
 */

describe('Polaczenie z baza danych', function () {
    var config = require('./../config');
    var db = require('./../model/db')(config);
    var expect = require('chai').expect;
    it('powinno zostac nawiazane', function (done) {
        expect(db.connection.readyState).to.equal(1);
        done();
    })

    // test poboru danych
    it('powinno zwrocic dane z modelu testowego', function (done) {
        var testSchema = db.Schema({foo: String});
        var Test = db.model('Test', testSchema);
        Test.find({}).exec(function(err, result) {
            if (err) {
                console.log(err);
            }
            expect(err).to.be.a('null');
            expect(result).to.be.an('array');
            done();
        });
    });
});