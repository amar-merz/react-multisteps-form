import React, { Component } from 'react';
import PersonalDetailsForm from './PersonalDetailsForm';
import UserDetailsForm from './UserDetailsForm';
import Confirm from './Confirm';
import Success from './Success';

class UserForm extends Component {
    constructor(props){
        super(props);
        this.state={
            step:1,
            firstName:'',
            lastName:'',
            email:'',
            bio:'',
            occupation:'',
            city:'',
        }
    }
//Proceed next step
nextStep=()=>{
    const {step} = this.state;
    this.setState({
        step:step+1
    })
}
//Proceed previous step
prevStep=()=>{
    const {step} = this.state;
    this.setState({
        step:step-1
    })
}
//hande changes in inputs
handleChange=(input)=>e=>{
    this.setState({
        [input]:e.target.value
    })
}
    render() {
        const {step} = this.state;
        const {firstName,lastName,email,bio,occupation,city} = this.state;
        const userinfos = {firstName,lastName,email,bio,occupation,city};
        switch (step) {
            case 1:
                return(
                    <React.Fragment>
                        <UserDetailsForm nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            userInfos={userinfos}/>
                    </React.Fragment>
                )
                
                break;
                case 2:
                        return(
                            <React.Fragment>
                                <PersonalDetailsForm nextStep={this.nextStep}
                                    prevStep={this.prevStep}
                                    handleChange={this.handleChange}
                                    userInfos={userinfos}/>
                            </React.Fragment>
                            
                        )
                        
                        break;
                case 3:
                        return(
                            <React.Fragment>
                                <Confirm nextStep={this.nextStep}
                                    prevStep={this.prevStep}
                                    handleChange={this.handleChange}
                                    userInfos={userinfos}/>
                            </React.Fragment>
                            
                        )
                        break;
                case 4:
                        return(
                            <React.Fragment>
                                <Success nextStep={this.nextStep}
                                    handleChange={this.handleChange}
                                    userInfos={userinfos}/>
                            </React.Fragment>
                            
                        )
                        break;
                default:
                break;
        }
       
           
        
    }
}

export default UserForm;