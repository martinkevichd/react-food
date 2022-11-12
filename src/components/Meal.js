function Meal(props) {
    const {strMeal, strMealThumb,idMeal} = props;
    let price = Math.floor(Math.random() * (50 - 10)) + 10;

    return <div className="card" id={idMeal}>
            <div className="card-image">
                <img src={strMealThumb} alt={strMeal}/>
            </div>
            <div className="card-content">
                <span className="card-title">{strMeal}</span>
            </div>
            <div className="card-link">
                <div className="card-price">{price}$</div>
            </div>
        </div>
}
export default Meal;
