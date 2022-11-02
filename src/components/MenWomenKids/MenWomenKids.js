import React from 'react';
import womenMOdel from '../../Images/womenModel.png';
import kidsModel from '../../Images/kidsModel.png';
import menModel from '../../Images/MenModel.png';
import './MenWomenKids.css';

const MenWomenKids = () => {
    return (
        <div className='container'>
            <div className="row  menwomenkid-row">
                <div className="col-md-7 col-12">
                    <div className="col-lg-12">
                        <div className="kidsModel-div model-div">
                            <img className='model' src={kidsModel} alt="" />
                            <div className="overlay"></div>
                        </div>

                    </div>
                    <div className="col-lg-12 pt-2">
                        <div className="menModel-div model-div">
                            <img className='model' src={menModel} alt="" />
                            <div className="overlay"></div>
                        </div>
                    </div>
                </div>
                <div className="mt-2 mt-md-0 col-md-5 col-12  ps-md-0">
                    <div className="womenModel-div model-div">
                        <img className='model' src={womenMOdel} alt="" />
                        <div className="overlay"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenWomenKids;