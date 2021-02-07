import React, { Component } from "react";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from "../resources/logo.png";

class Header extends Component {
    render() {
        return (
            <AppBar style={{ backgroundColor: '#f7f7f7' }}>
                <Toolbar>
                    <img src={logo} width="200px" height="60px" alt="logo" />
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header;