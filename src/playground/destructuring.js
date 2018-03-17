// const person = {
//   name: 'Hector',
//   age: 45,
//   location: {
//     city: 'Glendale',
//     temp: 54
//   }
// };

// const { name = 'Anonymous', age } = person;
// console.log(`${name} is ${age}. `);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Harry Potter: Order of Phoenix',
//   author: 'JK Rowling',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-published' } = book.publisher;

// console.log(publisherName);

// const address = ['1658 Del Valle', 'Glendale', 'CA', '91208'];
// const [, city, state, zip] = address;
// console.log(`You are in ${state}, and the zip code is: ${zip} `)

const item = ['Coffee (hot)', '2.00', '2.50', '2.75'];

const [drink, sprice, mprice, lprice] = item;

console.log(`A medium ${drink} costs ${mprice}.`);