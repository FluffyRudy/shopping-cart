import { NavLink, Link } from "react-router-dom";
import cartIcon from "../assets/images/cart-icon.svg";
import { animated } from "@react-spring/web";
import { transitionAnimation } from "../animations/transition";

export default function Header() {
  const animation = transitionAnimation();
  return (
    <animated.div
      className='sticky top-0'
      style={animation}>
      <header
        className='py-3 w-full bg-black uppercase text-center flex items-center justify-around'
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
    </animated.div>
  );
}
