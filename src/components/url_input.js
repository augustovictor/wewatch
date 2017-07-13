import React, { Component } from 'react';

export default class UrlInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: ''
        }
    }
    onUrlInputChange(event) {
        const value = event.target.value;
        const result = `https://youtube.com/embed/${value.substr(value.indexOf('=') +1, value.length)}`;
        this.setState({
            url: result
        });
    }

    render() {
        console.log(this.state.url);
        return(
            <div>
                <input type="text" placeholder="Enter the youtube url" onChange={ this.onUrlInputChange.bind(this) } />
                <iframe src={ this.state.url } frameBorder="0" className="embed-responsive-item"></iframe>
            </div>
        );
    }
}