import React from 'react';
import './Offer.css'
import halmet from '../assets/images/halmet.png'
import bike from '../assets/images/transparent-bike.png'
const Offer = () => {
    return (
        <div>
             <section id="offer" class="py-5">
        <div class="container coundown mt-0 mt-lg-5 py-5 py-lg-0">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row row-cols-1 row-cols-lg-3">
                  <div class="col mb-4 mb-lg-0">
                    <h2
                      class="
                        h1
                        d-flex
                        align-items-center
                        justify-content-center
                        h-100
                        w-100
                      "
                    >
                      Limited offer Get Your helmet
                    </h2>
                  </div>

                  <div class="col d-none d-lg-block">
                    <img src={halmet} alt="Helmate"  class="img-fluid w-75 my-3"/>
                  </div>

                  <div class="col">
                    <div
                      class="  h-100 w-100  d-flex  flex-column  align-items-center  justify-content-center text-info">
                      <h3>Special 35% Discount</h3>
                      <div class="expire-msg mt-0">5 Days 3 hours left...</div>
                      <button style={{backgroundColor: '#'}} class="btn text-white border honda-btn w-50 rounded-pill mt-3">
                        Order Now
                      </button>
                    </div>
                  </div>

                </div>
              </div>

              <div class="carousel-item">
                <div class="row row-cols-1 row-cols-lg-3">

                  <div class="col">
                    <div
                      class=" h-100 w-100  d-flex  flex-column align-items-center  justify-content-centertext-warning  "  >
                      <h3>Free Delivery</h3>
                      <div class="expire-msg mt-0">10 Days 8 hours left...</div>
                      <button class="btn honda-btn w-50 rounded-pill my-3 text-white border">
                        Order Now
                      </button>
                    </div>
                  </div>

                  <div class="col d-none d-lg-block">
                    <img
                      src={bike}
                      alt="Helmate"
                      class="img-fluid bike"
                    />
                  </div>

                  <div class="col mb-4 mb-lg-0">
                    <h2
                      class="
                        h1
                        d-flex
                        align-items-center
                        justify-content-center
                        h-100
                        w-100
                      "
                    >
                      Limited offer Get Bike your
                    </h2>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Offer;
