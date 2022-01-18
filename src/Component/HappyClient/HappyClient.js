import React from 'react';
import './HappyClient.css'
import user1 from '../assets/images/user-1.png'
import user2 from '../assets/images/user-2.png'
import user3 from '../assets/images/user-3.jpg'
import { AiOutlineStar } from 'react-icons/fa';
const HappyClient = () => {
    return (
        <div className="">
            <div className="container">
                <div className="text-center honda-sub-heading">
                    <h1>Happy Clients says</h1>
                </div>

                <div className=" mt-4 row text-center m-3">

                        <div className="border  col-sm m-3">
                            <img src={user1} alt="" className="img-fluid w-25 mt-2" />
                            <h4>Regina Miles</h4>
                            <p>I have purchased splendor pro bike from hero motocorp it is amazing bike from hero motocorp limited. every time drive vehicle every thing is very good.</p>
                            <button className="btn border mb-2">Read More</button>
                        </div>

                        <div className="border   col-sm  m-3">
                            <img src={user2} alt="" className="img-fluid w-25  mt-2" />
                            <h4>Regina Miles</h4>

                            <p>I have R15 v2 but young dream bike, 90s kids favorite bike, perfect fits to youngsters and gives more power in 150cc bikes, no other bikes are beat in past, present and future</p>
                            <button className="btn border mb-2">Read More</button>
                        </div>

                        <div className="col-sm border m-3">
                            <img src={user3} alt="" className="img-fluid w-25  user3 mt-2" />
                            <h4>Regina Miles</h4>
                            <p>My bike gives 65 kmpl on highway and 55 on roads with potholes. Splendor pro rocks. I think Hero Motocorp is a best bike manufacturer.</p>

                            <button className="btn border mb-2">Read More</button>
                        </div>




                </div>
            </div>

        </div>

    );
};

export default HappyClient;
