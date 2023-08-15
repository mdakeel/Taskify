import { NavLink } from "react-router-dom";
import "../App";
import "./Style/StudentCss/Login.css";
import { Navbar } from "./Navbar";

export const Register = () => {
  return (
    <>
      <div className="login_body">
        <img src="../../../assets/bgimg.png" alt="" />
        <Navbar />
        <div className="register">
          <div className="register_form">
            <div className="col">
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
              />
              <input type="email" name="email" placeholder="Email" required />
              <input type="password" name="password" placeholder="Password" />
              <input type="submit" name="button" value="Register" />
            </div>
          </div>
          <div className="form_register_bottom_links">
            <div className="create_account">
              <h2>
                <NavLink to={"/"}> Login</NavLink>
              </h2>
            </div>
            <div className="need_help">
              <h2>
                <NavLink to={"/need_help"}> Need help?</NavLink>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
