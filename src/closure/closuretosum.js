function sumWithClosure(firstNum) {
    function secondNum(secondNum = 0) {
        return firstNum + secondNum;
    }

    return secondNum;
}

//const suma = sumWithClosure(1);
//console.log(suma(4));
console.log(sumWithClosure(90)(1));