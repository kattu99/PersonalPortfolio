import React, { Component} from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import './css/markdownComponent.css'

class MarkDownComponent extends Component {

    constructor (props) {
        super()
        this.state = {
            markdown: "",
        }
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/kattu99/ReadingList/master/README.md')
            .then(response => response.text()).then(s => this.setState({
                markdown: s
            }));
    }

    render () {
        return (
            <div className="markdownComponent">
                <ReactMarkdown source={this.state.markdown}/>
            </div>
        )
    }
}

export default MarkDownComponent;