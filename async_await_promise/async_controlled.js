function takeOrder(customer, callback){
    console.log('Take order for ', customer);
    callback(customer);
}

function processOrder (customer, callback) {
    console.log('Processing order for ', customer);
    setTimeout(() => {
        console.log('Coocking complete for ', customer);
        console.log('Order processing complete for ', customer);
        callback(customer);
    }, 2000);
}

function completeOrder(customer) {
    console.log('Complete order for ', customer);
}

takeOrder('customer_1', (customer) => {
    processOrder(customer, (customer) => {
        completeOrder(customer)
    })
});
