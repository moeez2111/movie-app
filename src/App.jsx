import "./App.css";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import useMovies from "./hooks/useMovies";

const App = () => {

  const { movies, loading, error, searchMovies } = useMovies();

  return (
    <div className="app">
      <h1>🎬 Movie Search App</h1>

      <SearchBar onSearch={searchMovies} />

      {loading && <p className="status">Loading... ⏳</p>}
      {error   && <p className="status error">{error}</p>}

      <MovieList movies={movies} />
    </div>
  );
};

export default App;