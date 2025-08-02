import { useState } from "react";
import styles from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import searchMovies from "../../api/searchMovies";
import { toast } from "react-hot-toast";
import type Movie from "../../types/movie";

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSearch = async (newQuery: string) => {
    console.log("handleSearch", newQuery);
    const results = await searchMovies(newQuery);

    if (results.length === 0) {
      toast("No movies found for your request.");
    }

    setMovies(results);
  };

  return (
    <div className={styles.app}>
      <SearchBar onSearch={handleSearch} />

      {movies.length === 0 ? (
        <p className={styles.noResults}>
          No movies to show yet. Try searching!
        </p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
