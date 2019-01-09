import React from 'react';

class Stopwatch extends React.Component {
  state = {
    isRunning: false,
    elapsedTime: 0,
    previousTime: 0,
  }

  handleStopWatchClick = () => {
    this.setState(prevState => ({
      isRunning: !prevState.isRunning
    }));
      
  
    if (!this.state.isRunning) {
      this.setState({previousTime: Date.now()})
    }
  }
  
  componentDidMount() {
    this.intervalID = setInterval (() => this.tick(), 100);
  }
  
  tick = () => {
    if (this.state.isRunning) {
      const timeAdded = Date.now() - this.state.previousTime;
      this.setState(prevState => ({
        elapsedTime: prevState.elapsedTime + timeAdded,
        previousTime: Date.now(),
      }))
    }
  }

  render(){
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">0</span>
        <button onClick={this.handleStopWatchClick}>
          { this.state.isRunning ? 'Stop' : 'Start' }
        </button> 
        <button>Reset</button>
      </div>
    )
  }
}

export default Stopwatch;