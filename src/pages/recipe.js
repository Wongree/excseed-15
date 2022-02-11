import { useState, useEffect } from "react"
import Card from "../components/Card/Card"

const Recipe = () => {
  const [meals, setMeals] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    ;(async () => {
      const temp = await getAllMeal()
      setMeals(temp.meals)
    })()
  }, [])

  const getAllMeal = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    )
    return response.json()
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          placeContent: "center",
          alignItems: "center",
          marginBottom: "2em",
        }}
      >
        <div
          style={{
            marginRight: "1em",
            fontWeight: "bold",
            fontSize: "1.1em",
          }}
        >
          Search
        </div>
        <input
          className="searchbar"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="meal-grid">
        {meals &&
          meals
            .filter((m) => m.strMeal.includes(search))
            .map((m) => <Card meal={m} />)}
      </div>
    </div>
  )
}

export default Recipe
