import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Weather from './weather';
import Autocomplete from './autocomplete';
import Tabs from './tabs';

const Names = ['Aviva', 'Zia', 'Iola', 'Carmine', 'Aza', 'Snax', 'Doner Kebab'];

const TabsContent = [
  {title: 'One', content: 'I am the first'},
  {title: 'Two', content: 'I am the second'},
  {title: 'Three', content: 'I am the third'},
];

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
          <Tabs tabs={TabsContent}/>
        </div>
      );
    }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('main'));
});
