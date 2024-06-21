const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];

inventory[0].quantity = 200;

console.log(inventory);

inventory.push({ name: "Orange", price: 20, quantity: 300 });
console.log(inventory);
let calTotalPrice = (inventory) => {
  let totalValue = 0;
  for (let item of inventory) {
    totalValue += item.price * item.quantity;
  }
  return totalValue;
};

const totalValue = calTotalPrice(inventory);
console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${totalValue} บาท`);
