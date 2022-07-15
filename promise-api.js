//unit test  to create a promise that is already resolved
// const p = Promise.reject(new Error('reason for rejection'));
// p.catch(error => console.log(error));

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async operation 1');
        resolve(1);
    }, 2000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 2');
        resolve(2);
    }, 2000);
});

//promise.all returns a new promise that resolves when all promises in the array we give it are resolved
//just single threading here, but all promises are resolved on that single thread concurrently
//if any promise in promise.all is rejected, then the promise.all will not resolve
//---------------------------------------------------

// Promise.all([p1, p2])
//     .then(result => console.log(result));


//race will resolve when the first async operation resolves
//value of first fulfilled promise
Promise.race([p1, p2])
    .then(result => console.log(result));