import React from "react";
import "./ReviesItem.css";

const ReviesItem = (props) => {
  const { product,  handleRemoveProduct } = props;
  const { text, img, price, quantity } = product;
  return (
    <div>
      <div className="card mb-3" style={{ "max-width": "540px" }}>
        <div className="row g-0 align-items-center justify-content-center">
          <div className="col-md-4 reviewImg pt-4">
            <img src={img} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body ps-5">
              <h5 className="card-title">{text}</h5>
              <p className="card-text">Price : {price}$</p>
              <p className="card-text">Quantity : {quantity}</p>
              <div className="delete-container">
                <button
                  onClick={() =>  handleRemoveProduct(product)}
                  className="border-0 rounded-pill bg-danger text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviesItem;
