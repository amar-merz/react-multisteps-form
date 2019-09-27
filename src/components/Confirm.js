import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List,ListItem} from  'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';


class Confirm extends Component {
    continue = e=>{
        e.preventDefault();
        //PROCESS FORM
        this.props.nextStep();
    }
    render() {
        const{userInfos}=this.props;
        console.log(this.props)
        const {nextStep,prevStep}=this.props;
        const theme = {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          };
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data"/>
                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText={userInfos.firstName}
                            />
                            <ListItem
                            primaryText="Last Name"
                            secondaryText={userInfos.lastName}
                            />
                            <ListItem
                            primaryText="Email"
                            secondaryText={userInfos.email}
                            />
                            <ListItem
                            primaryText="Occupation"
                            secondaryText={userInfos.occupation}
                            />
                            <ListItem
                            primaryText="City"
                            secondaryText={userInfos.city}
                            />
                            <ListItem
                            primaryText="Bio"
                            secondaryText={userInfos.bio}/>
                    </List>
                    <br/>
                    <RaisedButton 
                        label="Back" primary={false}
                        style={styles.button} onClick={prevStep}/>
                    <RaisedButton 
                        label="Confirm & Continue" primary={true}
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
export default Confirm;