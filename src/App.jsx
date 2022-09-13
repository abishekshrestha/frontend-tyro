import React from "react";
import Search from "./components/Search/Search";
import { MovieDetails } from "./components/MovieDescription/MovieDescription";
import { MovieList } from "./components/MovieList/MovieList";
import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <main>
      <Search />
      <div className="container mx-auto px-4">
        <Link
          className="block rounded-md w-40 mt-10 mb-10 text-center p-4 bg-indigo-500 text-white"
          to="/"
        >
          Go to Home Page
        </Link>
      </div>
      <Routes>
        <Route exact path="/" element={<MovieList />}></Route>
        <Route path="/:movieId" element={<MovieDetails />}></Route>
      </Routes>
    </main>
  );
}
