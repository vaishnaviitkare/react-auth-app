import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import { useNavigate } from "react-router-dom";
const MainNavigation = () => {
  const authCtx=useContext(AuthContext);
  const navigate = useNavigate(); 
  const isLoggedIn=authCtx.isLoggedIn;
  const logoutHandler=()=>{
    authCtx.logout();
    console.log(authCtx.token);
    alert("logout successfull");
    navigate("auth");
  }

  return (
    <header className={classes.header}>
      <NavLink to="/" className={classes.logo}>
        React Auth
      </NavLink>

      <nav>
        <ul>
          {!isLoggedIn && 
          (<li>
            <NavLink
              to="/auth"
              className={({ isActive }) =>
                isActive ? classes.active : ""
              }
            >
              Login
            </NavLink>
          </li>)
          }
          {isLoggedIn && (<li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? classes.active : ""
              }
            >
              Profile
            </NavLink>
          </li>)}

          {isLoggedIn && (<li>
            <button onClick={logoutHandler}>Logout</button>
          </li>)}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;