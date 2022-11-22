import Nav from './Nav';
import Logo from '../images/logo.png';
import { Link } from "react-router-dom";

function Header() {
	return (
		<header className="header__main">
			<div className='container'>
				<div className="header">
				<Link to="/"><img src={Logo} alt="Company" /></Link>
					<Nav />
				</div>
			</div>
		</header>
	);
}

export default Header;