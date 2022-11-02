import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photoOne from "../../Images/first-women-slider-img.png";
import photoTwo from "../../Images/first-men-slider-img.png";
import Slider from 'react-slick';
import './Sliders.css';
const Sliders = () => {
  const settings = {
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
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
    <div className='pb-5'>
      <Slider {...settings}>
        <div className='sliderOne slider'>
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-8 col-lg-6">
                <h1 className='text-muted slider-text'>Women's <span className='slider-span-text'>T-Shirt</span></h1>
              </div>
              <div className="col-4 col-lg-6">
                <div className="sliderPhotoImg">
                  <img src={photoOne} alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='sliderTwo slider'>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-6">
                <h1 className='slider-text'>Men's <span className='slider-span-text'>T-Shirt</span></h1>
              </div>
              <div className="col-6 ">
                <div className="sliderPhotoImg">
                  <img src={photoTwo} alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      
    </div>
  );
};

export default Sliders;