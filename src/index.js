import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAuu3VRFWAJ3VG99DsC2uhxhVQOgmCm6Mo';

//Create  a new component. this component shoud produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

//Render on the DOM
ReactDOM.render(<App />, document.querySelector('.container'))
