//Asynchronous JS

let stocks = {
  Fruits: ["Strawberry", "grapes", "banana", "apple"],
  Liquids: ["Water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("our shop is Closed"));
    }
  });
};

order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
  .then(() => {
    return order(0, () => console.log("production has started"));
  })
  .then(() => {
    return order(2000, () => console.log("The Fruit was Chopped"));
  })
  .then(() => {
    return order(1000, () => console.log(`${stocks.Liquids[0]} and ${stocks.Liquids[1]} was added`));
  })
  .then(() => {
    return order(1000, () => console.log("Start The Machine"));
  })
  .then(() => {
    return order(2000, () => console.log(`iceCream placed on ${stocks.holder[0]}`));
  })
  .then(() => {
    return order(3000, () => console.log(`${stocks.toppings[0]} was added as toppings`));
  })
  .then(() => {
    return order(2000, () => console.log("Serve IceCream"));
  })
  .catch(() => {console.log("Customer Left");
  })
