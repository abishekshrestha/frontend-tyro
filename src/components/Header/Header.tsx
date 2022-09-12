import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  title: string;
  searchInput?: string;
  changeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header = ({
  title = "Movie Search App",
  searchInput,
  changeHandler,
}: IProps) => {
  return (
    <div>
      <div className="bg-gray-800">
        <div className="container mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:flex flex-row lg:justify-between lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <Link to="/movie">{title}</Link>
            </h2>
          </div>
          <form
            className="mt-4 sm:flex sm:max-w-md w-full"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              name="search"
              data-testid="search-input"
              className="w-full rounded-md border border-transparent bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:border-white focus:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              placeholder="Enter movie name"
              value={searchInput}
              onChange={changeHandler}
            />
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <Link
                to={`movie?search=${searchInput}`}
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hove:bg-indigio-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Search
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
