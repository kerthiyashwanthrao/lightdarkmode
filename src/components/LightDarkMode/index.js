// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {activated: true}

  changeMode = () => {
    const {activated} = this.state
    this.setState({activated: !activated})
  }

  render() {
    const {activated} = this.state

    return (
      <div className="container">
        {activated ? (
          <div className="Darkcard">
            <h1 className="heading">Click To Change Mode</h1>
            <div className="btncontainer">
              <button
                type="button"
                className="Darkbutton"
                onClick={this.changeMode}
              >
                Light Mode
              </button>
            </div>
          </div>
        ) : (
          <div className="Whitecard">
            <h1 className="heading">Click To Change Mode</h1>
            <div className="btncontainer">
              <button
                type="button"
                className="Whitebutton"
                onClick={this.changeMode}
              >
                Dark Mode
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default LightDarkMode
