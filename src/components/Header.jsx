import { NavLink, Link } from "react-router-dom";
import cartIcon from "../assets/images/cart-icon.svg";

export default function Header() {
  return (
    <header
      className='py-3 uppercase text-center flex items-center justify-between'
      style={{ minHeight: "max-content" }}>
      <div>
        <Link
          to='home'
          className='ml-2 font-extrabold  text-green-400'
          style={{ fontSize: "max(2em, 2vmax)" }}>
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
              to='about'>
              About
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
      <div className='cart mr-2 relative'>
        <button
          style={{
            backgroundImage: `url(${cartIcon})`,
            width: "30px",
            height: "30px",
          }}></button>
      </div>
    </header>
  );
}
