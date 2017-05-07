import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Weather from './weather';

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
        </div>
      );
    }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('main'));
});
