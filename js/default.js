// function add(first, second){
//     const total = first + second;
//     return total;
// }
// const result =  add(10, 20);
// console.log(result);


// function add(first, second = 0){
//     const total = first + second;
//     return total;
// }
// const result =  add(10);
// console.log(result);

function fullName(fast, last = 'miah'){
    const name = fast + ' ' + last ;
    return name;
}

const name = fullName('Aslam')
console.log(name);