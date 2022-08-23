
// Function Declaration

// function add(first, second){
//     const total = first + second ;
//     return total;
// }

const result = add(10, 20);
console.log(result);

// Function Expression
const add1 = function add1(first, second){
    const total = first + second ;
    return total;
}

const result1 = add1(10, 50);
console.log(result1);

// Function Anonymous
const add2 = function (first, second){
    const total = first + second ;
    return total;
}

function add(first, second){
    const total = first + second ;
    return total;
}


function add4(first, second){
    return first + second;
}

 const add5 =  function(first, second){
    return first + second;
}

// Arrow Function

const add6 = (first, second) => first + second ;

const result6 = add6(40, 40);
console.log(result6);
