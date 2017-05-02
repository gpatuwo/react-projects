import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      result: 0,
      num1: '',
      num2: ''
    };

    this.setNum1 = this.setNum1.bind(this);
  }

  //retreives value from input field
  setNum1(e) {
    if (e === '') {
      this.state.num1 = '';
    } else {
      this.state.num1 = Number(e);
    }
  }

  render(){
    return (
      <div>
        <input onChange(setNum1(e)) value={this.state.num1}></input>></input>
        <h1>{this.state.result}</h1>
      </div>
    );
  }
}

export default Calculator;
