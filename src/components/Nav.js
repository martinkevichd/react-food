import { Link } from "react-router-dom";

function Nav() {
	return (
		<nav className="nav">
            <ul className="nav__menu">
                <li><Link to="/menu/">Menu</Link></li>
                <li><Link to="/about/">About us</Link></li>
                <li><Link to="/services/">Service</Link></li>
                <li><Link to="/contacts/">Contacts</Link></li>
            </ul>
            <div className="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label className="menu__btn" htmlFor="menu__toggle">
                    <span className="icon"></span>
                </label>
                <ul className="menu__box">
                    <li><Link  className="menu__item"  to="/menu/">Menu</Link></li>
                    <li><Link  className="menu__item" to="/about/">About us</Link></li>
                    <li><Link className="menu__item"  to="/services/">Service</Link></li>
                    <li><Link className="menu__item"  to="/contacts/">Contacts</Link></li>
                </ul>
                </div>
        </nav>
        
	);
}

export default Nav;