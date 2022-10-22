const myPromise = new Promise((resolve, reject) => {
    let a = 1 + 2;
    if (a == 2){
        resolve('Success')
    } else {
        reject('Failed')
    }
})

myPromise.then((messages) => {
    console.log('This is resolve:'+ messages)
}).catch((messages) => {
    console.log('This is reject: '+ messages)
})