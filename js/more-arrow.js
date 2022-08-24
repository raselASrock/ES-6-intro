const add = (first, second) => first + second ;
const fullName = (firstName, LastName) => firstName + ' ' +  LastName ;
const multiply = (a , b) => a * b ;

const result = multiply(4,5);
console.log(result);


const addAll = (a,b,c,d,e) => a+b+c+d+e ;

const sum = addAll(5,4,7,3);
console.log(sum);



// No parameter Arrow Function
const getPie = () => 3.14;


// One parameter 
const doubleIt = (num) => num * 2 ;

// One parameter Simple Version

const fiveTimes = num => num * 5;

// MultiLine Arrow Function

const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum * secondSum ;
    const result = multiplyResult / 2 ;
    return result;
}

doMath(5,3,9);
console.log(result);