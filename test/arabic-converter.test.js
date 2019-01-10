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

  it('should convert 1 to \"i\"', function() {
    expect(converter(1)).to.equal('i');
  });
  
  it('should convert 5 to \"v\"', function() {
    expect(converter(5)).to.equal('v');
  });

  it('should convert 10 to \"x\"', function() {
    expect(converter(10)).to.equal('x');
  });
  
  it('should convert 50 to \"l\"', function() {
    expect(converter(50)).to.equal('l');
  });
  
  it('should convert 100 to \"c\"', function() {
    expect(converter(100)).to.equal('c');
  });
  
  it('should convert 500 to \"d\"', function() {
    expect(converter(500)).to.equal('d');
  });
  
  it('should convert 1000 to \"m\"', function() {
    expect(converter(1000)).to.equal('m');
  });

  it('should convert 528 to \"dxxviii\"', function () {
    expect(converter(528)).to.equal('dxxviii');
  });

  it('should convert 1769 to \"mdcclxix\"', function () {
    expect(converter(1769)).to.equal('mdcclxix');
  });
  
  it('should convert 2981 to \"mmcmlxxxi\"', function () {
    expect(converter(2981)).to.equal('mmcmlxxxi');
  });
  
  it('should convert 3849 to \"mmmdcccxlix\"', function () {
    expect(converter(3849)).to.equal('mmmdcccxlix');
  });
  
  it('should convert 3999 to \"mmmcmxcix\"', function() {
    expect(converter(3999)).to.equal('mmmcmxcix');
  });

});