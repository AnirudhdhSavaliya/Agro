import React from 'react';
import logo from "../img/site_logo.png";
// import Banner1 from "../img/9.jpg";
// import Banner2 from "../img/10.jpg";
function Header() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">

            <a className="navbar-brand" href="/">
              <img src={logo} alt="App Logo" />
            </a>

            <div className="navbar-outer">
              <div className="top-bar__contacts py-2">
                {/* Corrected Style Prop */}
                <span style={{ marginRight: '10px' }}>
                  523 Sylvan Ave, 5th Floor Mountain View, CA 940 USA
                </span>
                <span>
                  <a href="/" className="text-decoration-underline">+1 (234) 56789</a>,&nbsp;&nbsp;
                  <a href="/" className="text-decoration-underline">+1 987 654 3210</a>
                </span>
                <span>
                  <a href="mailto:support@agrocompany.com" className="text-decoration-underline">
                    support@agrocompany.com
                  </a>
                </span>
                <div className="social-btns">
                  <a className="fontello-twitter" href="/"><i className="fa-brands fa-twitter"></i></a>
                  <a className="fontello-facebook" href="/"><i className="fa-brands fa-facebook-f"></i></a>
                  <a className="fontello-linkedin-squared" href="/"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>

                <div className="devider"></div>
              </div>

              <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas"
                data-bs-target="/offcanvasExample" aria-controls="offcanvasExample" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                  <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" href="/">Home</a>
                      <ul className="dropdown-menu" aria-labelledby="pagesDropdown">
                        <li><a className="dropdown-item" href="/">Home 1</a></li>
                        <li><a className="dropdown-item" href="/">Home 2</a></li>
                        <li><a className="dropdown-item" href="/">Home 3</a></li>
                        <li><a className="dropdown-item" href="/">Home Shop</a></li>

                      </ul>
                    </li>
                    <li className="nav-item"><a className="nav-link" href="/">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="/">Pages</a>
                      <ul className="dropdown-menu" aria-labelledby="pagesDropdown">
                        <li><a className="dropdown-item" href="/">Services</a></li>
                        <li><a className="dropdown-item" href="/">Products</a></li>
                        <li><a className="dropdown-item" href="/">Product Details</a></li>
                        <li><a className="dropdown-item" href="/">Gallery 1</a></li>
                        <li><a className="dropdown-item" href="/">Gallery 1</a></li>
                        <li><a className="dropdown-item" href="/">Typography</a></li>
                        <li><a className="dropdown-item" href="/">404 Page</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>


              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="/" id="pagesDropdown" role="button" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      Home <span><i className="fa-solid fa-chevron-down"></i></span>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="pagesDropdown">
                      <li><a className="dropdown-item" href="/">Home 1</a></li>
                      <li><a className="dropdown-item" href="/">Home 2</a></li>
                      <li><a className="dropdown-item" href="/">Home 3</a></li>
                      <li><a className="dropdown-item" href="/">Home Shop</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">About</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="/" id="pagesDropdown" role="button" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      Pages<span><i className="fa-solid fa-chevron-down"></i></span>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="pagesDropdown">
                      <li><a className="dropdown-item" href="/">Services</a></li>
                      <li><a className="dropdown-item" href="/">Products</a></li>
                      <li><a className="dropdown-item" href="/">Product Details</a></li>
                      <li><a className="dropdown-item" href="/">Gallery 1</a></li>
                      <li><a className="dropdown-item" href="/">Gallery 1</a></li>
                      <li><a className="dropdown-item" href="/">Typography</a></li>
                      <li><a className="dropdown-item" href="/">404 Page</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="/" id="shopDropdown" role="button" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      Shop<span><i className="fa-solid fa-chevron-down"></i></span>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="shopDropdown">
                      <li><a className="dropdown-item" href="/">Shop Catalog</a></li>
                      <li><a className="dropdown-item" href="/">Single Product</a></li>
                      <li><a className="dropdown-item" href="/">Cart</a></li>
                      <li><a className="dropdown-item" href="/">Checkout</a></li>
                      <li><a className="dropdown-item" href="/">Sign In/Up</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">Blog</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">Contacts</a>
                  </li>
                </ul>

                <a href="/" className="btn btn-get-in-touch">Get In Touch</a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* header over */}
      {/* <div class="main-layer h-100">

        <div class="main-layout-outer">
          <div class="container">
            <div class="main-layout">
              <div class="row align-items-center">
                <div class="col-12 col-lg-8">
                  <h2 class="__title">
                    <p class="blueberries">Blueberries</p>
                    <p class="from-agro">from Agro</p>
                  </h2>

                </div>
                <div class="col-12 my-3 d-lg-none"></div>
                <div class="col-12 col-lg-4 text-center d-flex justify-content-center">
                  <div className="play-button">
                    <a id="play-video" class="video-play-button" href="/">
                      <span></span>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="second-section-outer">
        <div class="container">
          <div class="second-section row">
            <div class="col-12 col-md-6">
              <div class="product-promo-left">
                <div className="left-inner">
                  <img src={Banner1} alt="Product 1" />
                </div>
                <div class="second-section-content">Fruits</div>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="product-promo-right">
                <div className="right-inner">
                  <img src={Banner2} alt="Product 2" />
                </div>
                <div class="second-section-content1">Vegetable</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

    </>
  );
}

export default Header;
