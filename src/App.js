import { 
	BrowserRouter as Router
} from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer.js';

function App() {
	return (
		<>
			<Router basename='/react-food'>
				<Header />
				<Main />
				<Footer />
			</Router>
		</>
	);
}

export default App;