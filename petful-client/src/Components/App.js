import React from 'react'
import { Switch, Route, Link } from "react-router-dom";
import LandingPage from '../Pages/LandingPage'
import Adopt from '../Pages/Adopt'
import About from '../Pages/About'
import '../index.css'
import Confirm from '../Pages/Confirm';
import Header from './Header';
import {MyContextProvider} from '../Context'

function App() {


  return (
  <div className='app'>
   <header>
          <Header />
      </header>
      <MyContextProvider>
      <Switch>
        <Route exact path={"/"} component={LandingPage} />
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/adopt"} component={Adopt} />
        <Route exact path={"/Confirmation"} component={Confirm} />
      </Switch>
      </MyContextProvider>
  </div>
  )
}

export default App
