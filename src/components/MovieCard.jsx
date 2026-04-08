const MovieCard = ({ movie }) => {

  const poster =
    movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/200x300?text=No+Image";

  return (
    <div className="movie-card">
      <img src={poster} alt={movie.Title} />
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>📅 {movie.Year}</p>
        <p>🎭 {movie.Type}</p>
      </div>
    </div>
  );
};

export default MovieCard;