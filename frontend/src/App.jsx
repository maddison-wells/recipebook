import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./container/Navbar/Navbar";
import AddRecipe from "./components/AddRecipe/AddRecipe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AddRecipe />
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
