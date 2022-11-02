import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div class="footer container">
                <div class="row footer-row row-cols-2 row-cols-lg-5 g-2 g-lg-3 border-top border-bottom pb-3 mt-5 mb-5">
                    <div class="col border-end">
                        <div className="footer-text">
                            <h4>ADDRESS</h4>
                            <div className=''>
                                <div className="d-flex footer-icon">
                                    <i class="fa-solid fa-house-user fs-6 icon pe-2"></i>
                                    <p><small>44 Shirley Ave, West Chicago,IL 60185 Angelo</small></p>

                                </div>
                                <div className="d-flex footer-icon">
                                    <i class="fa-solid fa-phone-volume fs-6 pe-2"></i>
                                    <p><small>(123) 569-4371 / (123) 446-8851</small></p>
                                </div>
                                <div className="d-flex footer-icon">
                                    <i class="fa-solid fa-envelope fs-6 pe-2"></i>
                                    <p><small>demo@prestashop.com</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col border-end">
                        <div className='text-center footer-text '>
                            <h4>PRODUCTS</h4>
                            <div className='navbar-nav'>
                                <li><Link className='nav-link pb-0'><small>Delivery</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>About Us</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>Prices drop</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>New products</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>Best sales</small></Link></li>
                            </div>
                        </div>
                    </div>
                    <div class="col border-end">
                        <div className='text-center footer-text '>
                            <h4>OUR COMPANY</h4>
                            <div className='navbar-nav'>
                                <li><Link className='nav-link pb-0'><small>Free Shipping</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>New Products</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>Our Lookbook</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>About Us</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>Careers</small></Link></li>
                            </div>
                        </div>
                    </div>
                    <div class="col border-end">
                        <div className='text-center footer-text'>
                            <h4>ACCOUNT</h4>
                            <div className='navbar-nav'>
                                <li><Link className='nav-link pb-0'><small>Your Orders</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>Your Wishlist</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>Delivery</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>Privacy Policy</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>Portfolio</small></Link></li>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div className='text-center footer-text'>
                            <h4>SERVICES</h4>
                            <div className='navbar-nav'>
                                <li><Link className='nav-link pb-0'><small>Your Orders</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>Your Wishlist</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>Delivery</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>Privacy Policy</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>Portfolio</small></Link></li>
                            </div>
                        </div>
                    </div>

                </div>
                {/* accordion */}
                <div class="accordion accordion-footer accordion-flush d-none" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                <h5 className='fw-bold'>ADDRESS</h5>
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body"><div className="d-flex footer-icon">
                                <i class="fa-solid fa-house-user fs-6 icon pe-2"></i>
                                <p><small>44 Shirley Ave, West Chicago,IL 60185 Angelo</small></p>

                            </div>
                                <div className="d-flex footer-icon">
                                    <i class="fa-solid fa-phone-volume fs-6 pe-2"></i>
                                    <p><small>(123) 569-4371 / (123) 446-8851</small></p>
                                </div>
                                <div className="d-flex footer-icon">
                                    <i class="fa-solid fa-envelope fs-6 pe-2"></i>
                                    <p><small>demo@prestashop.com</small></p>
                                </div></div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                <h5 className='fw-bold'>PRODUCTS</h5>
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body"><div className='navbar-nav'>
                                <li><Link className='nav-link pb-0'><small>Delivery</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>About Us</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>Prices drop</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>New products</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>Best sales</small></Link></li>
                            </div></div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                <h5 className='fw-bold'>OUR COMPANY</h5>
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body"> <div className='navbar-nav'>
                                <li><Link className='nav-link pb-0'><small>Free Shipping</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>New Products</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>Our Lookbook</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>About Us</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>Careers</small></Link></li>
                            </div></div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingFour">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                <h5 className='fw-bold'>ACCOUNT</h5>
                            </button>
                        </h2>
                        <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body"><div className='navbar-nav'>
                                <li><Link className='nav-link pb-0'><small>Your Orders</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>Your Wishlist</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>Delivery</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>Privacy Policy</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>Portfolio</small></Link></li>
                            </div></div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingFive">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                <h5 className='fw-bold'>SERVICES</h5>
                            </button>
                        </h2>
                        <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body"><div className='navbar-nav'>
                                <li><Link className='nav-link pb-0'><small>Your Orders</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>Your Wishlist</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>Delivery</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>Privacy Policy</small></Link></li>
                                <li><Link className='nav-link pb-0'><small>Portfolio</small></Link></li>
                            </div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;