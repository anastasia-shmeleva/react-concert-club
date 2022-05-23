import headerlogo from "../images/headerlogo.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="container-xl header">
      <nav className="navbar navbar-expand-sm d-flex justify-content-between">
        <NavLink className="navbar-brand" to="/">
          <img 
            src={headerlogo}
            alt="Concert Club"
          />
        </NavLink>
        <div id="navbarMain">
          <ul className="navbar-nav navbar-btns mr-auto">
            <li className="nav-item">
              <button type="button" className="btn btn-light btn-left">Версия для слабовидящих</button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-light btn-right">Мой профиль</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}