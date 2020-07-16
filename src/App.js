import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'

class App extends Component {
  constructor() {
    super();
    this.state = {
      width: 0,
      height: 0,
      displayMobile: false,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  async updateWindowDimensions() {
    await this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
      displayMobile: window.innerWidth < 1200 ? true : false,
    });
  }

  render() {
    if (!this.state.displayMobile) {
      return (
        <div className="homePage">
          <NavBar/>
        </div>
      );
    }
    else {
      return (
        <div className="homePage">
          <NavBar displayMobile={true}/>
        </div>
      );
    }
    
  }
}


export default App;
