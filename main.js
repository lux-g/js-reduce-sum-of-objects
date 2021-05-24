const hoodies = [
    {
        name: "crooks",
        price: 40
    },
    {
        name: "nike",
        price: 60
    }
]

const getTotal = hoodies.reduce(function(a, b) {
    return a + b.price
}, 0)
