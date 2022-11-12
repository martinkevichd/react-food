import { Link } from "react-router-dom"
import Meal from "./Meal"
function MealList(props){
    const {meals = []} = props;
    return <div className="page">
        <Link to={`../menu`} className="btn">Back</Link>
        <div className="card__items">
            {meals.map(elem=>(
                <Meal key={elem.idMeal} {...elem}  meals = {meals}/>
            ))}
            
        </div>
    </div>
    }
    
    export default MealList