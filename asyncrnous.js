<--  Callback example  -->
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
<-- End of call back example -->


<-- Example Callback hell --> 
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
    }, 2000)
};
let production = () => {
    setTimeout(() => {
        console.log("Production has started")
        setTimeout(() => {
            console.log("The fruit has been chopped")
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
                setTimeout(() => {
                    console.log("Start the machine")
                    setTimeout(() => {
                        console.log(`Ice cream placed on ${stocks.holder[1]}`)
                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} as toppings`)
                            setTimeout(() => {
                                console.log("Serve Ice cream")
                            }, 2000)
                        }, 3000)
                    }, 2000)
                }, 1000)
            }, 1000)
        }, 2000)
    },0000)

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
<-- End of Callback hell example -->

<-- Doing same task using promises -->
  let stocks = {
    Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
}

let is_shop_open = true;

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(() => {
                resolve(work())
            }, time)
        } else {
            reject(console.log('Shop is closed'))
        }
    })
}
order(2000, () => {
    console.log(`${stocks.Fruits[1]} was seleted`);
})

    .then(() => {
        return order(0000, () => {
            console.log(`Production has started`)
        });
    })

    .then(() => {
        return order(2000, () => {
            console.log(`Fruit has been chopped`)
        })
    })

    .then(() => {
        return order(1000, () => {
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
        })
    })

    .then(() => {
        return order(1000, () => {
            console.log(`Start the machine`)
        })
    })

    .then(() => {
        return order(2000, () => console.log(`Ice cream placed on ${stocks.holder[0]}`))
    })

    .then(() => {
        return order(3000, () => console.log(`Selected ${stocks.toppings[0]} as topping`))
    })


    .then(() => {
        return order(2000, () => console.log("Serve Ice Cream"))
    })

    .catch(() => {
        console.log(`Customer left`)
    })

    .finally(() => {
        console.log(`End of the day`)
    })

// if is_shop_open = true then Output will be
// grapes was seleted
// Production has started
// Fruit has been chopped
// water and ice added
// Start the machine
// Ice cream placed on cone
// Selected chocolate as topping
// Serve Ice Cream
// End of the day

// // if is_shop_open = false then Output will be
// Shop is closed
// Customer left
// End of the day

