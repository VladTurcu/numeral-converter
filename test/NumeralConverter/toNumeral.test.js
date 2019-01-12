const { expect } = require('chai');
const numeralConverter = require('../../NumeralConverter');

describe('NumeralConverter', function () {
  // unit tests for number to numeral conversion
  describe('toNumeral', function () {

    it('should reject non-number type arguments with a TypeError', function() {
      expect(() => numeralConverter.toNumeral('I')).to.throw(TypeError);
    });

    it('should reject float type numbers with a TypeError', function () {
      expect(() => numeralConverter.toNumeral(1.5)).to.throw(TypeError);
    });
    
    it('should reject negative numbers with a RangeError', function() {
      expect(() => numeralConverter.toNumeral(-1)).to.throw(RangeError);    
    });

    it('should reject numbers above 3999 with a RangeError', function () {
      expect(() => numeralConverter.toNumeral(4000)).to.throw(RangeError);
    });

    it('should handle direct conversions', function() {
      expect(numeralConverter.toNumeral(1)).to.equal('I');
      expect(numeralConverter.toNumeral(5)).to.equal('V');
      expect(numeralConverter.toNumeral(10)).to.equal('X');
      expect(numeralConverter.toNumeral(50)).to.equal('L');
      expect(numeralConverter.toNumeral(100)).to.equal('C');
      expect(numeralConverter.toNumeral(500)).to.equal('D');
      expect(numeralConverter.toNumeral(1000)).to.equal('M');
    });

    it('should handle basic subtractive notation', function() {
      expect(numeralConverter.toNumeral(4)).to.equal('IV');
      expect(numeralConverter.toNumeral(9)).to.equal('IX');
      expect(numeralConverter.toNumeral(40)).to.equal('XL');
      expect(numeralConverter.toNumeral(90)).to.equal('XC');
      expect(numeralConverter.toNumeral(400)).to.equal('CD');
      expect(numeralConverter.toNumeral(900)).to.equal('CM');
    });

    it('should handle basic additive notation', function() {
      expect(numeralConverter.toNumeral(2)).to.equal('II');
      expect(numeralConverter.toNumeral(3)).to.equal('III');
      expect(numeralConverter.toNumeral(6)).to.equal('VI');
      expect(numeralConverter.toNumeral(7)).to.equal('VII');
      expect(numeralConverter.toNumeral(8)).to.equal('VIII');
      expect(numeralConverter.toNumeral(11)).to.equal('XI');
      expect(numeralConverter.toNumeral(55)).to.equal('LV');
      expect(numeralConverter.toNumeral(101)).to.equal('CI');
      expect(numeralConverter.toNumeral(110)).to.equal('CX');
      expect(numeralConverter.toNumeral(2000)).to.equal('MM');
    });

    it('should handle complex mixed notation', function() {
      expect(numeralConverter.toNumeral(448)).to.equal('CDXLVIII');
      expect(numeralConverter.toNumeral(1769)).to.equal('MDCCLXIX');
      expect(numeralConverter.toNumeral(2981)).to.equal('MMCMLXXXI');
      expect(numeralConverter.toNumeral(3849)).to.equal('MMMDCCCXLIX');
      expect(numeralConverter.toNumeral(3999)).to.equal('MMMCMXCIX');
    });

  });

});