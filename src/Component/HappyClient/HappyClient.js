import React from 'react';
import './HappyClient.css'
import user1 from '../assets/images/user-1.png'
import user2 from '../assets/images/user-2.png'
import user3 from '../assets/images/user-3.jpg'
import { AiOutlineStar } from 'react-icons/fa';
const HappyClient = () => {
    return (
        <div className="pb-4 d-flex mt-4 col">
            <div className="container">
                <div className="text-center honda-sub-heading">
                    <h1>Happy Clients says</h1>

                </div>
                <div className=" mt-4 row">
                    <div className=" d-flex justify-content-center">
                        <div className="honda-box mx-3 col-sm-3 text-center p-4">
                            <img src={user1} alt="" className="img-fluid useerimg " />
                            <h4>Regina Miles</h4>
                            <p>I have purchased splendor pro bike from hero motocorp it is amazing bike from hero motocorp limited. every time drive vehicle every thing is very good.</p>
                            <button className="btn ">Read More</button>
                        </div>
                        <div className="honda-box mx-3 p-4 col-sm-3  text-center">
                            <img src={user2} alt="" className="img-fluid useerimg" />
                            <h4>Regina Miles</h4>

                            <p>I have R15 v2 but young dream bike, 90s kids favorite bike, perfect fits to youngsters and gives more power in 150cc bikes, no other bikes are beat in past, present and future</p>
                            <button className="btn ">Read More</button>
                        </div>
                        <div className="honda-box mx-3 col-sm-3 p-4 text-center">
                            <img src={user3} alt="" className="img-fluid useerimg user3" />
                            <h4>Regina Miles</h4>
                            <p>My bike gives 65 kmpl on highway and 55 on roads with potholes. Splendor pro rocks. I think Hero Motocorp is a best bike manufacturer.</p>
                            <div class="reatings m-0 p-0 pb-1 honda-rating-color">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>
                            <button className="btn ">Read More</button>
                        </div>


                    </div>

                </div>
            </div>

        </div>

    );
};

export default HappyClient;
