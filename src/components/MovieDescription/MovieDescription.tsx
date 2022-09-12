import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "utils/api";

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [plot, setPlot] = React.useState("");
  const [cast, setCast] = React.useState("");
  const [poster, setPoster] = React.useState("");
  const [released, setReleased] = React.useState("");

  React.useEffect(() => {
    const url = `https://www.omdbapi.com/?i=${movieId}&apikey=${API_KEY}`;
    axios.get(url).then((resp) => {
      setLoading(false);
      if (resp?.data?.Error) {
        setErrorMessage(resp?.data?.Error);
      }

      setTitle(resp?.data?.Title);
      setPlot(resp?.data?.Plot);
      setCast(resp?.data?.Actors);
      setPoster(resp?.data?.Poster);
      setReleased(resp?.data?.Released);
    });
  }, [movieId]);

  if (loading) {
    return <div className="container mx-auto text-center">Loading...</div>;
  }

  if (errorMessage !== "") {
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <MovieDescription
      title={title}
      plot={plot}
      cast={cast}
      poster={poster}
      released={released}
    />
  );
};

interface IProps {
  title?: string;
  plot?: string;
  cast?: string;
  poster?: string;
  released?: string;
}

const MovieDescription = ({ title, plot, cast, poster, released }: IProps) => {
  return (
    <div className="container mx-auto md:flex px-4">
      <img className="w-40" src={poster} />
      <div className="pt-4 md:pt-0 md:pl-10">
        <h1 className="text-lg font-bold">{title}</h1>
        <p>Plot: {plot}</p>
        <p>Actors: {cast}</p>
        <p>Released: {released}</p>
      </div>
    </div>
  );
};

export default MovieDescription;
