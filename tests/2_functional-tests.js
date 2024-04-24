const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
    test('Test GET /api/convert with 10L', (done) => {
        chai
         .request(server)
         .keepOpen()
         .get('/api/convert?input=10L')
         .end((err, res) => {
            assert.deepEqual(JSON.parse(res.text), {
                initNum: 10,
                initUnit: 'L',
                returnNum: 2.64172,
                returnUnit: 'gal',
                string: '10 liters converts to 2.64172 gallons'
            })
            done();
        })
    });

    test('Test GET /api/convert with 32g', (done) => {
        chai
         .request(server)
         .keepOpen()
         .get('/api/convert?input=32g')
         .end((err, res) => {
            assert.deepEqual(JSON.parse(res.text), {
                error: 'invalid unit'
            });
            done();
         })
    });

    test('Test GET /api/convert with 3/7.2/4kg', (done) => {
        chai
         .request(server)
         .keepOpen()
         .get('/api/convert?input=3/7.2/4kg')
         .end((err, res) => {
            assert.deepEqual(JSON.parse(res.text), {
                error: 'invalid number'
            })
            done();
         });
         
    })

    test('Test GET /api/convert with 3/7.2/4kilomegagram', (done) => {
        chai
         .request(server)
         .keepOpen()
         .get('/api/convert?input=3/7.2/4kilomegagram')
         .end((err, res) => {
            assert.deepEqual(JSON.parse(res.text), {
                error: 'invalid number and unit'
            })
            done();
         });
         
    })

    test('Test GET /api/convert with kg', (done) => {
        chai
         .request(server)
         .keepOpen()
         .get('/api/convert?input=kg')
         .end((err, res) => {
            assert.deepEqual(JSON.parse(res.text), {
                initNum: 1,
                initUnit: 'kg',
                returnNum: 2.20462,
                returnUnit: 'lbs',
                string: '1 kilograms converts to 2.20462 pounds'
            })
            done();
         });
         
    })


});
