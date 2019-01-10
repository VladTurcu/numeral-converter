const { expect } = require('chai');

function converter(n) {
  return null;
}

// unit tests for roman numeral converter class
describe('roman numeral converter', function () {

  it('should reject non-string type arguments with a TypeError', function () {
    expect(() => converter(1)).to.throw(TypeError);
  });

  it('should reject strings containing characters other than \"i\", \"v\", \"x\", \"l\", \"c\", \"d\" & \"m\" with a SyntaxError', function () {
    expect(() => converter('xoxo')).to.throw(SyntaxError);
  });

  it('should reject numbers above mmmcmxcix (3999) with a RangeError', function () {
    expect(() => converter('mmmm')).to.throw(RangeError);
  });

  it('should convert \"i\" to 1', function () {
    expect(converter('i')).to.equal(1);
  });

  it('should convert \"v\" to 5', function () {
    expect(converter('v')).to.equal(5);
  });

  it('should convert \"x\" to 10', function () {
    expect(converter('x')).to.equal(10);
  });

  it('should convert \"l\" to 50', function () {
    expect(converter('l')).to.equal(50);
  });

  it('should convert \"c\" to 100', function () {
    expect(converter('c')).to.equal(100);
  });

  it('should convert \"d\" to 500', function () {
    expect(converter('d')).to.equal(500);
  });

  it('should convert \"m\" to 1000', function () {
    expect(converter('m')).to.equal(1000);
  });

  it('should convert \"dxxviii\" to 528', function () {
    expect(converter('dxxviii')).to.equal(528);
  });

  it('should convert \"mdcclxix\" to 1769', function () {
    expect(converter('mdcclxix')).to.equal(1769);
  });

  it('should convert \"mmcmlxxxi\" to 2981', function () {
    expect(converter('mmcmlxxxi')).to.equal(2981);
  });

  it('should convert \"mmmdcccxlix\" to 3849', function () {
    expect(converter('mmmdcccxlix')).to.equal(3849);
  });

  it('should convert \"mmmcmxcix\" to 3999', function () {
    expect(converter('mmmcmxcix')).to.equal(3999);
  });

});