import { Link, NavLink } from "react-router-dom";

export function Header() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink> | <NavLink to="/shoes/new">Add Shoe</NavLink> |{" "}
      <NavLink to="/map">View Map</NavLink>
    </nav>
  );
}
