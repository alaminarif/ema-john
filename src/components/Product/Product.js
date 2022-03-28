import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";

const Product = (props) => {
  const { handleAddToCart, product } = props;
  const { name, img, seller, price, ratings } = product;
  return (
    <div className="product">
      <img src={img} alt="" />

      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p className=""> Price: {price}$</p>
        <p className="seller"> Seller: {seller}</p>
        <p> Rating: {ratings}</p>
      </div>
      <button className="btn-cart" onClick={() => handleAddToCart(product)}>
        <p>Add to Card</p>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
