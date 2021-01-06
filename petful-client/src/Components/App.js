import React from 'react'
import { Switch, Route, Link } from "react-router-dom";
import LandingPage from '../Pages/LandingPage'
import Adopt from '../Pages/Adopt'
import About from '../Pages/About'
import '../index.css'

function App() {


  return (
  <div>
   <header>
        <Link to={"/"}>
          <h1 className="petful">PETFUL</h1>
        </Link>
      </header>

      <Switch>
        <Route exact path={"/"} component={LandingPage} />
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/adopt"} component={Adopt} />
      </Switch>
    
  </div>
  )
}

export default App
