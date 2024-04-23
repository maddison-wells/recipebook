import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./container/Navbar/Navbar";
import AddRecipe from "./components/AddRecipe/AddRecipe";
import RecipeList from "./container/RecipeList/RecipeList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import FavourtiesPage from "./container/FavouritesPage/FavourtiesPage";
import Login from "./components/Login/Login";
import Logout from "./components/Login/Logout";
import { gapi } from "gapi-script";
import IdeaPage from "./container/IdeasPage/IdeasPage";
import CategoriesPage from "./container/CategoriesPage/CategoriesPage";

const clientId =
  "138139961564 - r074ans3qdt0duoi9acto3hgjkstrvqi.apps.googleusercontent.com";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        //using api?
        scope: "",
      });
    }
    gapi.load("client:loadAuth2", start);
  });

  return (
    <>
      {/* <Login />
      <Logout /> */}
      <BrowserRouter>
        <Navbar setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path="/" element={<RecipeList searchTerm={searchTerm} />} />
          <Route path="/add" element={<AddRecipe />} />
          <Route path="/favourites" element={<FavourtiesPage />} />
          <Route path="/idea" element={<IdeaPage />} />
          <Route
            path="/categories"
            element={<CategoriesPage setSearchTerm={setSearchTerm} />}
          />
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
