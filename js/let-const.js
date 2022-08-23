/*
Breakup With var
No more use var
let: let it to reassign
const: do not allow to reassign
*/ 


let money = 25;
money = 50;
console.log(money);

const bird = 'Jaan-Pakhi';
// bird = 'Holde-Pakhi';
console.log(bird);

const animal = "bak-bakum";
const message = animal + " payra-dake";
console.log(message);


let numbers = [78, 52, 49, 36, 95, 16, 67];
// reassign is not allowed
// numbers = [77, 66, 55, 22, 33];
numbers.push(123);
numbers[1] = 60;

for( let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number)
}
console.log(numbers);

const student = {
    name: 'Mofiz',
    address: 'Rongpur',
}
// Not Allowed
// student = {
//     name: 'Mofazzol'
// }
// Allowed
// student.name =  'Mofazzol'


console.log(student);