import React  from 'react';
import { Link } from 'react-router-dom';
import Categories from '../Categories/Categories';
import Filter from '../Filter/Filter';
import './Cloths.css';
import { allProducts } from '../../featureimg';



const Cloths = (props) => {
    const { handleAddToCart } = props;

    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-3 col-4 pt-5">
                    <div className=" border-top">
                        <Categories />
                        <ul className='navbar-nav pb-4'>
                            <li><Link onClick={() => { props.setData(allProducts) }} className='nav-link pb-0'><small>All</small></Link></li>
                            <li><Link onClick={() => { props.filterResult('Men') }} className='nav-link pb-0'><small>Men</small></Link></li>
                            <li><Link onClick={() => { props.filterResult('Women') }} className='nav-link pb-0'><small>Women</small></Link></li>
                        </ul>
                    </div>
                    <div className=" border-top">
                        <Filter />
                    </div>
                </div>
                <div className="col-lg-9 col-8 pt-5">
                    {/* navTabs */}
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><i class="fa-solid fa-table-cells-large"></i></button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><i class="fa-solid fa-list"></i></button>
                        </li>

                        <div className='pt-2'>
                            <small className='ps-2'>{props.data.length} Items</small>
                        </div>

                    </ul>

                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">


                            <div className="row row-cols-1 row-cols-md-3 g-3">
                                {props.data.map((values) => {

                                    const { img, price, text, text2 } = values;
                                    return (
                                        <>
                                            <div className="feature">
                                            <div class="col">
                                                <div class="card h-100 pt-5 ferture-col">
                                                    <div className="feature-div mx-auto">
                                                        <img src={img} alt="" />
                                                    </div>
                                                    <div className="star-icon fs-6 text-muted text-center pt-3 pb-5">
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <p class="card-text text-muted "><small>{text}</small></p>
                                                        <div className="feature-product-price-cart">
                                                            <h5 class="feature-price-text text-dark fw-bold">${price}.00</h5>
                                                            <button onClick={() => handleAddToCart(values)} className='feature-btn text-white fw-semi-bold fs-6'>{text2}</button>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                            <div className="">
                                {props.data.map((values) => {
                                    const { img, price, text2 } = values;
                                    return (
                                        <>
                                            <div class="d-flex">

                                                <div class="col-md-4 pt-4">
                                                    <div className="allClothsimg-div">
                                                        <img src={img} alt="" />
                                                    </div>
                                                </div>
                                                <div class="col-md-8 my-auto ps-3">
                                                    <div class="card-body">
                                                        <p class="card-text"><small class="text-muted">Good One Nayan</small></p>
                                                        <div className="star-icon fs-6 text-muted">
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <h5 class="card-text price-text text-dark fw-bold">${price}.00</h5>
                                                        </div>
                                                        <p class="card-text"><small>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</small>
                                                            <br />
                                                            <Link className='link text-muted'><small> Learn More</small></Link></p>
                                                        <div className=" border-top border-bottom pt-2 pb-2">

                                                            <button onClick={() => handleAddToCart(values)} className='button-text text-white'>{text2}</button>
                                                            <Link className='link ps-2 pe-2 border-end text-muted'><small>Wish List</small></Link>
                                                            <Link className='link ps-2 text-muted'><small>Compare</small></Link>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cloths;