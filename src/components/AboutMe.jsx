import React, {Component} from 'react'
import './css/markdownComponent.css'
import PhotoApplying from './Photo-Applying.jpeg'
import aboutMe from './css/aboutme.css'
import PropTypes from 'prop-types';

class AboutMe extends Component {

    constructor (props) {
        super()
    }

    render () {
        if (!this.props.displayMobile) {
            return (
                <div className="aboutMe">
                    <h1>Hi, I'm Rahul</h1>
                    <img src={PhotoApplying} alt="hello"/>
                    <p className='info'>I'm a student at Columbia University studying Computer Science and Applied Mathematics. This site is for keeping track of 
                        projects I've worked on and books I've read. 
                    </p>
                </div>
            )
        }
        else {
            return (
                <div className="aboutMe">
                    <h1>Hi, I'm Rahul</h1>
                    <img src={PhotoApplying} alt="hello"/>
                    <p className='infoMobile'>I'm a student at Columbia University studying Computer Science and Applied Mathematics. This site is for keeping track of 
                        projects I've worked on and books I've read. 
                    </p>
                </div>
            )
        }
    }
}

export default AboutMe; 
AboutMe.propTypes = {
    mobile: PropTypes.bool
}