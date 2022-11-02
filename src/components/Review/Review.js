import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reviewimg from '../../Images/review.img.png';
import './Review.css';
import Slider from 'react-slick';
import { reviewItems } from '../../featureimg';
import ReviewImgContent from '../ReviewImgContent/ReviewImgContent';

const Review = () => {
    const settings = {
        lazyLoad: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                
              }
            },
           
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
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
            <div className="testimonialbg-color">
                <div className="row review-row">
                    <div className='col-lg-6 col-md-7 testimonial-col'>
                        <Slider {...settings}>
                            {
                                reviewItems.map(testimonialItem => <ReviewImgContent
                                    testimonialItem={testimonialItem}
                                ></ReviewImgContent>)
                            }
                        </Slider>
                    </div>
                    <div className="col-lg-6 col-md-5 review-img-col ">
                        <div className="review-img">
                            <img src={reviewimg} alt="" />
                        </div>
                    </div>

                </div>


            </div>
           
        </div>
    );
};

export default Review;