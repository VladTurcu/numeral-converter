const { expect } = require('chai');

function converter(n) {
  return null;
}

// unit tests for arabic numeral converter class
describe('arabic numeral converter', function () {

  it('should reject non-number type arguments with a TypeError', function() {
    expect(() => converter('I')).to.throw(TypeError);
  });

  it('should reject float type numbers with a TypeError', function () {
    expect(() => converter(1.5)).to.throw(TypeError);
  });
  
  it('should reject negative numbers with a RangeError', function() {
    expect(() => converter(-1)).to.throw(RangeError);    
  });

  it('should reject numbers above 3999 with a RangeError', function () {
    expect(() => converter(4000)).to.throw(RangeError);
  });

  it('should handle direct conversions', function() {
    expect(converter(1)).to.equal('I');
    expect(converter(5)).to.equal('V');
    expect(converter(10)).to.equal('X');
    expect(converter(50)).to.equal('L');
    expect(converter(100)).to.equal('C');
    expect(converter(500)).to.equal('D');
    expect(converter(1000)).to.equal('M');
  });

  it('should handle basic subtractive notation', function() {
    expect(converter(4)).to.equal('IV');
    expect(converter(9)).to.equal('IX');
    expect(converter(40)).to.equal('XL');
    expect(converter(90)).to.equal('XC');
    expect(converter(400)).to.equal('CD');
    expect(converter(900)).to.equal('CM');
  });

  it('should handle basic additive notation', function() {
    expect(converter(2)).to.equal('II');
    expect(converter(3)).to.equal('III');
    expect(converter(6)).to.equal('VI');
    expect(converter(7)).to.equal('VII');
    expect(converter(8)).to.equal('VIII');
    expect(converter(11)).to.equal('XI');
    expect(converter(55)).to.equal('LV');
    expect(converter(101)).to.equal('CI');
    expect(converter(110)).to.equal('CX');
    expect(converter(2000)).to.equal('MM');
  });

  it('should handle complex mixed notation', function() {
    expect(converter(448)).to.equal('CDXLVIII');
    expect(converter(1769)).to.equal('MDCCLXIX');
    expect(converter(2981)).to.equal('MMCMLXXXI');
    expect(converter(3849)).to.equal('MMMDCCCXLIX');
    expect(converter(3999)).to.equal('MMMCMXCIX');
  });

});