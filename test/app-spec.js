/**
 * Created by Robert on 2016-07-30.
 */
var request = require('supertest');
describe('Serwer NodeJs Express', function () {

    var server = require('./../app');

    it('odpowiada statusem 200 /', function testSlash(done) {
        request(server)
            .get('/')
            .expect(200, done);
    });
    it('dla niejsteniejacego adresu odpowiada stausetm 404', function testPath(done) {
        request(server)
            .get('/foo/bar')
            .expect(404, done);
    });

});

