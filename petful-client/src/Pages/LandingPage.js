import React from 'react'
import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <div>
          <div className="intro">
          <h1>Welcome to Petful</h1>
        </div>
        <div className="title">
          <h2> The Process of Adopting From Us</h2>
          <p className="text">
            Hello there! Are you ready to find your Purfect friend?
          </p>
          <p className="text">
            Pets will be adopted based on a first come, first adopt concept. The
            animal that comes into our shelter first will be the first animal
            ready to go home. Customers are also placed in a queue to wait thier
            turn for the next animal ready for their furever home! Will it be
            you?
          </p>
          <h3>Want More Information About Petful?</h3>
          <Link to={"/about"}>
            <button>Learn More</button>
          </Link>
        </div>  
        </div>
    )
}

export default LandingPage
