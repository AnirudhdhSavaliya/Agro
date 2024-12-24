import React from 'react'
import img1 from "../img/Home1/img_1.jpg"
import img2 from "../img/Home1/img_2.jpg"
import img3 from "../img/Home1/img_3.jpg"
import '../assets/css/home.css'
import Button from '../Utils/button';
import Header from '../Utils/header';
import Playbutton from '../component/playbutton';
import Item1 from "../img/1.png"
import Item2 from "../img/2.png"
import Item3 from "../img/3.png"
import Item4 from "../img/4.png"
import Item5 from "../img/5.png"
import Item6 from "../img/6.png"




function Home() {
  return (
    <>
      <Header />

      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img1} class="d-block w-100" alt="..." />
            <div class="carousel-caption  d-md-block">
              <div className="container">
                <div className="row justify-content-center">
                  <div class="col-12 col-md-10 col-xl-8">
                    <div class="__name  text-start">AGRO</div>
                    <h1 class="display-4 fw-bold text-start">FARMING COMPANY</h1>
                    <div className="content pb-5">
                      <p class=" text-center">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
                    </div>
                    <Button />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img2} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-12 col-md col-lg-9 col-xl-8">
                    <div class="__name text-start">AgRO</div>

                    <p class="__title text-white text-start">Best harvest <br /><span>in the World</span></p>

                    <p class="text-start">
                      The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                    </p>

                    <p class="mt-5 mt-md-10 text-start">
                      <Button />
                    </p>
                  </div>

                  <div class="col-12 my-3 d-md-none"></div>

                  <div class="col-12 col-md-auto col-lg-3 col-xl-4  text-center ps-5">
                    <Playbutton />

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img3} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-12 col-md-auto col-xl-8">
                    <div class="__name text-start">AgRO</div>

                    <h2 class="__title text-white text-start">Live<span>stock</span></h2>

                    <p class="text-center mt-5 mt-md-10">
                      <Button />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="offer-section">
        <div className="container">
          <div className="offer-title text-center">
            <h2 className="title-offer">Special <span>Offers</span></h2>
            <p className="offer-discription">Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>


          </div>

          <div className="row pt-5">
            <div className="col-lg-2 col-6 col-sm-4 text-center">
              <div className="item-icon"><img src={Item1} alt="icon" />
                <div className="item-icon-description pt-4 "><h5>Farm Livestock</h5></div></div>
            </div>

            <div className="col-lg-2 col-6 col-sm-4 text-center">
              <div className="item-icon"><img src={Item2} alt="icon" />
                <div className="item-icon-description pt-4 "><h5>Garden Tillage</h5></div></div>
            </div>

            <div className="col-lg-2 col-6 col-sm-4 text-center">
              <div className="item-icon"><img src={Item3} alt="icon" />
                <div className="item-icon-description pt-4 "><h5>Fresh Fruits</h5></div></div>
            </div>

            <div className="col-lg-2 col-6 col-sm-4 text-center">
              <div className="item-icon"><img src={Item4} alt="icon" />
                <div className="item-icon-description pt-4 "><h5>Vegatables</h5></div></div>
            </div>

            <div className="col-lg-2 col-6 col-sm-4 text-center">
              <div className="item-icon"><img src={Item5} alt="icon" />
                <div className="item-icon-description pt-4 "><h5>Awesome Wheats</h5></div></div>
            </div>

            <div className="col-lg-2 col-6 col-sm-4 text-center">
              <div className="item-icon"><img src={Item6} alt="icon" />
                <div className="item-icon-description pt-4 "><h5>Agro Machinery</h5></div></div>
            </div>

          </div>
        </div>
      </div>
      <div className="special-offer ">
					<div class="container">
						<div class="special-offer-title">
							<h2 class="special-offer-inner">Special products for most people</h2>
						</div>
					</div>
      </div>
    </>

  );
};

export default Home;
