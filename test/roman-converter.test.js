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
    expect(() => converter('xoxo')).to.throw(SyntaxError);
  });

  it('should reject numbers above mmmcmxcix (3999) with a RangeError', function () {
    expect(() => converter('mmmm')).to.throw(RangeError);
  });

  it('should handle direct conversions', function () {
    expect(converter('i')).to.equal(1);
    expect(converter('v')).to.equal(5);
    expect(converter('x')).to.equal(10);
    expect(converter('l')).to.equal(50);
    expect(converter('c')).to.equal(100);
    expect(converter('d')).to.equal(500);
    expect(converter('m')).to.equal(1000);
  });

  it('should handle basic subtractive notation', function () {
    expect(converter('iv')).to.equal(4);
    expect(converter('ix')).to.equal(9);
    expect(converter('xl')).to.equal(40);
    expect(converter('xc')).to.equal(90);
    expect(converter('cd')).to.equal(400);
    expect(converter('cm')).to.equal(900);
  });

  it('should handle basic additive notation', function () {
    expect(converter('ii')).to.equal(2);
    expect(converter('iii')).to.equal(3);
    expect(converter('vi')).to.equal(6);
    expect(converter('vii')).to.equal(7);
    expect(converter('viii')).to.equal(8);
    expect(converter('xi')).to.equal(11);
    expect(converter('lv')).to.equal(55);
    expect(converter('ci')).to.equal(101);
    expect(converter('cx')).to.equal(110);
    expect(converter('mm')).to.equal(2000);
  });

  it('should handle complex mixed notation', function () {
    expect(converter('cdxlviii')).to.equal(448);
    expect(converter('mdcclxix')).to.equal(1769);
    expect(converter('mmcmlxxxi')).to.equal(2981);
    expect(converter('mmmdcccxlix')).to.equal(3849);
    expect(converter('mmmcmxcix')).to.equal(3999);
  });

});