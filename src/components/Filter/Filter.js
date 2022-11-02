import React from 'react';
import { Link } from 'react-router-dom';
import './Filter.css';

const Filter = () => {
    return (
        <div>
            <h5 className='fw-bold pt-4'>Filter</h5>
            <p className='filter-text'>Shopping Options</p>
            <div class="accordion accordion-div accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button accordion-button-div-two  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Price
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <div className='navbar-nav'>
                                <li><Link className='nav-link pb-0'><small>$40.00 - $49.99 (2)</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>$50.00 - $59.99 (3)</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>$60.00 - $69.99 (3)</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>$70.00 - $79.99 (3)</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>$80.00 and above (2)</small></Link></li>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button accordion-button-div-two  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Manufacturer
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <div className='navbar-nav'>
                                <li><Link className='nav-link pb-0'><small>Honour (1)</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>Pioneer (3)</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>Tizzy (1)</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>Crazyshop (2)</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>Expo (2)</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>Living (2)</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>Klassy Kids (2)</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>Pizza (1)</small></Link></li>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item pb-4">
                    <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button accordion-button-div-two collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Color
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;