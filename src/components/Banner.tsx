import { useMovieStore } from "../store/Movie"
import "../styles/Banner.css"

export const Banner = () => {
  const hoverCard = useMovieStore((state) => state.hoverCard)
  
  console.log(hoverCard);
  
  return <>
    <div className="banner" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${hoverCard.backdrop})`}}>
      <div className="banner-content">
        <h1 className="banner-title">{hoverCard.title}</h1>
        <p className="banner-description">{hoverCard.overview}</p>
      </div>
    </div>
  </>
}