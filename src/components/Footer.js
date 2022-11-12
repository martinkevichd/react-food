import { Link } from "react-router-dom";
import phone from "../images/phone.png";
import email from "../images/email.png";
import map from "../images/maps.png";

function Footer() {
	return (
		<footer className="footer__main">
			<div className='container'>
				<div className="footer">
					<div className="footer__info">
						<ul className="footer__pages"> 
							<li className="footer__title">Pages</li>
							<li><Link to="/menu/">Menu</Link></li>
							<li><Link to="/about/">About us</Link></li>
							<li><Link to="/services/">Service</Link></li>
							<li><Link to="/contacts/">Contact</Link></li>
						</ul>
						<ul className="footer__follow">
							<li className="footer__title">Follow</li>
							<li><Link to="#instagram">Instagram</Link></li>
							<li><Link to="#spotify">Spotify</Link></li>
							<li><Link to="#twitter">Twitter</Link></li>
							<li><Link to="#facebook">Facebook</Link></li>
						</ul>
						<ul className="footer__contacts">
							<li className="footer__title">Contact</li>
							<li><img className="phone-icon" src={phone} alt="Phone" />+375(23)584-23-56</li>
							<li><img className="email-icon" src={email} alt="Email" />bestrestaurant@gmail.com</li>
							<li><img className="map-icon" src={map} alt="Map" />Belarus, Minsk</li>
						</ul>

					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;