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

  // only want start ticking after it's mounted
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

    hours = hours > 12 ? hours - 12 : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    let date = this.state.time.toDateString();

    return (
      <div className='wrapper'>
          <h2>Clock</h2>
          <div className='section-div'>
            <h3>{date}</h3>
            <h3>{hours}:{minutes}:{seconds} PST</h3>
          </div>
          <div>
          </div>

      </div>
    );
  }
}

export default Clock;
