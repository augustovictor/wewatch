import React from 'react';

const Player = ({ url }) => {
    return(
        <iframe src={ url } frameBorder="0" className="embed-responsive-item"></iframe>
    );
}

export default Player;