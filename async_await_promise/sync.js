function processOrder (customer) {
    console.log('Processing order for ', customer);
    currentTime = new Date().getTime();
    while(currentTime + 1000 >= new Date().getTime());

    console.log('Order processing complete for ', customer);
}


console.log('Take order for customar_1');

processOrder("customer_1");

console.log('Complete order for Customer_1')
