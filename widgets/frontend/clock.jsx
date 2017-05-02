import React from 'react';

class Clock extends React.Component {
  constructor(props){
    super(props);

    this.state = {time: new Date()};

    this.tick = this.tick.bind(this);
  }

  tick(){
    const time = new Date();
    this.setState({time});
  }

  // only want assign time (via tick) after it's mounted
  componentDidMount(){
    this.secondsTickID = setInterval(this.tick, 1000);
  }

  // cancel interval call after unmount
  componentWillUnmount(){
    clearInterval(this.secondsTickID);
    this.secondsTickID = 0;
  }


  render(){
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();

    let date = this.state.time.toDateString();

    return (
      <div className='clock-wrapper'>
          <h2>Clock</h2>
          <div>
            <h3>{date}</h3>
            <h3>Time:</h3>
            <p>{hours}:{minutes}:{seconds} PST</p>
          </div>
          <div>
          </div>

      </div>
    );
  }
}

export default Clock;
