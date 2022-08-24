
// ****************Object Destructuring**************************

const fish = {
    name: 'King Hilsha',
    address: 'Chadpur',
    color: 'Silver',
    phone: '0225632146',
    price: 4000 ,
}


// const phoneNumber = fish.phone;
// const color = fish.color;
// const price = fish.price;

const {phone} = fish;

// console.log(phoneNumber);
// console.log(color);
// console.log(price);

const {age} = {name: 'Almas' , age: 56, profession: 'make-up artist'}

console.log(age)

const {address} = fish;
console.log(address)


// *************Arrey Destructuring**************
 const [other, another] = [55, 95]
 console.log(another);

 const nayoks = ['sakib', 'bappi', 'raj'];
 const [king, lost, notun] = nayoks;
 console.log(notun, lost);