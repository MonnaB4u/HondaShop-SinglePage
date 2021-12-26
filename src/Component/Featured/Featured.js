import React from 'react';
import './Featured.css'
import bike from '../assets/images/bike-1.png'
import bike2 from '../assets/images/bike-2.png'
import bike3 from '../assets/images/bike-3.png'

const Featured = () => {
    return (

        <div className="container pb-5">
                <div className="text-center honda-sub-heading">
                    <h1>Fetured Bikes 2021</h1>
                    <p>Best bike collection</p>
                 <div className="line"> </div>
                </div>
            {/* <div className="text-center honda-sub-heading ">

            </div> */}
            <div className="row mt-4">
                <div className="d-flex justify-content-center">
                    <img src={bike} alt="" className="img-fluid w-25 mx-5" />
                    <img src={bike2} alt="" className="img-fluid w-25 mx-5" />
                    <img src={bike3} alt="" className="img-fluid w-25 mx-5" />
                </div>

            </div>

        </div>

    );
};

export default Featured;
