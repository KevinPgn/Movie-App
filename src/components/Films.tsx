import { useMovieStore } from "../store/Movie"
import "../styles/Film.css"

export const Films = () => {
  const movies = useMovieStore((state) => state.movies as any)
  const genreSelected = useMovieStore((state) => state.genreSelected)
  const setHoverCard = useMovieStore((state) => state.setHoverCard)
  const search = useMovieStore((state) => state.search)

  const popularFilter = useMovieStore((state) => state.popularFilter)
  const topRatedFilter = useMovieStore((state) => state.topRatedFilter)

  // Sort movies by popularity if popularFilter is true
  const sortedMovies = () => {
    if (popularFilter) {
      return [...movies.results]?.sort((a, b) => b.popularity - a.popularity)
    } else if (topRatedFilter) {
      return [...movies.results]?.sort((a, b) => b.vote_average - a.vote_average)
    } else if(popularFilter && topRatedFilter) {
      return [...movies.results]?.sort((a, b) => b.popularity - a.popularity).sort((a, b) => b.vote_average - a.vote_average)
    } else if (search) {
      return [...movies.results]?.filter((movie: any) => movie.title.toLowerCase().includes(search.toLowerCase()))
    } else {
      return movies.results
    }
  }


  return (
    <>
      <div className="film-container">
        {genreSelected === 0 && sortedMovies()?.map((movie: any) => (
          <div key={movie.id} onClick={() => setHoverCard(movie.backdrop_path, movie.title, movie.overview)} className="film">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
        {sortedMovies()?.filter((movie: any) => movie.genre_ids.includes(genreSelected)).map((movie: any) => (
          <div key={movie.id} onClick={() => setHoverCard(movie.backdrop_path, movie.title, movie.overview)} className="film">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </>
  )
}
