import { Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from "./components/ui/nav-bar";
import HomePage from "./pages/home-page";
import RecipePage from "./pages/recipe-page";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes/:recipeId" element={<RecipePage />} />
        <Route path="*" element={<p> This page does not exist. </p>} />
      </Routes>
    </>
  )
}

export default App
