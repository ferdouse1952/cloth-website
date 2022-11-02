import React from 'react';
import './Nproduct.css';

const Nproduct = (props) => {
    const { img,text, price, text2 } = props.newProduct;
    const {handleAddToCart}=props;
    return (
        <div className='new pb-5'>
            <div class="col container pt-5">
                    <div class="card pt-5 newproduct-col">
                        <div className="newProduct-div mx-auto">
                            <img src={img} alt="" />
                        </div>
                        <div class="card-body">
                            <div className="star-icon fs-6 text-muted text-center pt-3 pb-5">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <p class="card-text text-muted "><small>{text}</small></p>
                                <div className="new-product-price-cart">
                                    <h5 class="newProduct-price-text text-dark fw-bold">${price}.00</h5>
                                    <button onClick={() => handleAddToCart(props.newProduct)} className='newProduct-btn text-white fw-semi-bold fs-6'>{text2}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Nproduct;