const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test('convertHandler should correctly read a whole number input', () => {
        assert.equal(convertHandler.getNum('2'), 2);
    });

    test('convertHandler should correctly read a decimal number input', () => {
        assert.equal(convertHandler.getNum('2.65'), 2.65);
    });

    test('convertHandler should correctly read a fractional input', () => {
        assert.equal(convertHandler.getNum('10/2'), 5);
    });
    
    test('convertHandler should correctly read a fractional input with a decimal', () => {
        assert.equal(convertHandler.getNum('10.5/3.5'), 3);
    });
    
    test('convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3)', () => {
        assert.throws(() => {convertHandler.getNum('3/2/3')});
    });

    test('convertHandler should correctly default to a numerical input of 1 when no numerical input is provided', () => {
        assert.equal(convertHandler.getNum('kg'), 1);
    });
    
    
    
    test('convertHandler should correctly read each valid input unit', () => {
        assert.equal(convertHandler.getUnit('kg'), 'kg');
        assert.equal(convertHandler.getUnit('L'), 'L');
        assert.equal(convertHandler.getUnit('gal'), 'gal');
        assert.equal(convertHandler.getUnit('mi'), 'mi');
        assert.equal(convertHandler.getUnit('km'), 'km');
        assert.equal(convertHandler.getUnit('lbs'), 'lbs');
    });

    test('convertHandler should correctly return an error for an invalid input unit', () => {
        assert.throws(() => {convertHandler.getUnit('kgi')});
    })
    
    test('convertHandler should return the correct return unit for each valid input unit', () => {
        
        assert.equal(convertHandler.getReturnUnit('gal'), 'L');
        assert.equal(convertHandler.getReturnUnit('L'), 'gal');
        assert.equal(convertHandler.getReturnUnit('mi'), 'km');
        assert.equal(convertHandler.getReturnUnit('km'), 'mi');
        assert.equal(convertHandler.getReturnUnit('lbs'), 'kg');
        assert.equal(convertHandler.getReturnUnit('kg'), 'lbs');
    })

    test('convertHandler should correctly return the spelled-out string unit for each valid input unit', () => {
        assert.equal(convertHandler.spellOutUnit('kg'), 'kilograms');
        assert.equal(convertHandler.spellOutUnit('gal'), 'gallons');
        assert.equal(convertHandler.spellOutUnit('L'), 'liters');
        assert.equal(convertHandler.spellOutUnit('mi'), 'miles');
        assert.equal(convertHandler.spellOutUnit('km'), 'kilometers');
        assert.equal(convertHandler.spellOutUnit('lbs'), 'pounds');
    })

    test('convertHandler should correctly convert gal to L', () => {
        assert.equal(convertHandler.convert(5, 'gal'), 18.92705);
    })

    test('convertHandler should correctly convert L to gal', () => {
        assert.equal(convertHandler.convert(5, 'L'), 1.32086);
    })

    test('convertHandler should correctly convert mi to km', () => {
        assert.equal(convertHandler.convert(5, 'mi'), 8.0467);
    })

    test('convertHandler should correctly convert km to mi', () => {
        assert.equal(convertHandler.convert(5, 'km'), 3.10686);
    })

    test('convertHandler should correctly convert lbs to kg', () => {
        assert.equal(convertHandler.convert(5, 'lbs'), 2.26796);
    })

    test('convertHandler should correctly convert kg to lbs', () => {
        assert.equal(convertHandler.convert(5, 'kg'), 11.02312);
    })
    
    
    
});