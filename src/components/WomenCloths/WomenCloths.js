import React from 'react';
import './WomenCloth.css';

const WomenCloths = (props) => {
    const { img,text, price, text2 } = props.product;
    return (
        <div>
            <div class="col">
                <div class="card h-100">
                    <div className="menclothimg-div">
                        <img src={img} class="card-img-top" alt="..." />
                    </div>

                    <div className="star-icon fs-6 text-muted text-center pt-3 pb-4">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <p class="card-text text-muted "><small>{text}</small></p>
                        <div className="product-price-cart">
                            <h5 class="card-text price-text text-dark fw-bold">{price}</h5>
                            <button className='button-text card-text text2 text-white fw-semi-bold fs-6'>{text2}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WomenCloths;