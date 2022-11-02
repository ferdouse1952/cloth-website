import React from 'react';

const SponsoredImg = (props) => {
    const {img}=props.sponsoredimg;
    return (
        <div className='pb-5 pt-5'>
            <img src={img} alt="" />
        </div>
    );
};

export default SponsoredImg;