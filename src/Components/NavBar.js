import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

export const NavBar = () => {
  const auth = useAuth()
  return (
    <div>
      <nav className="primary-nav">
        <NavLink to="/"> Home </NavLink>
        <NavLink to="about"> About </NavLink>
        <NavLink to="products"> Products </NavLink>
        <NavLink to="profile"> Profile </NavLink>
        {
          !auth.user && (<NavLink to="login"> Login </NavLink>
          )}
      </nav>
    </div>
  );
};
