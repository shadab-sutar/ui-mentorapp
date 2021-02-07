import React, { Component } from "react";

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class LoginForm extends Component {
    render() {
        return (
            <Grid container spacing={1} style={{ marginTop: '100px', textAlign: 'center' }}>
                <Grid container item xs={12} spacing={1}>
                    <Grid item xs={12}>
                        <h1>Login to Admin Portal</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Username"
                            variant="outlined"
                            style={{ width: '360px' }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Password"
                            variant="outlined"
                            type="password"
                            style={{ width: '360px' }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            style={{
                                width: '360px',
                                height: '50px',
                                backgroundColor: '#00bcd4'
                            }}>
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default LoginForm;