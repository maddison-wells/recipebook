import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./container/Navbar/Navbar";
import AddRecipe from "./components/AddRecipe/AddRecipe";
import RecipeList from "./container/RecipeList/RecipeList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <AddRecipe /> */}
        <RecipeList />
        {/* <Routes>
          <Route></Route>
        </Routes> */}
      </BrowserRouter>
    </>
  );
}

export default App;
