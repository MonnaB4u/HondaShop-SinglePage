import React from 'react';
import './Header.css'
import img from '../assets/images/header-bike.png'

const Header = () => {
    return (
        <div class="m-5 p-5">
            <div class="row justify-content-md-center mb-5">
                    <div class=" text-white  m-5 col-12 col-md-7 mt-5" >
                        <small className="textres">Computer-controlled digital transistorized with electronic advance</small>
                        <h1 >Honda CBR 300R</h1>
                        <p className=" ">A single is the perfect choice for a bike like the CBR300R. It's light, simple, fuel efficient and features a broad powerband with plenty of low-revving torque—just what you want in your first motorcycle, but geared for comfortable cruising at highway speeds.</p>
                        <button className="btn hondabtn2">See Details</button>
                    </div>
                    <div class=" col">
                        <img src={img} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>


    );
};

export default Header;
