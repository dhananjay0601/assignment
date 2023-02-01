const orderData = { 'Below 500': 60, '500-1000': 50, '1000-1500': 60, '1500-2000': 20, 'Above 2000': 60 };

// Calculate total number of orders placed

const totalOrders = Object.values(orderData).reduce((acc, val) => acc + val, 0);
console.log(totalOrders); // 250


// Calculate number of order proportion options

const proportionOptions = Object.keys(orderData).length;
console.log(proportionOptions); // 5


// Calculate percentage of each proportion
const proportionData = [];
Object.entries(orderData).forEach(([key, value], index) => {
    proportionData.push({
        id: index + 1,
        order: key,
        'order percentage': (value / totalOrders) * 100
    });
});
console.log(proportionData);
