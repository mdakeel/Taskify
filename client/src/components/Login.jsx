import { NavLink } from "react-router-dom";
import "./Style/StudentCss/Login.css";
import "../App";
import { Navbar } from "./Navbar";

export const Login = () => {
  return (
    <div className="login_body">
      <img src="../../../assets/bgimg.png" alt="" />
      <Navbar />
      <div className="login">
        <div className="login_form">
          <form action="/" method="post" id="form_login">
            <div className="col">
              <input type="email" name="email" placeholder="email" required />
              <input type="password" name="password" placeholder="Password" />
              <input type="submit" name="button" value="Login" />
            </div>
          </form>
        </div>
        <div className="form_bottom_links">
          <div className="create_account">
            <h2>
              <NavLink to={"/register"}>Create Account</NavLink>
            </h2>
          </div>
          <div className="need_help">
            <h2>
              <NavLink to={"/need_help"}>Need Help?</NavLink>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
