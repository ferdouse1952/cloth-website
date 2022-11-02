import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

const Categories = () => {
    
    return (
        <div>
            <h5 className='fw-bold pt-4'>Categories</h5>
            <div class="accordion accordion-div" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                        <button class="accordion-button accordion-button-div" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Clothes
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div class="accordion-body">
                            <div class="accordion-item">
                                <h2 class="accordion-header pb-2" id="panelsStayOpen-headingTwo">
                                    <button class="accordion-button accordion-button-div collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                        Designer
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                    <div class="accordion-body">
                                        <div className='navbar-nav'>
                                            <li><Link className='nav-link pb-0'><small>Swap Dress</small></Link></li>
                                            <li><Link className='nav-link pb-0'><small>Cold Dress</small></Link></li>
                                            <li><Link className='nav-link pb-0'><small>Winter Dress</small></Link></li>
                                            <li><Link className='nav-link pb-0'><small>Occassions</small></Link></li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header pb-2" id="panelsStayOpen-headingThree">
                                    <button class="accordion-button accordion-button-div collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        Luxury
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                    <div class="accordion-body">
                                        <div className='navbar-nav'>
                                            <li><Link className='nav-link pb-0'><small>Sample Dress</small></Link></li>
                                            <li><Link className='nav-link pb-0'><small>Cloth Dress</small></Link></li>
                                            <li><Link className='nav-link pb-0'><small>Swap Dress</small></Link></li>
                                            <li><Link className='nav-link pb-0'><small>Cold Dress</small></Link></li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                                    <button class="accordion-button accordion-button-div collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                       Cardigan
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                                    <div class="accordion-body">
                                        <div className='navbar-nav'>
                                            <li><Link className='nav-link pb-0'><small>Swin Dress</small></Link></li>
                                            <li><Link className='nav-link pb-0'><small>Green Dress</small></Link></li>
                                            <li><Link className='nav-link pb-0'><small>Swap Dress</small></Link></li>
                                            <li><Link className='nav-link pb-0'><small>Accessories</small></Link></li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Categories;