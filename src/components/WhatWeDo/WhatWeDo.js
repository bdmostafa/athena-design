import React from 'react';
import UX from '../../images/service1.png';
import UI from '../../images/service2.png';
import prototype from '../../images/service3.png';
import illustration from '../../images/service4.png';
import './WhatWeDo.css';

const WhatWeDo = () => {
    return (
        <div className="area-bg"> 
        <section className="what-we-do-area text-center">
            <div className="container">
                <h1 className="heading">What we do</h1>
                <p className="mb-5">Our main focus is to make the User Experience very <br/> simple and easy. Simplicity is our Strength. </p>
                <div className="row">
                    <div className="col-sm-6 col-md-3 service mb-4">
                        <div className="serviceContent">
                            <img className="mb-3" src={UX} alt=""/>
                            <h1>Experience Design </h1>
                            <p>The point of using Lorem Ipsum is that it has a more-orless normal.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 service mb-4">
                        <div className="serviceContent">
                            <img className="mb-3" src={UI} alt=""/>
                            <h1>Interface Design</h1>
                            <p>The point of using Lorem Ipsum is that it has a more-orless normal.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 service mb-4">
                        <div className="serviceContent">
                            <img className="mb-3" src={prototype} alt=""/>
                            <h1>Prototyping</h1>
                            <p>The point of using Lorem Ipsum is that it has a more-orless normal.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 service mb-4">
                        <div className="serviceContent">
                            <img className="mb-3" src={illustration} alt=""/>
                            <h1>Illustration</h1>
                            <p>The point of using Lorem Ipsum is that it has a more-orless normal.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
        </div>
    );
};

export default WhatWeDo;