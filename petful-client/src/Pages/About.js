import React from 'react'
import { Link } from "react-router-dom";

function About() {
    return (
        <div>
             <p>
           With our first in first out approach we are hoping to end the stimga of older
          dogs remaining in shelters while all the young "cute" ones find homes. 
        </p>

      
          <Link to={"/adopt"}>
            <button type="submit">Find a Pet </button>
          </Link>
       
        </div>
    )
}

export default About
