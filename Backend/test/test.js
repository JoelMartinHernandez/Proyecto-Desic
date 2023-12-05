const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);

var assert = require('assert');
var request = require('supertest')
var app = require('../index.js')

var request = request("http://localhost:8080")

describe('lines', function() {
    describe('GET', function(){
        it('Should return json as default data format', function(done){
            request.get('/api/line')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
        });
      });