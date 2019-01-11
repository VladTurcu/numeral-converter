const { expect } = require('chai');

function converter(n) {
  return null;
}

// unit tests for arabic numeral converter class
describe('arabic numeral converter', function () {

  it('should reject non-number type arguments with a TypeError', function() {
    expect(() => converter('i')).to.throw(TypeError);
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
    expect(converter(1)).to.equal('i');
    expect(converter(5)).to.equal('v');
    expect(converter(10)).to.equal('x');
    expect(converter(50)).to.equal('l');
    expect(converter(100)).to.equal('c');
    expect(converter(500)).to.equal('d');
    expect(converter(1000)).to.equal('m');
  });

  it('should handle basic subtractive notation', function() {
    expect(converter(4)).to.equal('iv');
    expect(converter(9)).to.equal('ix');
    expect(converter(40)).to.equal('xl');
    expect(converter(90)).to.equal('xc');
    expect(converter(400)).to.equal('cd');
    expect(converter(900)).to.equal('cm');
  });

  it('should handle basic additive notation', function() {
    expect(converter(2)).to.equal('ii');
    expect(converter(3)).to.equal('iii');
    expect(converter(6)).to.equal('vi');
    expect(converter(7)).to.equal('vii');
    expect(converter(8)).to.equal('viii');
    expect(converter(11)).to.equal('xi');
    expect(converter(55)).to.equal('lv');
    expect(converter(101)).to.equal('ci');
    expect(converter(110)).to.equal('cx');
    expect(converter(2000)).to.equal('mm');
  });

  it('should handle complex mixed notation', function() {
    expect(converter(448)).to.equal('cdxlviii');
    expect(converter(1769)).to.equal('mdcclxix');
    expect(converter(2981)).to.equal('mmcmlxxxi');
    expect(converter(3849)).to.equal('mmmdcccxlix');
    expect(converter(3999)).to.equal('mmmcmxcix');
  });

});