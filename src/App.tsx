import { Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from "./pages/home-page";
import RecipePage from "./pages/recipe-page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes/:recipeId" element={<RecipePage/>} />


      </Routes>
    </>
  )
}

export default App
