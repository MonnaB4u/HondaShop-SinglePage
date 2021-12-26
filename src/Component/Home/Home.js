import React from 'react';
import Featured from '../Featured/Featured';
import HappyClient from '../HappyClient/HappyClient';
import LatestNews from '../LatestNews/LatestNews';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Featured></Featured>
            <LatestNews></LatestNews>
            <HappyClient></HappyClient>
        </div>
    );
};

export default Home;
