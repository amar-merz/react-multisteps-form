import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from  'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class UserDetailsForm extends Component {
    render() {
        const{userInfos,handleChange}=this.props;
        const nextStep=this.props;
        const theme = {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          };
        return (
            <MuiThemeProvider muiTheme={theme}>
                <React.Fragment>
                    <AppBar title="Enter User Details"/>
                    <TextField hintText="Enter Your First Name"
                        floatingLabelFixed="First Name"
                        onChange={handleChange('firstname')}
                        defaultValue={userInfos.firstname}/>
                    <br/>
                     <TextField hintText="Enter Your Last Name"
                        floatingLabelFixed="Last Name"
                        onChange={handleChange('lastname')}
                        defaultValue={userInfos.lastname}/>
                    <br/>
                     <TextField hintText="Enter Your Email"
                        floatingLabelFixed="Email"
                        onChange={handleChange('email')}
                        defaultValue={userInfos.email}/>
                    <br/>
                    <RaisedButton 
                        label="Continue" primary="true"
                        style={styles.button} onClick={nextStep}/>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }

}
const styles={
    button:{
        margin:15
    }
}
export default UserDetailsForm;