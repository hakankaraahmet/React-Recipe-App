import React from 'react'
import {BrowserRouter, Switch,Route} from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import Home from "../pages/home/Home"
import About from "../pages/about/About"
import Details from "../pages/details/Details"

const AppRouter = () => {
    return (
        <div>
            {/* we wrap all components inside BrowserRouter  and put all pages inside switch */}
            {/* we don't put Navbar inside switch because we want it to be seen in every page */}
            <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" exact component={About}/>
                    <Route path="/details" exact component={Details}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter
