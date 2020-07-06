import React, {Component} from 'react';
import './css/navbar.css';
import { Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MarkDownComponent from './MarkDownComponent'
import AboutMe from './AboutMe';
import Projects from './Projects';

class NavBar extends Component {

    constructor (props) {
        super()
    }

    render () {
        return (
            <Router>
                <div className="wrapper">
                    <div className="navBarVertical">
                        <div className="navBarName">
                            <p>Rahul Kataria</p>
                        </div>
                        <div className="navBarLinks">
                            <Link to="/aboutme" className="link"><p>About Me</p></Link>
                            <Link to="/projects" className="link"><p>Projects</p></Link>
                            <Link to="/reading" className="link"><p>Reading List</p></Link>
                        </div>
                        <div className="navBarSocial">
                                <a href="https://www.github.com/kattu99" style={{color:'#303030'}}><Icon name='github' size='large' className="icon" /></a>
                                <a href="https://www.linkedin.com/in/rahul-kataria/" style={{color:'#303030'}}><Icon name='linkedin' size='large' className="icon"/></a>
                        </div>
                    </div>
                    <div className="content">
                        <Switch>
                            <Route path = "/reading">
                                <MarkDownComponent/>
                            </Route>
                            <Route path = "/aboutme">
                                <AboutMe/>
                            </Route>
                            <Route path="/projects">
                                <Projects/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }

}


export default NavBar; 