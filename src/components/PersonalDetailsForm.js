import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from  'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
class PersonalDetailsForm extends Component {
    render() {
        const{userInfos,handleChange,errors}=this.props;
        console.log(this.props)
        const {nextStep,prevStep}=this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details"/>
                    <TextField errorText={errors.occupation} hintText="Enter Your Occupation"
                        floatingLabelText="Occupation"
                         
                        onChange={handleChange('occupation')}
                        defaultValue={userInfos.occupation}/>
                    <br/>
                     <TextField hintText="Enter Your City"
                        floatingLabelText="City"
                        onChange={handleChange('city')}
                        defaultValue={userInfos.city}
                        errorText={errors.city}/>
                    <br/>
                     <TextField hintText="Enter Your Bio"
                        floatingLabelText="Bio"
                        onChange={handleChange('bio')}
                        defaultValue={userInfos.bio}
                        errorText={errors.bio}/>
                    <br/>
                    <RaisedButton 
                        label="Back" primary={false}
                        style={styles.button} onClick={prevStep}/>
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


export default PersonalDetailsForm;