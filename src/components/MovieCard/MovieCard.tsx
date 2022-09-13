import React from "react";
import { Link } from "react-router-dom";

export type Movie = {
  thumbnailUrl: string;
  title: string;
  year: string;
  imdbID: string;
};

const MovieCard = ({ title, thumbnailUrl, year, imdbID }: Movie) => {
  return (
    <Link to={`/${imdbID}`}>
      <div className="transition ease-in-out delay-0 hover:scale-105 flex flex-col p-2 sm:p-4 shadow-md rounded-md justify-between hover:text-blue-900 hover:cursor-pointer h-full">
        <img className="pb-4 " src={thumbnailUrl} alt="card-poster" />
        <div>
          <p className="font-bold text-sm truncate">{title}</p>
          <p className="text-gray-900">Year: {year}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
