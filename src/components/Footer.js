import "./Footer.css";
import bgFooterDesktop from "../images/bg-footer-top-desktop.svg";
import bgFooterMobile from "../images/bg-footer-top-mobile.svg";
import iconPhone from "../images/icon-phone.svg";
import iconEmail from "../images/icon-email.svg";
import logoFooter from "../images/logo-footer.svg";
import { useState, useRef } from "react";
import ImageChange from "../functions/ImageChange";

export default function Footer() {
    const [errorEmail, setErrorEmail] = useState("");
    const inputRefEmail = useRef(null);

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const submitEmail = (event) => {
        event.preventDefault();

        if (inputRefEmail.current.value == "") {
            setErrorEmail("Please enter your email address");
            console.log("ERROR: email is empty");
        } else if (!isValidEmail(inputRefEmail.current.value)) {
            setErrorEmail("Check your email please");
            console.log("ERROR: Email is valid");
        } else {
            setErrorEmail("");
            console.log("INFO: Email is correct");
        }
    };

    const ChangeImage = (largeImage, smallImage) => {
        return ImageChange() > 780 ? largeImage : smallImage;
    };

    return (
        <div className="footer-container">
            <img src={ChangeImage(bgFooterDesktop, bgFooterMobile)} />
            <div className="footer-content">
                <div className="footer-half">
                    <img src={logoFooter} />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                        nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
                    </p>
                    <div className="contact-section">
                        <img src={iconPhone} /> Phone +1-543-123-4567
                    </div>
                    <div className="contact-section">
                        <img src={iconEmail} /> example@huddle.com
                    </div>
                    <div className="socials-section">
                        <i className="fa-brands fa-square-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-square-twitter"></i>
                    </div>
                </div>
                <div className="footer-half">
                    <h2>NEWSLETTER</h2>
                    <p>
                        To recieve tips on how to grow your community, sign up to our weekly
                        newsletter. We’ll never send you spam or pass on your email address
                    </p>
                    <div className="input-section">
                        <div className="input-field">
                            <input type="text" ref={inputRefEmail} />
                            <span className="error-state">{errorEmail}</span>
                        </div>
                        <button className="subscribe-btn" onClick={submitEmail}>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
