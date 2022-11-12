import Nav from './Nav';
import Logo from '../images/logo.png';

function Header() {
	return (
		<header className="header__main">
			<div className='container'>
				<div className="header">
					<a href="/"><img src={Logo} alt="Company" /></a>
					<Nav />
				</div>
			</div>
		</header>
	);
}

export default Header;