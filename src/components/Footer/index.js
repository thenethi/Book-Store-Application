import { FaFacebook,FaLinkedinIn,FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

import './index.css'

const Footer=()=>(
    <div>
        <hr/>
        <div className="footer-initial-container">
            <h1 className="footer-heading">Stay In The Know</h1>
            <p className="footer-desc">Subscribe to our newsletter and stay updated on latest offers, discounts and events near you.</p>
            <input type="email" placeholder='Email id' className='footer-input-element'/>
            <h1 className="footer-heading-follow-us">Follow Us</h1>
            <div className="icons-container">
                <FaFacebook className="footer-icons facebook"/>
                <BsTwitterX className="footer-icons twitter"/>
                <FaLinkedinIn className="footer-icons linkedin"/>
                <FaInstagram className="footer-icons instagram"/>
            </div>
        </div>
    </div>
)

export default Footer 