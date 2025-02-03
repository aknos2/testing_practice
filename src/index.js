
export function capitalize(strings) {
    if (typeof strings === "number" && !strings) return "Please input strings"
    return strings
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function reverseString(string) {
    return string
    .split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ')
}

export const calculator = {
    add(a, b) {
        const error = isThisNumber(a, b);  
        if (error) {
          return error; 
        }
        return a + b;  
      },

    subtract(a, b) {
        const error = isThisNumber(a, b);  
        if (error) {
          return error; 
        }
        return a - b;  
      },

    divide(a, b) {
        const error = isThisNumber(a, b);  
        if (error) {
          return error; 
        }
        return a / b;  
      },
    
    multiply(a, b) {
        const error = isThisNumber(a, b);  
        if (error) {
          return error; 
        }
        return a * b;  
    },
};

function isThisNumber(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Please input a number";
      }
      return null;
}

export class Abc {
    constructor() {
        this.lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        this.uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.maxNumber = 26;
    }

    caesarCipher(string, shift) {
        if (typeof string !== "string" || typeof shift !== "number") {
            return "Input the correct letter, number";
        }

        return string
            .split("")
            .map(char => {
                if (this.lowercaseChars.includes(char)) {
                    // Shift lowercase letters
                    let index = (this.lowercaseChars.indexOf(char) + shift) % this.maxNumber;
                    return this.lowercaseChars[index];
                } else if (this.uppercaseChars.includes(char)) {
                    // Shift uppercase letters
                    let index = (this.uppercaseChars.indexOf(char) + shift) % this.maxNumber;
                    return this.uppercaseChars[index];
                } else {
                    return char;
                }
            })
            .join("");
    }
}

export const abc = new Abc();

export function analyzeArray(array) {
    if (!Array.isArray(array) || array.length === 0) {
        return "Input must be a non-empty array";
    }

    const sum = array.reduce((acc, sum) => acc + sum, 0);
    return {
        average: sum / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length,
    }
}

