// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

calculateTotalPrice = (products, promotionCode) => {
  let totalPrice = products.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  if (promotionCode === "SALE20") {
    return totalPrice * ((100 - 20) / 100);
  } else if (promotionCode === "SALE50") {
    return totalPrice * ((100 - 50) / 100);
  } else {
    return totalPrice;
  }
};
const promotionCode0 = "";
const promotionCode1 = "SALE20";
const promotionCode2 = "SALE50";
console.log(calculateTotalPrice(products, promotionCode0));
console.log(calculateTotalPrice(products, promotionCode1));
console.log(calculateTotalPrice(products, promotionCode2));
