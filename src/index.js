import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyAl8k2lk_jrTD1SnEFuKqIhIPRtdCZDtAA";

// Create a new component. This component should produce
// some HTML
const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
}

// Take this component's generate HTML and put ii
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));