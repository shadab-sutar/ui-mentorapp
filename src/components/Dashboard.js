import React, { Component } from "react";

import Header from './Header';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header />
                <div
                    style={{
                        marginTop: '80px',
                        width: '100%'
                    }}
                >
                    <h1>Welcome to Mentor Dashboard</h1>
                </div>
            </div>
        )
    }
}

export default Dashboard;