import "../styles/Navbar.css"
import { CiSettings } from "react-icons/ci";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CiLogin } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { useMenuBurgerStore } from "../store/MenuBurger";
import { useState } from "react";
import { useMovieStore } from "../store/Movie";

export const Navbar = () => {

  const menuBurger = useMenuBurgerStore((state) => state.menuBurger)
  const setMenuBurger = useMenuBurgerStore((state) => state.setMenuBurger)
  const setSearch = useMovieStore((state) => state.setSearch)
  const [value, setValue] = useState('')

  const handleChange = (e: any) => {
    setValue(e.target.value)
    setSearch(e.target.value)
  }

  return <>
    <header>
      <nav>
        <div className="left">
          <CiSettings className="settings"/>
          <CiMenuBurger className="burger" onClick={() => setMenuBurger(!menuBurger)}/>
        </div>
        <div className="mid">
          <input type="text" placeholder="Search your movies..." value={value} onChange={handleChange}/>
          <FaMagnifyingGlass className="search"/>
        </div>
        <div className="right">
          <CiLogin className="login"/>
          <span>Login</span>
        </div>
      </nav>
    </header>
  </>
}