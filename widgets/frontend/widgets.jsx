import React from 'react';
import ReactDOM from 'react-dom';



class Root extends React.Component {
    constructor(props){
      super(props);
    }

    render(){
      return (
        <div>
          <h1>hi there! welcome to root</h1>

        </div>
      );
    }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('main'));
});
