import React from "react";
import "./Orders.css";
import ReviesItem from "../ReviewItem/ReviesItem";

const Orders = (props) => {
  const { cart, handleRemoveProduct } = props;

  return (
    <div className="container">
      <div className="order">
        {cart.map((product) => (
          <ReviesItem
            key={product.id}
            product={product}
            handleRemoveProduct={handleRemoveProduct}
          ></ReviesItem>
        ))}
      </div>
    </div>
  );
};

export default Orders;
