import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeUrl } from '../actions';
import Youtube from 'react-youtube';

class Room extends Component {
    onSearchInputChange(event) {
        const value = event.target.value;
        const videoId = value.substr(value.indexOf('=') +1, value.length);
        //const videoId = value;
        this.props.changeUrl(videoId);
    }

    onPlay() {
        console.log('Video running...');
    }

    onPause() {
        console.log('Video paused.')
    }

    render() {
        return(
            <div>
                <h1>Room</h1>
                <input type="text" placeholder="Enter the youtube url" onChange={ this.onSearchInputChange.bind(this) } />
                <Youtube
                    videoId={ this.props.videoId }
                    onPlay={ this.onPlay }
                    onPause={ this.onPause }
                />
            </div>
        );
    }
}

function mapStateToProps({ videoId }) {
    return { videoId }
}

export default connect(mapStateToProps, { changeUrl })(Room);