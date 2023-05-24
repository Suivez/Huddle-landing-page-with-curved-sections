import "./Navbar.css";
import logo from "../images/logo.svg";

export default function Navbar() {
    return (
        <div className="navbar-container">
            <div className="logo">
                <img src={logo} />
            </div>
            <div className="button">
                <button>Try it free</button>
            </div>
        </div>
    );
}
