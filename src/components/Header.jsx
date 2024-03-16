import { NavLink, Link, useLocation } from "react-router-dom";
import cartIcon from "../assets/images/cart-icon.svg";

export default function Header({ totalItems }) {
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
              background: "black",
              color: "white",
              fontFamily: "Rock",
            }}>
            {totalItems}
          </p>
          <Link to='cart'>
            <button
              style={{
                width: "25px",
                height: "25px",
                backgroundColor: "none",
                outline: "none",
                boxShadow:
                  location.pathname === "/cart"
                    ? "0px 0px 20px 10px #44d144"
                    : "none",
                borderRadius: "50%",
              }}>
              <img
                style={{ backgroundColor: "none" }}
                src={`${cartIcon}`}
              />
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}
