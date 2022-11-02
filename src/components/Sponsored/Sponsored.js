import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sponsoredItem } from '../../featureimg';
import SponsoredImg from '../SponsoredImg/SponsoredImg';
import Slider from 'react-slick';

const Sponsored = () => {
    const settings = {
        lazyLoad: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
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
        <div className='pt-5 container'>
            <Slider {...settings}>
            {
                sponsoredItem.map(sponsoredimg=><SponsoredImg
                    sponsoredimg={sponsoredimg}
                >

                </SponsoredImg>)
            }
            </Slider>
        </div>
    );
};

export default Sponsored;