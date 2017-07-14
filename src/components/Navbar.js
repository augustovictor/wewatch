import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Room from './room';

const Navbar = (props) => {
    return(
        <BrowserRouter>
            <div>
                <Link to="/">Room</Link>
                <Switch>
                    <Route path="/" component={ Room } />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default Navbar;