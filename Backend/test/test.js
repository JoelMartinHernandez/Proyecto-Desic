const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);

var assert = require('assert');
var request = require('supertest')
var app = require('../index.js');


var request = request("http://localhost:8080")

describe('GET /api/line', function() {
    it('Should return lines with the expected fields', function(done) {
        request(app)
            .get('/api/line')
            .end((err, res) => {
                if (err) return done(err);

                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');

                // Verificar que cada objeto en el array tiene los campos del modelo
                res.body.forEach(Lines => {
                    expect(Lines).to.have.property('number');
                    expect(Lines).to.have.property('firstStop');
                    expect(Lines).to.have.property('lastStop');
                });

                done();
            });
    });
});

// res.body.forEach(Lines => {
//     expect(Lines).to.have.property('number');
//     expect(Lines).to.have.property('firstStop');
//     expect(Lines).to.have.property('lastStop');
// });