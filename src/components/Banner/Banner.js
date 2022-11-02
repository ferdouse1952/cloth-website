import React from 'react';
import banner from '../../Images/banner.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="container pt-5 pb-5">
            <div className="row banner-row">
                <div className="col-lg-8 col-12 d-flex banner-col justify-content-around align-items-center">
                    <div className="banner-img">
                        <img src={banner} alt="" />
                    </div>
                    <div className="banner-content text-center">
                        <h1 className='fs-1 fw-bold'>Express your</h1>
                        <h3>Smart style</h3>
                        <p>Shop the selection of clothes</p>
                        <button className='submit-btn'>Shop Now</button>
                    </div>

                </div>
                <div className="col-lg-4 col-12 form-col mt-lg-0 mt-5 ps-lg-3 px-0">
                    <div className="p-4 text-center border bg-secondary bg-opacity-25">
                        <i className="fa-sharp fs-1 fa-solid fa-envelope pb-3"></i>
                        <div className="newsletter-content pb-3">
                            <h3 className='fs-2 fw-bold pb-3'>Newsletter</h3>
                            <p className=''><small>Accessorise your outfit with the seasons collection of jewellery from the Uniqness</small></p>
                        </div>
                        <div className="form-floating pb-5">
                            <input type="email" className="form-control form-controltwo" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div>
                            <button className="submit-btn">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default Banner;