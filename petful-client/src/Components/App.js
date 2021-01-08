import React from 'react'
import { Switch, Route, Link } from "react-router-dom";
import LandingPage from '../Pages/LandingPage'
import Adopt from '../Pages/Adopt'
import About from '../Pages/About'
import '../index.css'
import Confirm from '../Pages/Confirm';
import Header from './Header';

function App() {


  return (
  <div className='app'>
   <header>
        <Link to={"/"}>
          <Header />
        </Link>
      </header>

      <Switch>
        <Route exact path={"/"} component={LandingPage} />
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/adopt"} component={Adopt} />
        <Route exact path={"/Confirmation"} component={Confirm} />
      </Switch>
    
  </div>
  )
}

export default App
