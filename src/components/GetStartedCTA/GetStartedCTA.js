import React from 'react';
import './GetStartedCTA.css'

const GetStartedCTA = () => {
    return (
        <div className="container pt-5">
            <div className="getStarted text-center">
            <h4>Get your design right, right now</h4>
            <p>Be the first know our latest offers and updates!</p>
            <div className=" py-3 pt-5">
             <input className="inputText shadow p-3 mb-5 bg-white rounded " type="text" placeholder="Enter Your Email"/>
             <input className="inputBtn" type="button" value="Search"/>
             </div>
            </div>
            
        </div>
    );
};

export default GetStartedCTA;