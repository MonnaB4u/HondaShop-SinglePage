import React from 'react';
import AskQuestion from '../AskQuestion/AskQuestion';
import Contact from '../Contact/Contact';
import Featured from '../Featured/Featured';
import Footer from '../Footer/Footer';
import HappyClient from '../HappyClient/HappyClient';
import LatestNews from '../LatestNews/LatestNews';
import Navbar from '../Navbar/Navbar';
import Offer from '../Offer/Offer';
import TopProduct from '../TopProduct/TopProduct';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Featured></Featured>
            <LatestNews></LatestNews>
            <HappyClient></HappyClient>
            <AskQuestion></AskQuestion>
            <Offer></Offer>
            <TopProduct/>
            <Contact/>
            <Footer></Footer>
        </div>
    );
};

export default Home;
