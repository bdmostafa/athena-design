import React from 'react';
import './Footer.css'
import group86 from '../../../images/logo.png';
import facebook from '../../../images/facebook.png';
import twitter from '../../../images/twitter.png'
import linkedin from '../../../images/linkedin.png'
import dribbble from '../../../images/dribble.png'

const Footer = () => {
    return (
        <div className="container pt-5 ">
            <div className="footer row">
                <div className="col-md-5">
                    <img src={group86} alt=""/>
                    <div className="social pt-3">
                    <img src={facebook} alt=""/>
                    <img src={twitter} alt=""/>
                    <img src={linkedin} alt=""/>
                    <img src={dribbble} alt=""/>
                    </div>
                   
                </div>
                <div className="list-item  col-md-7">
                <div className="row">
                    <div className="col-md-4">
                        <ul className="list">
                            <li>Feature</li>
                            <li>Enterprise</li>
                            <li>Pricing</li>
                        </ul>
                </div>
                <div className="list col-md-4">
                    <ul className="list">
                        <li>Blog</li>
                        <li>Help Center</li>
                        <li>Contact US</li>
                        <li>Status</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <ul className="list">
                        <li>About US</li>
                        <li>Terms of Service</li>
                        <li>Security</li>
                        <li>Login</li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;