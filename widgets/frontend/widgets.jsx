import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Weather from './weather';
import Autocomplete from './autocomplete';

const Names = ['Aviva', 'Zia', 'Iola', 'Carmine', 'Aza', 'Snax', 'Doner Kebab'];

class Root extends React.Component {
    constructor(props){
      super(props);
    }

    render(){
      return (
        <div>
          <h1>Welcome to Widgets!</h1>
          <Clock />
          <Weather />
          <Autocomplete names={Names}/>
        </div>
      );
    }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('main'));
});
