import React from 'react';

class Autocomplete extends React.Component {
  constructor(props){
    super(props);
    this.state = {inputVal: ''};

    this.handleInput = this.handleInput.bind(this);
    this.matches = this.matches.bind(this);
  }

  handleInput(e){
    this.setState({inputVal: `${e.currentTarget.value}`});
  }

  matches(val) {
    return this.props.names.filter( el => el.toLowerCase().includes(val));
  }

  render(){
    let searchResults = <div></div>;

    if (this.state.inputVal === '') {
      searchResults = this.props.names.map( (el, idx) =>
        <li className='name' key={idx}>{el}</li>);
    } else {
      // return what matches with input
      searchResults = this.matches(this.state.inputVal).map( (el, idx) =>
        <li className='name' key={idx}>{el}</li>);
    }

    return (
      <div className='wrapper'>
        <div className='section-div'>
          <h2>Autocomplete Names!</h2>
          <input onChange={this.handleInput}
             value={this.state.inputVal}></input>
          <div id='results'>
            {searchResults}
          </div>
        </div>

      </div>
    );
  }
}

export default Autocomplete;
