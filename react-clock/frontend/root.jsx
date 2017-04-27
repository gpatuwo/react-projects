import React from 'react';
import ReactDOM from 'react-dom';



class Root extends React.Component {
  constructor (){
    super();

    let date = new Date();
    let meridiem, hour;

    if (date.getHours() > 12) {
      meridiem = 'PM';
      hour = date.getHours() - 12;
    } else {
      meridiem = 'AM';
      hour = date.getHours();
    }
    this.state = {
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
      meridiem: meridiem,
      hour: hour
    };
  }

  incrementSeconds(){

  }



  render() {
    return(
      <div>
        <div>
          {this.state.hour}
        </div>
        <div>
          {this.state.minutes}
        </div>
        <div>
          {this.state.seconds}
        </div>
        <div>
          {this.state.meridiem}
        </div>
      </div>

    );
  }
}

// state = time, incrementing that

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
