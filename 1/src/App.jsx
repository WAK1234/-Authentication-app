import React from 'react'
import './App.css'
import Signup from "./Components/sign/Signup.jsx";
import Signin from "./Components/sign/Signin.jsx";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {


  return (
    <>

        <Router>

            <Switch>
                <Route path='/' component={Signup} />
                <Route path='/signin' component={Signin} />
            </Switch>
        </Router>
    </>
  )
}

export default App
