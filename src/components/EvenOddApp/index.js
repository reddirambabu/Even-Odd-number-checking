// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  increaseNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100)
    this.setState({number: randomNumber})
  }

  render() {
    const {number} = this.state
    const displayText = number % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="main-heading">Count {number}</h1>
          <p className="sub-heading">Count is {displayText}</p>
          <button
            type="button"
            onClick={this.increaseNumber}
            className="button"
          >
            Increment
          </button>
          <p className="paragraph">
            Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
