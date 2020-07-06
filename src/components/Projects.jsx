import React, { Component} from 'react'
import PropTypes from 'prop-types'
import './css/projects.css'
import uberlytics from './res/uberlytics.gif'
import axia from './res/axia.jpeg'
import shortener from './res/shortener.png'
import customerltv from './res/customerltv.png'
import piece from './res/piece.png'
import livin from './res/livin.png'
import hospishare from './res/HOSPISHARE_LOGO.png'
import plasticbottle from './res/plasticbottle.png'

class ProjectCard extends Component { 

    constructor (props) {
        super()
    }

    render () {
        return (
            <div className='projectCard'>
                <div className='displayImage'>
                    <img className='projectCardImage' src={this.props.projectImage} alt="hello"/>
                </div>
                <div className='projectText'>
                    <p className='projectCardName'>{this.props.projectName}</p>
                    <p className='projectCardDescription'>{this.props.projectDescription}</p>
                </div>
            </div>
        )
    }
} 

class Projects extends Component {

    constructor (props) {
        super()
    }

    render () {
        return (
            <div className='projects'>
                <ProjectCard projectName="Axia" projectDescription="A tool for comparable analysis" projectImage={axia}/>
                <ProjectCard projectName="Uberlytics" projectDescription="Understand trends in your uber rides and find other people" projectImage={uberlytics}/>
                <ProjectCard projectName="Shortener" projectDescription="Process lecture videos into slides and transcript" projectImage={shortener}/>
                <ProjectCard projectName="Lifetime Value + Cohort Analysis Tool" projectDescription="E-commerce tool to segment customers and perform analytics" projectImage={customerltv}/>
                <ProjectCard projectName="Roommate Matching Website" projectDescription="Find roommates with similar interests easily" projectImage={livin}/>
                <ProjectCard projectName="Real Estate Fractional Ownership Website" projectDescription="Front End for an app that displays homes and lets you big for shares" projectImage={piece}/>
                <ProjectCard projectName="HospiShare" projectDescription="Ridesharing Application for hospital visits" projectImage={hospishare}/>
                <ProjectCard projectName="The Trash Collective" projectDescription="Take pictures of plastic bottles and get directed to the nearest recycling bin" projectImage={plasticbottle}/>
            </div>
        )

    }
}

export default Projects;