import React from 'react';
import './ReviewImgContent.css';

const ReviewImgContent = (props) => {
    const { testimonialText, img, testimonialMail} = props.testimonialItem
    return (
        <div className='d-lg-flex justify-content-center align-items-center'>
            <div className="testimonialImg-div ps-4">
                <img src={img} alt="" />

            </div>
            <div className="testimonialtext-div ps-3">
                <h2 className='fs-6 fw-normal'>{testimonialText}</h2>
                <p className='text-danger'><small>{testimonialMail}</small></p>
            </div>
        </div>
    );
};

export default ReviewImgContent;