const { expect } = require('chai');
const numeralConverter = require('../../NumeralConverter');

describe('NumeralConverter', function() {
  // unit tests for roman numeral to number conversion
  describe('toNumber', function () {

    it('should reject non-string type arguments with a TypeError', function () {
      expect(() => numeralConverter.toNumber(1)).to.throw(TypeError);
    });

    it('should reject strings containing non-numeral characters with a SyntaxError', function () {
      expect(() => numeralConverter.toNumber('XOXO')).to.throw(SyntaxError);
    });

    it('should reject numbers above mmmcmxcix (3999) with a RangeError', function () {
      expect(() => numeralConverter.toNumber('MMMM')).to.throw(RangeError);
    });

    it('should handle direct conversions', function () {
      expect(numeralConverter.toNumber('I')).to.equal(1);
      expect(numeralConverter.toNumber('V')).to.equal(5);
      expect(numeralConverter.toNumber('X')).to.equal(10);
      expect(numeralConverter.toNumber('L')).to.equal(50);
      expect(numeralConverter.toNumber('C')).to.equal(100);
      expect(numeralConverter.toNumber('D')).to.equal(500);
      expect(numeralConverter.toNumber('M')).to.equal(1000);
    });

    it('should handle basic subtractive notation', function () {
      expect(numeralConverter.toNumber('IV')).to.equal(4);
      expect(numeralConverter.toNumber('IX')).to.equal(9);
      expect(numeralConverter.toNumber('XL')).to.equal(40);
      expect(numeralConverter.toNumber('XC')).to.equal(90);
      expect(numeralConverter.toNumber('CD')).to.equal(400);
      expect(numeralConverter.toNumber('CM')).to.equal(900);
    });

    it('should handle basic additive notation', function () {
      expect(numeralConverter.toNumber('II')).to.equal(2);
      expect(numeralConverter.toNumber('III')).to.equal(3);
      expect(numeralConverter.toNumber('VI')).to.equal(6);
      expect(numeralConverter.toNumber('VII')).to.equal(7);
      expect(numeralConverter.toNumber('VIII')).to.equal(8);
      expect(numeralConverter.toNumber('XI')).to.equal(11);
      expect(numeralConverter.toNumber('LV')).to.equal(55);
      expect(numeralConverter.toNumber('CI')).to.equal(101);
      expect(numeralConverter.toNumber('CX')).to.equal(110);
      expect(numeralConverter.toNumber('MM')).to.equal(2000);
    });

    it('should handle complex mixed notation', function () {
      expect(numeralConverter.toNumber('CDXLVIII')).to.equal(448);
      expect(numeralConverter.toNumber('MDCCLXIX')).to.equal(1769);
      expect(numeralConverter.toNumber('MMCMLXXXI')).to.equal(2981);
      expect(numeralConverter.toNumber('MMMDCCCXLIX')).to.equal(3849);
      expect(numeralConverter.toNumber('MMMCMXCIX')).to.equal(3999);
    });

    it('should handle lowercase characters', function () {
      expect(numeralConverter.toNumber('i')).to.equal(1);
      expect(numeralConverter.toNumber('v')).to.equal(5);
      expect(numeralConverter.toNumber('x')).to.equal(10);
      expect(numeralConverter.toNumber('l')).to.equal(50);
      expect(numeralConverter.toNumber('c')).to.equal(100);
      expect(numeralConverter.toNumber('d')).to.equal(500);
      expect(numeralConverter.toNumber('m')).to.equal(1000);
    });

  });
  
});
