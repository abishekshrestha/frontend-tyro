import React from "react";
import Home from "./components/Home/Home";
import { MovieDetails } from "./components/MovieDescription/MovieDescription";
import { MovieList } from "./components/MovieList/MovieList";
import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <main>
      {/* <Search /> */}
      <Home />
      <div class="container mx-auto px-4">
        <Link
          className="block rounded-md w-40 mt-10 mb-10 text-center p-4 bg-indigo-500 text-white"
          to="/movie"
        >
          Go to Home Page
        </Link>
      </div>
      <Routes>
        <Route exact path="/movie" element={<MovieList />}></Route>
        <Route path="/movie/:movieId" element={<MovieDetails />}></Route>
      </Routes>
    </main>
  );
}
