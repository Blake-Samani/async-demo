//promises hold the eventual result of an asynchronous function
//promise is a function that you pass a function to with two parameters, resolve and reject
const p = new Promise((resolve, reject) => {
    //async operation
    setTimeout(() => {
        // resolve(1); //resolve is used to send result of promise to consumer of promise object
        reject(new Error('message')); //native js object that has three fields, one being message

    }, 2000);
});

p.then(result => console.log('Result', result)).catch(err => console.log('Error', err.message));
//then will use the object in the resolve function and catch will use the object created in reject
//this is where we "consume" the promise