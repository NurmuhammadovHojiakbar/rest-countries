import {Link} from "react-router-dom"
import "./Header.css"
import SiteLogo from "../SVG/SiteLogo"
import ThemeIcon from "../SVG/ThemeIcon"

const Header = () => {
    return (
        <header className="site-header">
            <div className="site-header__container container">
                <Link 
                    className="site-logo" 
                    to="/"
                >
                    <SiteLogo />
                </Link>
                <button 
                    className="theme-changer"
                    onClick={()=>{
                        document.body.classList.toggle("dark-theme")
                    }}
                >
                    <ThemeIcon />
                    <span>Dark Mode</span>
                </button>
            </div>
        </header>
    );
}

export default Header;