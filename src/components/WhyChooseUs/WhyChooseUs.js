import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    return (
        <div className='pt-5 container'>
            <div className="row row-div">
                <div className="col-6 col-lg-3 whychooseus d-flex gap-3">
                    <div className="icon-box d-flex align-items-center">
                        <i className="fa-solid fa-truck  icon-colorful"></i>
                        <i className="fa-solid fa-truck  icon-white"></i>
                    </div>
                    <div className="pt-2">
                        <h6 className='fw-bold'>FREE SHIPPING WORLDWIDE</h6>
                        <p><small>On oreder over 100$</small></p>
                    </div>
                </div>
                <div className="col-6 col-lg-3 whychooseus d-flex gap-3">
                    <div className="icon-box d-flex align-items-center">
                        <i className="fa-solid fa-gift icon-colorful"></i>
                        <i className="fa-solid fa-gift gift-icon-white"></i>
                    </div>
                    <div className="pt-2">
                        <h6 className='fw-bold'>SPECIAL GIFT</h6>
                        <p><small>Special gift for new member</small></p>
                    </div>
                </div>
                <div className="col-6 col-lg-3 whychooseus d-flex gap-3">
                    <div className="icon-box d-flex align-items-center">
                        <i className="fa-solid fa-phone-volume icon-colorful"></i>
                        <i className="fa-solid fa-phone-volume phone-icon-white"></i>
                    </div>
                    <div className="pt-2">
                        <h6 className='fw-bold'>SUPPORT ONLINE 24/7</h6>
                        <p><small>Call : (123) 236 757 914</small></p>
                    </div>
                </div>
                <div className="col-6 col-lg-3 whychooseus d-flex gap-3">
                    <div className="icon-box d-flex align-items-center">
                        <i className="fa-sharp fa-solid fa-lock icon-colorful"></i>
                        <i className="fa-sharp fa-solid fa-lock lock-icon-white"></i>
                    </div>
                    <div className="pt-2">
                        <h6 className='fw-bold'>SECURITY PAYMENT</h6>
                        <p><small>Venaim consequeter frenk</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;