import {useState,useEffect} from 'react';
import CategoriesList from '../CategoriesList'
import Preloader from '../../components/Preloader'

function Menu(props) {
	const [catalog, setCatalog] = useState([]);

	useEffect( () =>{
		fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
		.then((response) => {
		 return response.json();

		})
		.then((data) => {
			setCatalog(data.categories);
	   })
	}, [])

	
	return (
		<div className="page">
			<div className='menu'>
			<div className='menu__title'>Menu</div>
			{!catalog.length ? <Preloader/>: (
				<CategoriesList catalog = {catalog} />
			)}
			</div>
		</div>
	);
}

export default Menu;