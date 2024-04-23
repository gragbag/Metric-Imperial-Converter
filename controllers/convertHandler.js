function ConvertHandler() {

  const units = {
    gal: 'L',
    L: 'gal',
    mi: 'km',
    km: 'mi',
    lbs: 'kg',
    kg: 'lbs'
  };

  const fullUnits = {
    gal: 'gallons',
    L: 'liters',
    mi: 'miles',
    km: 'kilometers',
    lbs: 'pounds',
    kg: 'kilograms'
  }

  const throwInvalid = (validUnit) => {
    if (!validUnit) {
      throw new Error('invalid number and unit');
    } else {
      throw new Error('invalid number');
    }
  }
  
  this.getNum = function(input) {

    let validUnit = true;
    try {
      this.spellOutUnit(this.getUnit(input));
    } catch (error) {
      validUnit = false;
    }

    const numbers = input.split('/');

    if (numbers.length > 2) {
      throwInvalid(validUnit);
      
    } else if (numbers.length == 2) {
      const numerator = numbers[0].match(/([\d.]+)/);
      const denominator = numbers[1].match(/([\d.]+)/);

      if (Number.isNaN(numerator) || Number.isNaN(denominator)) {
        throwInvalid(validUnit);
      }

      return parseFloat(numerator) / parseFloat(denominator);
    } else {
      const matches = input.match(/([\d.]+)/);

      if (!matches) {
        return 1;
      } else {
        if (Number.isNaN(matches[0])) {
          throwInvalid(validUnit);
        } else {
          return matches[0];
        }
        
      }

    }    

  };
  
  this.getUnit = function(input) {

    const matches = input.match(/([a-zA-Z]*)$/);

    if (!matches) {
      throw new Error('invalid unit');
    } else if (matches[0] != 'l' && matches[0] != 'L'){
      return matches[0].toLowerCase();
    } else {
      return matches[0].toUpperCase();
    }
    
  };
  
  this.getReturnUnit = function(initUnit) {
    let returnUnit = units[initUnit];

    if (!returnUnit) {
      throw new Error('invalid unit');
    } else {
      return returnUnit;
    }
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    result = fullUnits[unit];

    if (!result) {
      throw new Error('invalid unit');
    } else {
      return result;
    }

  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result = -1;

     switch(initUnit) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'L':
        result = initNum / galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      default:
        throw new Error('invalid unit');
     }
    
    return result.toFixed(5);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
  
}

module.exports = ConvertHandler;
