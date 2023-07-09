// Callback example
let order = (call_production) =>{

console.log("Order placed. Please call production")

// function 👇 is being called 
  call_production();
};

let production = () =>{

console.log("Production has started")

};
order(production);
// output
//Production has started
//strawberry was selected
// Example Callback hell 
let stocks = {
    Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
}
const order = (fruit_name, callProdcution) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[fruit_name]} was selected`)
        callProdcution();
        setTimeout(() => {
            console.log(`The fruit has been chopped`)
        })
        setTimeout(() => {
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added.`)
        })
        setTimeout(() => {
            console.log(`Start the machine`)
        })
        setTimeout(() => {
            console.log(`Ice Cream was placed on ${stocks.holder[2]}`)
        })
        setTimeout(() => {
            console.log(`${stocks.toppings[0]} as toppings`)
        })
        setTimeout(() => {
            console.log(`Serve Ice cream`)
        })
    }, 2000)
};
const production = () => {
    setTimeout(() => {
        console.log(`Production has started`)
    }, 1000)
};
order(1, production);
//Output
// grapes was selected
// The fruit has been chopped
// water and ice added.
// Start the machine
// Ice Cream was placed on stick
// chocolate as toppings
// Serve Ice cream
// Production has started
