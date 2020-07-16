import React, {Component} from 'react';
import './css/navbar.css';
import 'semantic-ui-css/semantic.min.css';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MarkDownComponent from './MarkDownComponent'
import AboutMe from './AboutMe';
import Projects from './Projects';
import { Dropdown, Icon, Menu, Segment } from 'semantic-ui-react';

class NavBar extends Component {

    constructor (props) {
        super()
    }

    render () {
            if (!this.props.displayMobile) {
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
            else 
            {
                return (
                    <Router>
                        <Menu attached='top'>
                            <Dropdown item icon='bars' simple>
                                <Dropdown.Menu>
                                <Dropdown.Item as={Link} to='/aboutme'>About Me</Dropdown.Item>
                                <Dropdown.Item as={Link} to='/projects'>Projects</Dropdown.Item>
                                <Dropdown.Item as={Link} to='/reading'>Reading List</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item>
                                    <Icon name='address book' />
                                    <span className='text'>Social</span>

                                    <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <a href="https://www.github.com/kattu99" style={{color:'#303030'}}>
                                            <Icon name='github' />
                                            <span className='text'>Github</span>
                                        </a>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <a href="https://www.linkedin.com/in/rahul-kataria/" style={{color:'#303030'}}>
                                            <Icon name='linkedin' />
                                            <span className='text'>Linkedin</span>
                                        </a>
                                    </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu>
                        <Switch>
                                <Route path = "/reading">
                                    <MarkDownComponent/>
                                </Route>
                                <Route path = "/aboutme">
                                    <AboutMe displayMobile={true}/>
                                </Route>
                                <Route path="/projects">
                                    <Projects displayMobile={true}/>
                                </Route>
                        </Switch>
                    </Router>
                )
            }
    }

}


export default NavBar; 
NavBar.propTypes = {
    mobile: PropTypes.bool
  }