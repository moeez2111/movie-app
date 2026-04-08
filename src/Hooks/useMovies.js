import { useState } from "react";

const useMovies = () => {
  const [movies, setMovies]   = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");

  const searchMovies = async (title) => {
    setLoading(true);
    setError("");
    setMovies([]);
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?s=${title}&apikey=${import.meta.env.VITE_OMDB_KEY}`
      );
      if (!res.ok) throw new Error("Server error aaya!");
      const data = await res.json();
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        throw new Error("Koi movie nahi mili! 😢");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { movies, loading, error, searchMovies };
};

export default useMovies;