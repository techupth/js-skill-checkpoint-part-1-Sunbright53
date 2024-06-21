// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];

const inventories = inventory.map((minQuantity) => {
  return minQuantity.quantity;
});

let inventoryQuantitymin = Math.min(...inventories);
console.log(inventoryQuantitymin);
