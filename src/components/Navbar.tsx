import "../styles/Navbar.css"
import { CiSettings } from "react-icons/ci";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CiLogin } from "react-icons/ci";

export const Navbar = () => {
  return <>
    <header>
      <nav>
        <div className="left">
          <CiSettings className="settings"/>
        </div>
        <div className="mid">
          <input type="text" placeholder="Search your movies..."/>
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