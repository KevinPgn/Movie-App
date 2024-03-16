import "../styles/Sidebar.css"
import genre from "../data/Genre"
import { useMovieStore } from "../store/Movie"

export const Sidebar = () => {
  const setGenreSelected = useMovieStore((state) => state.setGenreSelected)
  const genreSelected = useMovieStore((state) => state.genreSelected)
  
  const handleClick = (id: number) => {
    if (genreSelected === id) {
      setGenreSelected(0)
    } else {
      setGenreSelected(id)
    }
  }

  return <>
    <section className="sidebar">
      <div className="logo">FilmEmpire</div>
      <h3>Catégories</h3>
      <ul>
        <li>Popular</li>
        <li>Top Rated</li>
      </ul>

      <h3>Genres</h3>
      <ul>
        {genre.map((g) => (
          <li key={g.id} 
          className={genreSelected === g.id ? "active" : ""}
          onClick={() => handleClick(g.id)}>{g.name}</li>
        ))}
      </ul>
    </section>
  </>
}
