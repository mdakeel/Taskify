import image from "../../assets/Images/image"
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {

  return (
  <>
     <nav>
          <div className="left-nav">
            <i class="bx bx-menu"></i>
          </div>
          <div className="right-nav">
            <label for="switch-mode" class="switch-mode"></label>
            <a href="#" className="notification">
              <i class="bx bxs-bell"></i>
              <span className="num">8</span>
            </a>
            <div class="dropdown2">
            <div class="dropbtn2 profile">
              <img src={image.people} />
            </div>
            <div class="dropdown-content2">
              <NavLink to="/profile">Profile</NavLink>
              <NavLink to="/Setting">Setting</NavLink>
              <NavLink to="/logout">Logout</NavLink>
            </div>
          </div>
          </div>
        </nav>
  </>
  );
};
