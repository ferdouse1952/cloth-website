import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fproduct from '../Fproduct/Fproduct';
import './FeaturedProduct.css';
import Slider from 'react-slick';

const FeaturedProduct = (props) => {
  const { handleAddToCart,products } = props;

  const settings = {
   
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
      
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

    return(

   
      <div className = "container" >
        <h2 className='text-center fw-bold pt-5'>Featured Product</h2>

        <Slider {...settings}>
          {
            
            products.map(featureProduct=><Fproduct 
              key={featureProduct.id}
              handleAddToCart={handleAddToCart}
              featureProduct={featureProduct}
            >

            </Fproduct>)


          }

        </Slider>
      </div >
      

   
  );
};

export default FeaturedProduct;