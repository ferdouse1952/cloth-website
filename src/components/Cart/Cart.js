import React from 'react';
import './Cart.css';

const Cart = () => {
    return (
        <div className='container'>
            {/* <div className="cart-items">
                <div className="cart-items-container">
                    <div className="items-info">
                        <table class="table text-center">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Product Details</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">price</th>
                                    <th scope="col">Remove</th>
                                </tr>
                            </thead>
                            {cart.map((values) => {
                                const {img,price,text,id,quantity} = values;
                                return (
                                    <>
                                        <tbody>
                                            <tr>
                                                <th scope="row">{id}</th>
                                                <td>
                                                    <img className='product-img' src={img} alt="" />
                                                </td>
                                                <td><p>{text}</p></td>
                                                <td>
                                                    {quantity}
                                                </td>
                                                <td>
                                                ${price}
                                                
                                                </td>
                                                <td>
                                                    <button><i class="fa-solid fa-trash-can"></i></button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </>
                                )

                            })}</table>
                        </div>
                    </div>
                </div> */}
            </div>
            );
        };

export default Cart;