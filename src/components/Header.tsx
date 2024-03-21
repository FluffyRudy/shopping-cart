import { NavLink, Link, useLocation } from "react-router-dom";
import cartIcon from "../assets/react.svg";

export default function Header({ totalItems }: { totalItems: number }) {
  const location = useLocation();
  return (
    <div className='sticky top-0'>
      <header
        className='relative py-3 w-full bg-black uppercase text-center flex-wrap flex items-center justify-around'
        style={{ minHeight: "max-content" }}>
        <div>
          <Link
            to='home'
            className='ml-2 font-extrabold  text-green-400'
            style={{ fontSize: "min(2em, 3vmax)" }}>
            supercart
          </Link>
        </div>
        <nav style={{ marginLeft: "2vmax", fontWeight: "bolder" }}>
          <ul
            className='flex gap-3 font-mono'
            style={{ fontSize: "2.5vmin" }}>
            <li>
              <NavLink
                className='nav-link'
                to='home'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className='nav-link'
                to='shop'>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                className='nav-link'
                to='contact'>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className='cart mr-2 flex'>
          <p
            style={{
              width: "25px",
              height: "25px",
              borderRadius: "50%",
              background: "#fff",
              color: "#000",
              fontFamily: "monospace",
              lineHeight: "25px",
              fontSize: "1.2em",
              fontWeight: "bolder",
            }}>
            {totalItems}
          </p>
          <Link to='cart'>
            <button
              style={{
                width: "25px",
                height: "25px",
                backgroundColor:
                  location.pathname === "/cart" ? "#319431" : "transparent",
                outline: "none",
                boxShadow:
                  location.pathname === "/cart"
                    ? "0px 0px 20px 10px #44d144"
                    : "none",
                borderRadius: "50%",
              }}>
              <img
                src={`${cartIcon}`}
                style={{ border: "1px solid transparent" }}
              />
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}
