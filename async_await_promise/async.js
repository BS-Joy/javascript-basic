function processOrder (customer) {
    console.log('Processing order for ', customer);
    setTimeout(() => {
        console.log('Coocking complete for ', customer)
    }, 2000)

    console.log('Order processing complete for ', customer);
}

console.log('Take order for customar_1');

processOrder("customer_1");

console.log('Complete order for Customer_1')
