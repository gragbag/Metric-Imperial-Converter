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
            console.log(JSON.parse(res.text));
            assert.equal(JSON.parse(res.text), {
                initNum: 10,
                initUnit: 'L',
                returnNum: 2.64172,
                returnUnit: 'gal',
                string: "10 liters converts to 2.64172 gallons"
            })
            assert.equal(res.status, 200);
            done();
        })
    });


});
