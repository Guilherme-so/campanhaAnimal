class Regex {
  constructor(private strToVerify: string) {}

  public set setStrToVerify(newValue: string) {
    this.strToVerify = newValue;
  }
  /**
   * Check if string matches the pattern
   * @param {RegExp} pattern
   * @returns {boolean} matched
   */
  verifyPattern(pattern: RegExp): boolean {
    const strMatch = this.strToVerify.match(pattern);
    return strMatch ? strMatch[0] === this.strToVerify : false;
  }

  /**
   * Check is valid CNPJ
   * @param {boolean} regexMatch when is true verify Pattern
   * @returns {boolean|string} Boolean if string match or string formatted
   */
  convertToCNPJ(regexMatch?: boolean): boolean | string {
    let removeNonNumbersCaract = this.strToVerify.replace(/\D/g, "");

    if (
      removeNonNumbersCaract.length < 14 ||
      removeNonNumbersCaract.length > 14
    )
      throw new Error("Invalid CNPJ");

    // If true, check if string matches the pattern
    if (regexMatch) {
      return this.verifyPattern(
        /^(\d){2}(.){1}(\d){3}(.){1}(\d){3}(\/){1}(\d){4}(-){1}(\d){2}/g
      );
    }

    const patternToRefactor = this.strToVerify.match(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/
    );

    // Return CNPJ refactored
    if (patternToRefactor) {
      if (
        patternToRefactor[1] &&
        patternToRefactor[2] &&
        patternToRefactor[3] &&
        patternToRefactor[4] &&
        patternToRefactor[5]
      ) {
        return `${patternToRefactor[1]}.${patternToRefactor[2]}.${patternToRefactor[3]}/${patternToRefactor[4]}-${patternToRefactor[5]}`;
      }
    }

    return this.strToVerify;
  }
  /**
   * Verify is a valid CNPJ
   * @param {boolean} Verify string match regex
   * @returns string formated CNPJ | boolean
   */

  convertToCPF(regexMatch?: boolean): boolean | string {
    let removeNonNumbersCaract = this.strToVerify.replace(/\D/g, "");

    if (
      removeNonNumbersCaract.length < 11 ||
      removeNonNumbersCaract.length > 14
    )
      throw new Error("Invalid CPF");

    // If true, check if string matches the pattern
    if (regexMatch) {
      return this.verifyPattern(
        /^([0-9]){3}(.){1}([0-9]){3}(.){1}([0-9]){3}(-){1}([0-9]){2}/g
      );
    }

    const patternToRefactor = this.strToVerify.match(
      /(\d{3})(\d{3})(\d{3})(\d{2})/
    );

    // Return CPF refactored
    if (patternToRefactor) {
      if (
        patternToRefactor[1] &&
        patternToRefactor[2] &&
        patternToRefactor[3] &&
        patternToRefactor[4]
      ) {
        return `${patternToRefactor[1]}.${patternToRefactor[2]}.${patternToRefactor[3]}-${patternToRefactor[4]}`;
      }
    }

    return this.strToVerify;
  }

  /**
   * NEED REFACTOR
   * Is valid phone number regex
   * @param regexMatch boolean Verify string match regex
   * @return string formated number | boolean
   */
  isPhoneNumber(regexMatch?: boolean): string | boolean {
    if (this.strToVerify.length < 10) return false;

    if (regexMatch) {
      const pattern =
        /^[(]{0,1}[0-9]{2,3}[)]{0,1}( ?)([0-9]){4,5}(-?)([0-9]){4,5}/g;
      return this.strToVerify.match(pattern)[0] === this.strToVerify;
    }

    let value = this.strToVerify.replace("/D/g", ""); // replace all caracteres
    let match;

    if (value) {
      match =
        value.length == 10
          ? value.match(/(\d{0,3})(\d{0,4})(\d{0,5})/)
          : value.length == 11
          ? value.match(/(\d{0,3})(\d{0,4})(\d{0,6})/)
          : value;

      const newNumber = match[1]
        ? `(${match[1]}) ${match[2]}-${match[3]}`
        : match;

      return newNumber;
    }
  }
  /**
   * Verify is valid Email
   * @returns boolean
   */
  isEmail(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+/gi.test(this.strToVerify);
  }
}

export default Regex;
