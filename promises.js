// const promise1 = new Promise(function(resolve, reject){
//     // do an async task
//     // db calls, cryptography, network call
//     setTimeout(function(){
//         console.log("async task is complete");
//         resolve()
//     }, 1000)
// })

// promise1.then(function(){
//     console.log("Promise consumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("async 2");
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log("aync 2 resolved");
// })

// const promise3 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "prem", email:"diinesh980@gmail.com"})
//     }, 1000)
// })

// promise3.then(function(user){
//     console.log(user);
// })

// const promise4 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "prem", password: "123" });
//     } else {
//       reject("error: something went wronG!");
//     }
//   }, 1000);
// });

// promise4
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   }).finally(function(){
//     console.log("finally the promise is either ot rejected");
//   })

const promise5 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "JS", password: "123" });
    } else {
      reject("error: JS went wronG!");
    }
  }, 1000);
});

async function cosumePromiseFive() {
  try {
    const response = await promise5;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

cosumePromiseFive();


// async function getAllUsers(){
//     try{
//         const response = await fetch('https://api.github.com/users/Premium07')
//     const data = await response.json()
//     console.log(data);
//     }catch(error){
//         console.log("ERROR: DATA NOT FOUND!");
//     }
// }

// getAllUsers();

fetch("https://api.github.com/users/Premium07").then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
})
.catch((error) => console.log(Error))