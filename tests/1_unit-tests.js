const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    assert.isNotNull(convertHandler.getNum('2kg'));
    assert.isNotNull(convertHandler.getNum('2.65kg'));
    assert.isNotNull(convertHandler.getNum('10/3kg'));
    assert.isNotNull(convertHandler.getNum('10.5/3.5kg'));
    assert.isNotNull(convertHandler.getNum('kg'));
    
    assert.isNotNull(convertHandler.getUnit('kg'));
    assert.isNotNull(convertHandler.getReturnUnit('kg'));
    assert.isNotNull(convertHandler.spellOutUnit('kg'));
    assert.isNotNull(convertHandler.getReturnUnit('gal'));
    assert.isNotNull(convertHandler.getReturnUnit('L'));
    assert.isNotNull(convertHandler.getReturnUnit('mi'));
    assert.isNotNull(convertHandler.getReturnUnit('km'));
    assert.isNotNull(convertHandler.getReturnUnit('lbs'));
    assert.isNotNull(convertHandler.getReturnUnit('kg'));
});