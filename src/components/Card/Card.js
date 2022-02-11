import "./card.css"

const Card = ({ meal }) => {
  return (
    <a href={`/recipes/${meal.idMeal}`}>
      <div className="card-container scale">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <div className="title">{meal.strMeal}</div>
      </div>
    </a>
  )
}

export default Card
