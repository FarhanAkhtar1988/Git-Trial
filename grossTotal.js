cartItems = [
{
  product:"62888e05cad15ab7c61da4c0",
  name:"Glucon D",
  price:370,
  image:"https://i.ibb.co/DRST11n/1.webp",
  stock:"5",
  quantity:2
},
{
    product:"62822656043178f99c4d64a5",
    name:"Glucon C",
    price:85,
    image:"https://i.ibb.co/DRST11n/1.webp",
    stock:"5",
    quantity:4
  }
]
let subTotal = 0
cartItems.forEach((i)=>{
    subTotal += i.price*i.quantity
})
console.log(subTotal)