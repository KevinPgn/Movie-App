import { useEffect } from "react"
import "./App.css"
import { useMovieStore } from "./store/Movie"
import { Sidebar } from "./components/Sidebar"
import { Navbar } from "./components/Navbar"
import { Films } from "./components/Films"
import { Banner } from "./components/Banner"


const App = () => {
   const addMovie = useMovieStore((state) => state.addMovie)

    useEffect(() => {
     fetch("https://api.themoviedb.org/3/discover/movie?api_key=2d68aabe8488a9427b4b22497c51e6b9")
        .then((res) => res.json())
        .then((data) => addMovie(data))
    }, [])   
   
  return <>
  <div className="container-section">
    <Sidebar />
    <div className="main">
      <Navbar />
      <Banner />
      <Films />
    </div>
  </div>
  </>
}

export default App