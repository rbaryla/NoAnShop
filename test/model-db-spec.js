/**
 * Created by Robert Baryła on 13.08.2016.
 */

describe('Polaczenie z baza danych', function () {
    var config = require('./../config');
    var db = require('./../model/db')(config);
    var expect = require('chai').expect;

    // test poboru danych
    var testSchema = db.Schema({foo: String});
    var Test = db.model('Test', testSchema);
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

    // test zapisu danych
    it('powinno pozwolic na zapis danych', function (done){

        var testIns = new Test({foo: 'test'});
        expect(testIns).to.be.an('object');
        expect(testIns).to.have.property('_id');
        done();
    });
    
    // test usunięcia danych
    it('powinno pozwolic na usuniecie danych', function (done) {

        Test.remove({foo: 'test'}, function(err) {
            if (!err) {
                done();
            }
        });
    });
});