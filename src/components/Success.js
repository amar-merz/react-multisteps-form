import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
export default function Success () {
        return (
            <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Success"/>
                <h1>Thank you for your submssion</h1>
                <p>You will receive an email for further instruction</p>
            </React.Fragment>
            </MuiThemeProvider>
        );
    }
 

 