import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Menu from './pages/Menu';
import Category from "./pages/Category";
import About from './pages/About';
import Services from './pages/Services';
import Contacts from './pages/Contacts';

function Main() {
	return (
		<main className="container">
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/menu/" element={<Menu />} />
			<Route path="/category/:name" element={<Category/>}/>
			<Route path="/about/" element={<About />} />
			<Route path="/contacts/" element={<Contacts />} />
			<Route path="/services/" element={<Services />} />
		</Routes>
		</main>
	);
}

export default Main;