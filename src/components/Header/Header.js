import React from "react";
import logo from "../../Images/SecondLogo.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { cart } = props;
  let total = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + tax;

  return (
    <div className="">
      <nav className="navbar navbar-div navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            <div className="navbar-logo">
              <img className="logo" src={logo} alt="" />
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav navbar-menu ms-auto mb-2 mb-lg-0">
              <li className="nav-item pe-2">
                <Link
                  as={Link}
                  to="/"
                  className="nav-link"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item pe-2">
                <Link
                  as={Link}
                  to="/cloths"
                  className="nav-link"
                  aria-current="page"
                  href="#"
                >
                  Cloths
                </Link>
              </li>

              {/* <li className="nav-item pe-2">
                                <Link onClick={() => { props.filterResult('Men') }}  className="nav-link" href="#">Men</Link>
                            </li>
                            <li className="nav-item pe-2">
                                <Link onClick={() => { props.filterResult('Women') }}  className="nav-link" href="#">Women</Link>
                            </li> */}

              {/* <li className="nav-item pe-2">
                <Link as={Link} to="/blog" className="nav-link" href="#">
                  Blog
                </Link>
              </li> */}
              {/* <li className="nav-item pe-2">
                <Link as={Link} to="/cart" className="nav-link" href="#">
                  Cart
                </Link>
              </li> */}
            </ul>
            {/* search-user-cart */}
            <div className="header-right d-flex fs-3">
              <div className="header-search pe-4">
                <form action="" className="header-form">
                  <input
                    className="search-bar"
                    type="search"
                    placeholder="Search here ..."
                  />
                  <i className="fa fa-search"></i>
                </form>
              </div>
              <div className="user-menu-dropdown pe-4">
                <div className="user-icon">
                  <div className="user-icon-img">
                    <i className="fa-solid fa-user fs-4"></i>
                  </div>
                </div>
              </div>
              <div className="header-cart pe-4">
                <div className="mini-cart-warapper">
                  <button
                    className="btn"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                  >
                    <span className="mini-cart-icon position-relative">
                      <i className="fa-solid fa-cart-shopping fs-4"></i>
                      <span className="position-absolute badge top-0 start-100 translate-middle p-1 bg-danger rounded-circle">
                        {quantity}
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        className="offcanvas offcanvasTwo offcanvas-end"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title fw-bold" id="offcanvasRightLabel">
            SHOPPING CART
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {/* <table className="table text-center">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Product Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">price</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
          </table> */}
          <h6>Total Price: ${total}.00</h6>
          <h6>Tax: {tax}</h6>
          <h6 className="fw-bold">Grand Total: {grandTotal}</h6>
        </div>
      </div>
    </div>
  );
};

export default Header;
