import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = (total * 0.1).toFixed(2);
  // console.log(shipping);
  return (
    <div className="cart">
      <h4>Oder Summary</h4>
      <p>select items: {cart.length}</p>
      <p>Total Price: {total}</p>
      <p>Total Shipping: {shipping}</p>
      <p>Tax: {tax}</p>
      <h4>Grand Total: {tax} </h4>
    </div>
  );
};

export default Cart;
