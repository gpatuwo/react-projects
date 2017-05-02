import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';

class Root extends React.Component {
    constructor(props){
      super(props);
    }

    render(){
      return (
        <div>
          <h1>Welcome to Widgets!</h1>
          <Clock />
        </div>
      );
    }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('main'));
});
