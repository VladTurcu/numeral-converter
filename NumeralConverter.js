/**
 * Class for converting numbers and numerals. Designed to work with roman numeral system.
 */
class NumeralConverter {
  /**
   * Create a numeralConverter.
   * @param {object} numeralMatrix - The numeral system as an object with numeral keys and integer values.
   */
  constructor(numeralMatrix) {
    Object.assign(this, numeralMatrix);
  }

  /**
   * Returns the character combinations for additive and substrative notation in the Roman Numeral system.
   * @return {array} - Roman character combinations.
   */
  get characterCombinations() {
    return ['', 'y', 'yy', 'yyy', 'yz', 'z', 'zy', 'zyy', 'zyyy', 'yq'];
  }

  /**
   * Returns the numeralMatrix passed in the constructor inverted with integer keys and numeral values.
   * @return {object} - The inverted numeralConverter instance.
   */
  get invertedMatrix() {
    return NumeralConverter.invertObject(this);
  }

  /**
   * Helper function to invert any object swapping the keys and values.
   * @param {object} obj
   * @return {object} - The inverted obj.
   */
  static invertObject(obj) {
    return Object
      .entries(obj)
      .reduce((acc, [key, val]) => Object.assign(acc, { [val]: key }), {});
  }

  /**
   * Converts a numeral to a number.
   * @param {string} numeralString
   * @return {number} - The integer expression of numeralString.
   */
  toNumber(numeralString) {
    // validate arguments
    if (typeof (numeralString) !== 'string') throw new TypeError(`Expected string, recieved ${typeof (numeralString)}`);
    if (/[^IVXLCDM]/i.test(numeralString)) throw new SyntaxError('Recieved invalid non-numeral character');
    if (numeralString.substr(0, 4) === 'MMMM') throw new RangeError(`Roman numeral system supports values up to 3999 only.`);
    // converts the numeralString to an array of characters in reverse order
    return numeralString.toUpperCase()
      .split('')
      .reverse()
      // replaces each character with its integer value
      .map(numeral => this[numeral])
      // cycles through the integer array adding values larger than their predecessor, and subtracting values smaller than their predessor to/from the total
      .reduce((acc, cur, i, arr) => {
        if ((arr[i - 1] || 0) <= cur) return acc + cur;
        else return acc - cur;
      }, 0);
  }

  /**
   * Converts an integer to numeral.
   * @param {number} n 
   * @return {string} - The numeral expression of n.
   */
  toNumeral(n) {
    // validate arguments
    if (typeof (n) !== 'number' || isNaN(n)) throw new TypeError(`Expected number, recieved ${n}`);
    if (n <= 0 || 4000 <= n) throw new RangeError(`Expected number in range 1-3999, recieved ${n}`);
    if (!Number.isInteger(n)) throw new TypeError(`Expected integer, recieved float`);

    const { characterCombinations, invertedMatrix } = this;
    // converts n to an array of (string) numbers in reverse
    const nReversedDigits = n.toString().split('').reverse();
    // replaces each number with its corresponding roman numeral combination
    const nReversedCombinations = nReversedDigits.map(digit => characterCombinations[digit]);
    // cycle through the combination array and populate the combo strings with actual numeral values
    const nReversedNumerals = nReversedCombinations.map((str, i) => {
      // generate the invertedMatrix keys for the correct numeral values using the combo strings index, combine these on the charSwapMatrix
      const pow10 = Math.pow(10, i);
      const charSwapMatrix = { y: invertedMatrix[pow10], z: invertedMatrix[pow10 * 5], q: invertedMatrix[pow10 * 10] };
      // split the combo string and replace the characters with the numerals, before joining and returning
      return str.split('').map(ch => charSwapMatrix[ch]).join('');
    });
    // join and return the final string
    const nNumeralString = nReversedNumerals.reverse().join('');
    return nNumeralString;
  }
}

module.exports = new NumeralConverter({
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
});