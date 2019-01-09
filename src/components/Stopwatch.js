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
  
  handleReset = () => {
    this.setState({elapsedTime: 0});
  }
  
  componentDidMount() {
    this.intervalID = setInterval (() => this.tick(), 100);
  }
  
  componentWillUnmount() {
    clearInterval(this.intervalID);
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
    const seconds =  Math.floor(this.state.elapsedTime/1000)
    
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time"> { seconds }</span>
        <button onClick={this.handleStopWatchClick}>
          { this.state.isRunning ? 'Stop' : 'Start' }
        </button> 
        <button onClick = {this.handleReset} >Reset</button>
      </div>
    )
  }
}

export default Stopwatch;