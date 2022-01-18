import React from 'react';
import './LatestNews.css'
import bike from '../assets/images/bike-1.png'
import bike2 from '../assets/images/bike-2.png'
import bike3 from '../assets/images/bike-3.png'

const LatestNews = () => {
    return (
        <div className="pb-4 d-flex">
            <div className="container">
                <div className="text-center honda-sub-heading">
                    <h1>Latest News</h1>
                    <p>Our most recent collection. See what's new</p>
                    <div className="line"></div>
                </div>
                <div className=" mt-4 row m-3 ">

                    <div className="honda-box m-3 col-sm p-4">

                        <img src={bike} alt="" className="img-fluid text-center  w-100" />
                        <h4>Ducati XDIAVEL S-73</h4>
                        <p>Ducati the XDiavel range by introducing two new versions for 2021: XDiavel Dark and XDiavel Black...</p>
                        <button className="btn border">Read More</button>
                    </div>

                    <div className="honda-box m-3 p-4 col-sm ">
                        <img src={bike2} alt="" className="img-fluid w-100" />
                        <h4>Motorcycles & Scooters</h4>
                        <p>Electronic fuel injection system, 56mm elliptical throttle bodies.</p>
                        <button className="btn border">Read More</button>
                    </div>

                    <div className="honda-box m-3 p-4 col-sm ">
                        <img src={bike3} alt="" className="img-fluid w-100" />
                        <h4>2021 Honda CBR500R</h4>
                        <p>3.5" TFT Colour Display, Ducati Power Launch, Cruise Control, Hands-Free, Full-Led Lighting, Backlit Handlebar Switches, Cornering ABS</p>
                        <button className="btn border ">Read More</button>
                    </div>




                </div>
            </div>

        </div>

    );
};

export default LatestNews;
