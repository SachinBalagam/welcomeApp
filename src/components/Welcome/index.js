// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  OnButtonClick = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  renderButton = () => {
    const {isSubscribed} = this.state
    if (isSubscribed === true) {
      return (
        <button type="button" className="button" onClick={this.OnButtonClick}>
          Subscribed
        </button>
      )
    }
    return (
      <button type="button" className="button" onClick={this.OnButtonClick}>
        Subscribe
      </button>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank You! Happy Learning</p>
        {this.renderButton()}
      </div>
    )
  }
}

export default Welcome
