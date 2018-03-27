import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };


//subscribers:
//child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
// });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });


// database.ref('expenses').push({
//   description: 'Cannibus',
//   note: 'once',
//   amount: 23.45,
//   createdAt: 13423566
// });

// database.ref('expenses').push({
//   description: 'Cable',
//   note: '',
//   amount: 125.00,
//   createdAt: 134566
// });

database.ref('expenses').push({
  description: 'Lawyer',
  note: 'once',
  amount: 1200.00,
  createdAt: 7645757
});


// database.ref('notes/-L88v240Q3XrzMYFNE4z').remove();

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React, JS, Node'
// });


// const firebaseNotes = {
//   notes:  {
//     apoiwejf: {
//       title: 'First note!',
//       body: 'This is my note'
//     },
//     waieufhcmx: {
//       title: 'Another note',
//       body: 'This is my note'
//     }
//   }
// };

// const notes = [{
//   id: '12',
//   title: 'First note!',
//   body: 'This is my note'
// }, {
//   id: '728347',
//   title: 'Another note',
//   body: 'This is my note'
// }];

// database.ref('notes').set(notes);

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//   database.ref('age').set(45);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7500);

// setTimeout(() => {
//   database.ref('age').set(50);
// }, 10500);

//TODO
// Setup data subscription -> Andrew is a Software Dev at Amazon.

// Change the data and make sure it reprints

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });


// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e)
//   });

// database.ref().set({
//   name: 'Hector',
//   age: 26,
//   stressLevel: 6,
//   isSingle: false,
//   job: {
//     title: "Softy Dev",
//     company: 'Google'
//   },
//   location: {
//     city: 'Glendale',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed.', e);
// });


// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch((e) => {
//     console.log('Data was not removed!');
//   }) ;


// chnage stresslevel to 9
// change job to amazon
// change locaiton to seattle


// database.ref().update({
//   job: 'Manager',  // adds a new field
//   'location/city': 'Boston'
// });

// database.ref().update({
//   'job/company': 'Amazon',
//   'location/city': 'Seattle',
//   stressLevel: 9
// });
