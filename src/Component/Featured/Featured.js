import React from 'react';
import './Featured.css'
import bike1 from '../assets/images/feature-bike.jpg'
import bike2 from '../assets/images/bike-4.jpg'

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
            <div className="row mt-4 text-center">
                    <div className="col-sm">  <img src={bike1} alt="" className="img-fluid w-75" /> </div>
                    <div className="col-sm">    <img src={bike2} alt="" className="img-fluid w-75 " /> </div>
                    <div className="col-sm">      <img src={bike1} alt="" className="img-fluid w-75" /> </div>
            </div>

        </div>

    );
};

export default Featured;
