import React from 'react';

class Autocomplete extends React.Component {
  constructor(props){
    super(props);
    this.state = {inputVal: ''};

    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.matches = this.matches.bind(this);
  }

  handleInput(e){
    this.setState({inputVal: `${e.currentTarget.value}`});
  }

  matches(val) {
    return this.props.names.filter( el => el.toLowerCase().includes(val));
  }

  handleClick(e){
    let name = e.currentTarget.innerHTML;
    this.setState({inputVal: name});
  }

  render(){
    let searchResults = <div></div>;
    // display all names if no search or deletes search
    if (this.state.inputVal === '') {
      searchResults = this.props.names.map( (el, idx) =>
        <li className='name' key={idx} onClick={this.handleClick}>{el}</li>);
    } else {
      // return what matches with input
      searchResults =
       this.matches(this.state.inputVal.toLowerCase()).map( (el, idx) =>
        <li className='name' key={idx} onClick={this.handleClick}>{el}</li>);
    }

    return (
      <div className='wrapper'>
        <div className='section-div'>
          <h2>Autocomplete Search!</h2>
          <input onChange={this.handleInput}
             value={this.state.inputVal} placeholder='Search...'></input>
          <div id='results'>
            {searchResults}
          </div>
        </div>

      </div>
    );
  }
}

export default Autocomplete;
