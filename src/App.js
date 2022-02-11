import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import "./App.css"
import Detail from "./pages/detail"
import Recipe from "./pages/recipe"

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          backgroundColor: "pink",
          padding: "2em 12em",
          minHeight: "100vh",
        }}
      >
        <h1>Cooking master</h1>
        <Routes>
          <Route exact path="/" element={<Navigate to="recipes" />} />
          <Route exact path="/recipes" element={<Recipe />} />
          <Route exact path="/recipes/:recipeId" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App
