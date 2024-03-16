import { useMovieStore } from "../store/Movie"
import "../styles/Film.css"

export const Films = () => {
  const movies = useMovieStore((state) => state.movies as any)
  const genreSelected = useMovieStore((state) => state.genreSelected)
  const setHoverCard = useMovieStore((state) => state.setHoverCard)

  

  return (
    <>
      <div className="film-container">
        {genreSelected === 0 && movies.results?.map((movie: any) => (
          <div key={movie.id} onClick={() => setHoverCard(movie.backdrop_path, movie.title, movie.overview)} className="film">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
        {movies.results?.filter((movie: any) => movie.genre_ids.includes(genreSelected)).map((movie: any) => (
          <div key={movie.id} onClick={() => setHoverCard(movie.backdrop_path, movie.title, movie.overview)} className="film">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </>
  )}
