import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import DetailCard from "../components/Card/DetailCard"

const Detail = () => {
  let { recipeId } = useParams()
  const [meal, setMeal] = useState()

  useEffect(() => {
    ;(async () => {
      const resp = await getMeal()
      setMeal(resp.meals[0])
    })()
  }, [])

  const getMeal = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
    )
    return response.json()
  }

  return (
    <div>
      <DetailCard meal={meal} />
    </div>
  )
}

export default Detail
