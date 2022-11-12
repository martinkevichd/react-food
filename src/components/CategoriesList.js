import CategoriesItem from './CategotiesItem'

function CategoriesList({catalog = []}){
return <div className="card__items">
    {catalog.map(elem=>(
        <CategoriesItem key={elem.idCategory} {...elem}/>
    ))}
</div>
}

export default CategoriesList