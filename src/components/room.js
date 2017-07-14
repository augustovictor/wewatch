import React, { Component } from 'react';
import SearchInput from './search_input';

class Room extends Component {
    render() {
        return(
            <div>
                <h1>ROOM</h1>
                <SearchInput />
            </div>
        );
    }
}

export default Room;