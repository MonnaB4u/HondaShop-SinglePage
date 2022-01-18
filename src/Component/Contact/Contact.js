import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <section  id="conatct" class=" py-5 honda-contact  d-flex   align-items-centerjustify-content-center ">
                <div class="container my-0 my-lg-5">
                    <div class="row">
                        <div class="col-lg-6 my-2">
                            <div class="banner-content mb-lg-0 mb-4 mt-5">
                                <h2 class="font-weight-700 display-6 mb-4">
                                    Find the Best Motorbike Parts For <span>Your Vehicle</span>
                                </h2>
                                <p class="text-light">
                                    Browse our range of Gore-Tex motorcycle clothing including
                                    Rukka, Dainese, Richa, Alpinestars, and more
                                </p>
                                <a class="btn honda-btn w-50 rounded-pill mt-3 border text-white" href="#"
                                >Shop Now</a
                                >
                            </div>
                        </div>
                        <div class="col-lg-4 offset-lg-2 my-auto">
                            <div class="brands_form mt-5">
                                <form>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <select
                                                name="product_search"
                                                id="select-one"
                                                class="w-100 rounded-pill p-2 my-2 bg-light"
                                            >
                                                <option value="-1" disabled="" selected="">
                                                    Product Type
                                                </option>
                                                <option value="bike" data-id="44">Bike (15)</option>
                                                <option value="boots" data-id="47">Boots (4)</option>
                                                <option value="gloves" data-id="72">Gloves (4)</option>
                                                <option value="helmet" data-id="78">Helmet (6)</option>
                                                <option value="jacket" data-id="82">Jacket (5)</option>
                                            </select>
                                        </div>
                                        <div class="col-lg-12">
                                            <select
                                                name="product_search"
                                                class="w-100 rounded-pill p-2 my-2 bg-light"
                                            >
                                                <option value="-1" disabled="" selected="">
                                                    Category
                                                </option>
                                            </select>
                                        </div>
                                        <div class="col-lg-6">
                                            <select
                                                name="product_search"
                                                class="w-100 rounded-pill p-2 my-2 bg-light"
                                            >
                                                <option value="-1" disabled="" selected="">Year</option>
                                            </select>
                                        </div>
                                        <div class="col-lg-6">
                                            <select
                                                name="product_search"
                                                class="w-100 rounded-pill p-2 my-2 bg-light"
                                            >
                                                <option value="-1" disabled="" selected="">
                                                    Brand
                                                </option>
                                            </select>
                                        </div>
                                        <div class="col-lg-12 text-center">
                                           <a class="btn honda-btn w-50 rounded-pill mt-3 border text-white" href="#"  >Search</a
                                >
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
