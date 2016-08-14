/**
 * Created by Robert Baryła on 13.08.2016.
 */

describe('Polaczenie z baza danych', function () {
    var config = require('./../config');
    var db = require('./../model/db')(config);
    var expect = require('chai').expect;
    it('powinno zostac nawiazane', function (done) {
        expect(db.readyState).to.equal(1);
        done();
    })
    // console.log(db);
});