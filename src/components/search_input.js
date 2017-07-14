import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeUrl } from '../actions';
import Youtube from 'react-youtube';

class SearchInput extends Component {
    onSearchInputChange(event) {
        const value = event.target.value;
        const videoId = value.substr(value.indexOf('=') +1, value.length);
        //const videoId = value;
        this.props.changeUrl(videoId);
    }

    render() {
        return(
            <div>
                <input type="text" placeholder="Enter the youtube url" onChange={ this.onSearchInputChange.bind(this) } />
                <Youtube
                    videoId={ this.props.videoId }
                />
            </div>
        );
    }
}

function mapStateToProps({ videoId }) {
    return { videoId }
}

export default connect(mapStateToProps, { changeUrl })(SearchInput);