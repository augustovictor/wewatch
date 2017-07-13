import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UrlInput from './components/url_input';
import Player from './components/player';

class App extends Component {
    render() {
        return (
            <div className="App">
                <UrlInput />
                <Player />
            </div>
        );
    }
}

export default App;
