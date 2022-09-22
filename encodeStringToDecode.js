
let stringOfAlphabets = 'abcdefghijklmnopqrstuvwxyz';
let arrOfAlphabetsInSmall = stringOfAlphabets.split("");
let arrOfAlphabetsInUpperCase = stringOfAlphabets.toUpperCase().split("");

const checkForChar = (char) => {
    if (arrOfAlphabetsInSmall.some((e) => e === char) || arrOfAlphabetsInUpperCase.includes(char)) // here we can use both methods, 'includes' OR 'some' And of course we can use 'indexOf' technique also 
    {
        return true;
    } else {
        return false;
    }
}

const giveMeNewChar = (char) => {
    if (arrOfAlphabetsInSmall.some((e) => e === char)) // here we can use both methods, 'includes' OR 'some'
    {
        let cypherAlphaIndex = arrOfAlphabetsInSmall.indexOf(char) + 13;
        if (cypherAlphaIndex < 26) {
            return arrOfAlphabetsInSmall[cypherAlphaIndex];
        } else {
            return arrOfAlphabetsInSmall[cypherAlphaIndex - 26];
        }

    } else {
        let cypherAlphaIndexInLargCaps = arrOfAlphabetsInUpperCase.indexOf(char) + 13;
        if (cypherAlphaIndexInLargCaps < 26) {
            return arrOfAlphabetsInUpperCase[cypherAlphaIndexInLargCaps];
        } else {
            return arrOfAlphabetsInUpperCase[cypherAlphaIndexInLargCaps - 26];
        }
    }
}

function rot13(str) {
    let strArr = str.split("");

    for (let i = 0; i < strArr.length; i++) {
        if (checkForChar(str[i])) {
            strArr.splice(i, 1, `${giveMeNewChar(str[i])}`);
        }
    }
    return strArr.join("");
}

console.log(rot13("SERR PBQR PNZC"));

