import "./card.css"

const DetailCard = ({ meal }) => {
  return (
    <>
      {meal && (
        <div className="card-container">
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <div className="card-content">
            <h2>{meal.strMeal}</h2>
            <p style={{ fontWeight: "bold" }}>Ingredients</p>
            <ul>
              {meal.strMeasure1 !== " " && (
                <li>
                  {meal.strMeasure1} {meal.strIngredient1}
                </li>
              )}
              {meal.strMeasure2 !== " " && (
                <li>
                  {meal.strMeasure2} {meal.strIngredient2}
                </li>
              )}
              {meal.strMeasure3 !== " " && (
                <li>
                  {meal.strMeasure3} {meal.strIngredient3}
                </li>
              )}
              {meal.strMeasure4 !== " " && (
                <li>
                  {meal.strMeasure4} {meal.strIngredient4}
                </li>
              )}
              {meal.strMeasure5 !== " " && (
                <li>
                  {meal.strMeasure5} {meal.strIngredient5}
                </li>
              )}
              {meal.strMeasure6 !== " " && (
                <li>
                  {meal.strMeasure6} {meal.strIngredient6}
                </li>
              )}
              {meal.strMeasure7 !== " " && (
                <li>
                  {meal.strMeasure7} {meal.strIngredient7}
                </li>
              )}
              {meal.strMeasure8 !== " " && (
                <li>
                  {meal.strMeasure8} {meal.strIngredient8}
                </li>
              )}
              {meal.strMeasure9 !== " " && (
                <li>
                  {meal.strMeasure9} {meal.strIngredient9}
                </li>
              )}
              {meal.strMeasure10 !== " " && (
                <li>
                  {meal.strMeasure10} {meal.strIngredient10}
                </li>
              )}
              {meal.strMeasure11 !== " " && (
                <li>
                  {meal.strMeasure11} {meal.strIngredient11}
                </li>
              )}
              {meal.strMeasure12 !== " " && (
                <li>
                  {meal.strMeasure12} {meal.strIngredient12}
                </li>
              )}
              {meal.strMeasure13 !== " " && (
                <li>
                  {meal.strMeasure13} {meal.strIngredient13}
                </li>
              )}
              {meal.strMeasure14 !== " " && (
                <li>
                  {meal.strMeasure14} {meal.strIngredient14}
                </li>
              )}
              {meal.strMeasure15 !== " " && (
                <li>
                  {meal.strMeasure15} {meal.strIngredient15}
                </li>
              )}
              {meal.strMeasure16 !== " " && (
                <li>
                  {meal.strMeasure16} {meal.strIngredient16}
                </li>
              )}
              {meal.strMeasure17 !== " " && (
                <li>
                  {meal.strMeasure17} {meal.strIngredient17}
                </li>
              )}
              {meal.strMeasure18 !== " " && (
                <li>
                  {meal.strMeasure18} {meal.strIngredient18}
                </li>
              )}
              {meal.strMeasure19 !== " " && (
                <li>
                  {meal.strMeasure19} {meal.strIngredient19}
                </li>
              )}
              {meal.strMeasure20 !== " " && (
                <li>
                  {meal.strMeasure20} {meal.strIngredient20}
                </li>
              )}
            </ul>
            <p style={{ fontWeight: "bold" }}>Instructions</p>
            <p>{meal.strInstructions}</p>
            <p style={{ fontWeight: "bold" }}>Source</p>
            <a href={meal.strSource}>{meal.strSource}</a>
          </div>
        </div>
      )}
    </>
  )
}

export default DetailCard
