import React from 'react'
import { Link } from "react-router-dom";
function Nav() {
    return (
        <div>
            <section className="nav" >
          <nav role="navigation" >
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Adopt">Adopt</Link>
          </nav>
        </section>
        </div>
    )
}

export default Nav
