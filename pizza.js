function pizzaOven(crustType, sauceType, cheeses, toppings) {
   var pizza = {};
   pizza.crustType = crustType;
   pizza.sauceType = sauceType;
   pizza.cheeses = cheeses;
   pizza.toppings = toppings;
   return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"])
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
console.log(pizza1, pizza2)

var pizzaOptions = {
   crust: ["traditional", "deep dish", "hand tossed"],
   sauce: ["traditional", "spicy", "marinara"],
   cheese: ["mozzarella", "feta", "cheddar"],
   toppings: [["mushrooms", "olives", "onions"], ["pepperoni", "sausage"], "pineapple"]
}

function randomPizza() {
   var pizza = {};
   pizza.crustType = pizzaOptions.crust[(Math.floor(Math.random() * pizzaOptions.crust.length))];
   pizza.sauceType = pizzaOptions.sauce[(Math.floor(Math.random() * pizzaOptions.sauce.length))];
   pizza.cheeses = pizzaOptions.cheese[(Math.floor(Math.random() * pizzaOptions.cheese.length))];
   pizza.toppings = pizzaOptions.toppings[(Math.floor(Math.random() * pizzaOptions.toppings.length))];
   return pizza;
}
console.log(randomPizza())