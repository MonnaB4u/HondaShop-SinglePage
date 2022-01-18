import React from 'react';
import appleimg from '../assets/images/apple-store.png'
import playStore from '../assets/images/google-play.png'
const Footer = () => {
    return (
        <div>
            <footer id="footer" class=" py-5" style={{backgroundColor:'#0b0d17'}}>
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-8">
                            <div class="d-flex flex-column justify-content-center h-100">
                                <div class="d-flex">
                                    <a href="#" class="font-weight-300 text-white nav-link"
                                    >Download Now</a
                                    >
                                    <a href="#" class="font-weight-300 text-white nav-link"
                                    >License</a
                                    >
                                </div>
                                <ul class="nav">
                                    <li class="nav-item">
                                        <a href="#" class="text-white nav-link">About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="text-white nav-link">Features</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="text-white nav-link">Pricing</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="text-white nav-link">Careers</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="text-white nav-link">Help</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="text-white nav-link"
                                        >Privacy Policy</a
                                        >
                                    </li>
                                </ul>
                                <p class="text-white small font-weight-300 ps-3">
                                    &copy;2020 bike. All rights reserved
                                </p>
                            </div>
                        </div>

                        <div class="col-12 col-md-4 mt-4 mt-md-0">
                            <div class=" d-flex flex-column justify-content-center align-items-center " >
                                <h4 class="text-white">Get the App</h4>
                                <img class="w-50 mt-3" src={appleimg} alt="Apple store image"   />
                                <img class="w-50 mt-3"  src={playStore}  alt="google play store image" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
