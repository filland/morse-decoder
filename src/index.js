const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const whitespace = "**********";
    expr = expr.split(whitespace).join(" ");
    let result = [];
    
    for (let i = 0; i < expr.length; i++) {
        if(expr.charAt(i) !== ' ') {
            let letter = findLetter(expr.slice(i, 10+i));
            i+=9;
            result.push(letter);
        } else {
            result.push(" ");
            continue;
        }
    }
    return result.join("");
}

function findLetter(code) {
    const c = {
        "10": ".",
        "11": "-"
    } 
    let unpaddedLetter = code;
    for (let i = 0; i < code.length; i++) {
        const letter = code.charAt(i);
        if(letter === '0') {
            unpaddedLetter = code.substring(1+i, code.length);
        } else {
            break;
        }
    }

    let signs = [];
    for (let y = 0; y < unpaddedLetter.length; y++) {
        if(y%2===0) {
            signs.push(c[unpaddedLetter.substring(y, y+2)]);
        }
    }

    return MORSE_TABLE[signs.join("")];
}

module.exports = {
    decode
}