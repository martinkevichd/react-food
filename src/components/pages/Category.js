import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import MealList from '../MealList';
import Preloader from '../Preloader';
import call from '../../images/call.png';
import PopupCall from '../PopupCall';

function Category(){
    const [popupActive, setPopupActive] = useState(false);

    let name = useParams();
    name = name.name;
    const [meals, setMeals] = useState([]);
    
    useEffect( () =>{
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=` + name)
            .then((response) => {
                return response.json();
            })

		.then((data) => {setMeals(data.meals)

        });

	}, [name]);

    return <div className='page'>
                <div className='category'>
                <div className='menu__title'>Menu</div>
                    {!meals.length ? <Preloader/>: (
                        <MealList meals = {meals}/>
                    )}

                <div className='call-icon'><img src={call} alt='call' onClick={()=>setPopupActive(true)}/>
                <PopupCall active={popupActive} setActive={setPopupActive}/>
                </div>
                </div>
            </div>
}

export default Category;