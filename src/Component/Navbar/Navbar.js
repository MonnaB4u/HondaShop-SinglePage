import React from 'react';
import Header from '../Header/Header';
import './Navbar.css'
const Navbar = () => {
    return (
        <div className="navmain">
            <nav class="navbar navbar-light justify-content-between ">
                <form class="form-inline mr-5 text-white ml-auto">
                    <a class="navbar-brand mr-5 text-white" href="/home">Home</a>
                    <a class="navbar-brand mr-5 text-white" href="/shop">Shop</a>
                    <a class="navbar-brand mr-5 text-white" href="/news">News</a>
                    <a class="navbar-brand mr-5 text-white" href="/contact">Contact</a>
                    <button class="btn  my-2 my-sm-0 mr-5 text-white hondabtn" type="submit">Search</button>
                </form>
            </nav>
            <div className="">
                <Header></Header>
            </div>

        </div>
    );
};

export default Navbar;
