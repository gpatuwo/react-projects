import React from 'react';
import ReactDOM from 'react-dom';

import Calculator from 'calculator';

document.addEventListener('DOMContentLoaded',
  function (){
    ReactDom.render(<Calculator />, document.getElementById('main'));
  });
