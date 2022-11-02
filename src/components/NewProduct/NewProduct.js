import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './NewProduct.css';
import Slider from 'react-slick';
import Nproduct from '../Nproduct/Nproduct';

const NewProduct = (props) => {
    const {handleAddToCart,products}=props;
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        swipeToSlide: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return (
        <div className='container'>
            <h2 className='text-center fw-bold pt-5 pb-3'>New Product</h2>

            <Slider {...settings}>
                {
                    products.map(newProduct => <Nproduct
                        handleAddToCart={handleAddToCart}
                        key={newProduct.id}
                        newProduct={newProduct}
                    >

                    </Nproduct>)

                }

            </Slider>

        </div>
    );
};

export default NewProduct;