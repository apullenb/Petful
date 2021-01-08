import React from 'react'
import { Link } from "react-router-dom";

function About() {
    return (
        <div className='title'>
          <h1>About Petful</h1>
             <p>With our first in first out approach we are hoping to help all dogs and cats find homes. Typically, older
          dogs and cats remain in shelters while all the young "cute" ones find homes. Get on our wait list today, and find your forever friend!
        </p>

      
          <Link to={"/adopt"}>
            <button type="submit">Find Your Pet Now! </button>
          </Link>
       
        </div>
    )
}

export default About
