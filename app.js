// const {readFile} = require('fs');

// console.log ('started a first task');

// readFile('./content/first.txt', 'utf8', (err, result)=>{
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(result);
//     console.log('completed first task');
// })
// console.log('starting next task');

setInterval(() =>{
    console.log('Hello world')
}, 2000)
console.log('i will run first');