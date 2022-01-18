import React from 'react';
import helmet from '../assets/images/special-product/helmet-3-400x400.jpg'
import jacket from '../assets/images/special-product/jacket-1-400x400.jpg'
import jacket2 from '../assets/images/special-product/jacket-2-400x400.jpg'
import bag from '../assets/images/special-product/part-3-200x200.jpg'
import helmet2 from '../assets/images/special-product/helmet-6.jpg'
import bike from '../assets/images/special-product/bike-9.png'
import boot from '../assets/images/special-product/boot-1-400x400.jpg'
import { FaStar } from 'react-icons/fa';
import './TopProduct.css'

const TopProduct = () => {
    return (
        <div>
            <div className="container my-3">
                <div className="row ">
                    <div className="col-sm">
                        <p className="h3">Top Rated Products</p>

                        <div className="d-flex border border-white mt-3 rounded shadow  bg-white g-4">
                            <img src={helmet} className="img-fluid w-25 mx-5" alt="" />
                            <div className="text-start col-sm">
                                <p className="">MT Streetfighter SV</p>
                                <small className="">$652.00</small>
                                <br />
                                <FaStar className="star_hover " />
                                <FaStar className="star_hover " />
                                <FaStar className="star_hover " />
                                <FaStar className="star_hover " />
                                <FaStar className="star_hover " />

                            </div>

                        </div>

                        <div className="d-flex border border-white rounded shadow my-4  bg-white ">
                            <img src={jacket} className="img-fluid w-25 mx-5" alt="" />
                            <div className="text-start col-sm">
                                <p className="">Gore-Tex Jacket</p>
                                <small className="">$180.00</small>
                                <br />
                                <FaStar className="star_hover " />
                                <FaStar className="star_hover " />
                                <FaStar className="star_hover " />
                                <FaStar className="star_hover " />
                                <FaStar className="star_hover " />
                            </div>
                        </div>

                        <div className="d-flex border border-white rounded shadow  bg-white ">
                            <img src={bag} className="img-fluid w-25 mx-5" alt="" />
                            <div className="text-start col-sm">
                                <p className="">Air Intake Pump</p>
                                <small className="">$360.00</small>
                                <br />
                                <FaStar className="star_hover " />
                                <FaStar className="star_hover " />
                                <FaStar className="star_hover " />
                                <FaStar className="star_hover " />
                                <FaStar className="star_hover " />
                            </div>
                        </div>

                    </div>


                    <div className="col-sm">
                        <p className="h3">Special Seller</p>

                        <div className="d-flex border border-white mt-3 rounded shadow  bg-white g-4">
                            <img src={bag} className="img-fluid w-25 mx-5" alt="" />
                            <div className="text-start col-sm">
                                <p className="">MT Streetfighter SV</p>
                                <small className="">$652.00</small>
                                <br />
                                <FaStar className="star_hover " />
                                <FaStar className="star_hover " />
                                <FaStar className="star_hover " />
                                <FaStar className="star_hover " />
                                <FaStar className="star_hover " />
                            </div>
                        </div>

                        <div className="d-flex border border-white rounded shadow my-4  bg-white ">
                            <img src={jacket2} className="img-fluid w-25 mx-5" alt="" />
                            <div className="text-start col-sm">
                                <p className="">Gore-Tex Jacket</p>
                                <small className="">$180.00</small>
                                <br />
                                <FaStar className="star_hover " />
                                <FaStar className="star_hover " />
                                <FaStar className="star_hover " />
                                <FaStar className="star_hover " />
                                <FaStar className="star_hover " />
                            </div>
                        </div>

                        <div className="d-flex border border-white rounded shadow  bg-white ">
                            <img src={helmet2} className="img-fluid w-25 mx-5" alt="" />
                            <div className="text-start col-sm">
                                <p className="">Air Intake Pump</p>
                                <small className="">$360.00</small>
                                <br />
                                <FaStar className="star_hover " />
                                <FaStar className="star_hover " />
                                <FaStar className="star_hover " />
                                <FaStar className="star_hover " />
                                <FaStar className="star_hover " />
                            </div>
                        </div>


                    </div>


                    {/* Bestsellers */}

                    <div className="col-sm">
                        <p className="h3">Bestsellers</p>
                        <div className="d-flex border border-white mt-3 rounded shadow  bg-white g-4">
                            <img src={bike} className="img-fluid w-25 mx-5" alt="" />
                            <div className="text-start col-sm">
                                <p className="">MT Streetfighter SV</p>
                                <small className="">$652.00</small>
                                <br />
                                <FaStar className="star_hover " />
                                <FaStar className="star_hover " />
                                <FaStar className="star_hover " />
                                <FaStar className="star_hover " />
                                <FaStar className="star_hover " />
                            </div>
                        </div>

                        <div className="d-flex border border-white rounded shadow my-4  bg-white ">
                            <img src={helmet} className="img-fluid w-25 mx-5" alt="" />
                            <div className="text-start col-sm">
                                <p className="">Gore-Tex Jacket</p>
                                <small className="">$180.00</small>
                                <br />
                                <FaStar className="star_hover " />
                                <FaStar className="star_hover " />
                                <FaStar className="star_hover " />
                                <FaStar className="star_hover " />
                                <FaStar className="star_hover " />
                            </div>
                        </div>

                        <div className="d-flex border border-white rounded shadow  bg-white ">
                            <img src={boot} className="img-fluid w-25 mx-5" alt="" />
                            <div className="text-start col-sm">
                                <p className="">Air Intake Pump</p>
                                <small className="">$360.00</small>
                                <br />
                                <FaStar className="star_hover " />
                                <FaStar className="star_hover " />
                                <FaStar className="star_hover " />
                                <FaStar className="star_hover " />
                                <FaStar className="star_hover " />
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopProduct;
