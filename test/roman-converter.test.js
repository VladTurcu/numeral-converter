const { expect } = require('chai');

function converter(n) {
  return null;
}

// unit tests for roman numeral converter class
describe('roman numeral converter', function () {

  it('should reject non-string type arguments with a TypeError', function () {
    expect(() => converter(1)).to.throw(TypeError);
  });

  it('should reject strings containing non-numeral characters with a SyntaxError', function () {
    expect(() => converter('XOXO')).to.throw(SyntaxError);
  });

  it('should reject numbers above mmmcmxcix (3999) with a RangeError', function () {
    expect(() => converter('MMMM')).to.throw(RangeError);
  });

  it('should handle direct conversions', function () {
    expect(converter('I')).to.equal(1);
    expect(converter('V')).to.equal(5);
    expect(converter('X')).to.equal(10);
    expect(converter('L')).to.equal(50);
    expect(converter('C')).to.equal(100);
    expect(converter('D')).to.equal(500);
    expect(converter('M')).to.equal(1000);
  });

  it('should handle basic subtractive notation', function () {
    expect(converter('IV')).to.equal(4);
    expect(converter('IX')).to.equal(9);
    expect(converter('XL')).to.equal(40);
    expect(converter('XC')).to.equal(90);
    expect(converter('CD')).to.equal(400);
    expect(converter('CM')).to.equal(900);
  });

  it('should handle basic additive notation', function () {
    expect(converter('II')).to.equal(2);
    expect(converter('III')).to.equal(3);
    expect(converter('VI')).to.equal(6);
    expect(converter('VII')).to.equal(7);
    expect(converter('VIII')).to.equal(8);
    expect(converter('XI')).to.equal(11);
    expect(converter('LV')).to.equal(55);
    expect(converter('CI')).to.equal(101);
    expect(converter('CX')).to.equal(110);
    expect(converter('MM')).to.equal(2000);
  });

  it('should handle complex mixed notation', function () {
    expect(converter('CDXLVIII')).to.equal(448);
    expect(converter('MDCCLXIX')).to.equal(1769);
    expect(converter('MMCMLXXXI')).to.equal(2981);
    expect(converter('MMMDCCCXLIX')).to.equal(3849);
    expect(converter('MMMCMXCIX')).to.equal(3999);
  });

  it('should handle lower case characters', function () {
    expect(converter('i')).to.equal(1);
    expect(converter('v')).to.equal(5);
    expect(converter('x')).to.equal(10);
    expect(converter('l')).to.equal(50);
    expect(converter('d')).to.equal(100);
    expect(converter('d')).to.equal(500);
    expect(converter('m')).to.equal(1000);
  });

});