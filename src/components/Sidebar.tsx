import "../styles/Sidebar.css"
import genre from "../data/Genre"
import { useMovieStore } from "../store/Movie"
import { useMenuBurgerStore } from "../store/MenuBurger"

export const Sidebar = () => {
  const setGenreSelected = useMovieStore((state) => state.setGenreSelected)
  const genreSelected = useMovieStore((state) => state.genreSelected)
  const popularFilter = useMovieStore((state) => state.popularFilter)
  const setPopularFilter = useMovieStore((state) => state.setPopularFilter)
  const topRatedFilter = useMovieStore((state) => state.topRatedFilter)
  const setTopRatedFilter = useMovieStore((state) => state.setTopRatedFilter)
  const menuBurger = useMenuBurgerStore((state) => state.menuBurger)
  
  const popularFilterFunc = () => {
    setPopularFilter(popularFilter)
  }

  const topRatedFilterFunc = () => {
    setTopRatedFilter(topRatedFilter)
  }

  const handleClick = (id: number) => {
    if (genreSelected === id) {
      setGenreSelected(0)
    } else {
      setGenreSelected(id)
    }
  }

  return <>
    <section className={menuBurger ? "sidebar active":"sidebar"}>
      <div className="logo">FilmEmpire</div>
      <h3>Catégories</h3>
      <ul>
        <li className={popularFilter ? "active" : ""} onClick={popularFilterFunc}>Popular</li>
        <li className={topRatedFilter ? "active" : ""} onClick={topRatedFilterFunc}>Top Rated</li>
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
