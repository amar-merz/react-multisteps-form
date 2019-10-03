import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from  'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class UserDetailsForm extends Component {
    render() {
        const{userInfos,handleChange,errors}=this.props;
        console.log(this.props)
        const {nextStep}=this.props;
        const theme = {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          };
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details"/>
                    <TextField  errorText= {errors.firstName} hintText="Enter Your First Name"
                        floatingLabelText="First Name"
                         
                        onChange={handleChange('firstName')}
                        defaultValue={userInfos.firstName}/>
                    <br/>
                     <TextField errorText= {errors.lastName} hintText="Enter Your Last Name"
                        floatingLabelText="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={userInfos.lastName}/>
                    <br/>
                     <TextField hintText="Enter Your Email"
                        errorText= {errors.email}
                        floatingLabelText="Email"
                        onChange={handleChange('email')}
                        defaultValue={userInfos.email}/>
                    <br/>
                    <RaisedButton 
                        label="Continue" primary={true}
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