import React from 'react';
import './Fproduct.css';

const Fproduct = (props) => {
    const { img, text, price, text2 } = props.featureProduct;
    const { handleAddToCart } = props;
    return (


        <div className='feature'>
            <div class="col container pt-5 pb-5">
                    <div class="card pt-5 ferture-col">
                        <div className="feature-div mx-auto">
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
                                <div className="feature-product-price-cart">
                                    <h5 class="feature-price-text text-dark fw-bold">${price}.00</h5>
                                    <button onClick={() => handleAddToCart(props.featureProduct)} className='feature-btn text-white fw-semi-bold fs-6'>{text2}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

export default Fproduct;