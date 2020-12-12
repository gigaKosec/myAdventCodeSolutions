// to je 1. poskus reševanja naloge, ki ni prinesel pravilnih rezultatov


mockString = "BFFFBBFRRR"   // row 70, column 7
mockStringOnlyRow = "BFFFBBF"


let startingNum = 128
let num = startingNum

function translateLine (line, num) {
    //num = num / 2
    console.log("Mesto črke =", num)
    for (let i = 0; i < 8; i++) {   // i = mesto v stringu
        let operator = line[i]        // B = back
        console.log("Mesto (index) črke v stringu:", i,
        "operator =", operator)
        num = translateLetter (num, i, operator)    
    }
    return num 
}

function translateLetter (num, exponent, operator) {
    if (operator === "F") {
        console.log("Odštejemo", (startingNum/2**exponent))
        num = num - (startingNum/2**exponent)
        
        console.log("num sedaj =", num)
        return num
    }
    else if (operator === "B") {
        console.log("Prištejemo", (startingNum/2**exponent))
        num = num + (startingNum/2**exponent)
        console.log("num sedaj =", num)
        return num
    }
}

/* function translateLetter (num, exponent, operator) {
    if (operator === "B") {
        console.log("Odštejemo", (num / (2**exponent)))
        num = num - (num / (2**exponent))
        
        console.log("num sedaj =", num)
        return num
    }
    else if (operator === "F") {
        console.log("Prištejemo", (num / (2**exponent)))
        num = num + (num / (2**exponent))
        console.log("num sedaj =", num)
        return num
    }
} */

finalNum = translateLine(mockStringOnlyRow,num)
console.log("končna vrsta sedeža =", finalNum)