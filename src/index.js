import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import { loader as PokemonLoader } from "./helpers/pokemons";
import PokeCardIndividual from "./components/PokeCardIndividual";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: PokemonLoader,
  },
  {
    path: "/pokemon/:id",
    element: <PokeCardIndividual />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
