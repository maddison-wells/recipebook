import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./container/Navbar/Navbar";
import AddRecipe from "./components/AddRecipe/AddRecipe";
import RecipeList from "./container/RecipeList/RecipeList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import FavourtiesPage from "./container/FavouritesPage/FavourtiesPage";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <BrowserRouter>
        <Navbar setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path="/" element={<RecipeList searchTerm={searchTerm} />} />
          <Route path="/add" element={<AddRecipe />} />
          <Route path="/favourites" element={<FavourtiesPage />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer
        theme="light"
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
