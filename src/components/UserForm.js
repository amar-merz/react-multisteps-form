import React, { Component } from 'react';
import PersonalDetailsForm from './PersonalDetailsForm';
import UserDetailsForm from './UserDetailsForm';
import Confirm from './Confirm';
import Success from './Success';
import validator from 'validator';
 

class UserForm extends Component {
    constructor(props){
        super(props);
        this.state={
            step:1,
            data:{
                firstName:'',
                lastName:'',
                email:'',
                bio:'',
                occupation:'',
                city:'',
            },
            errors:{}
            
         
        }
    }
//Proceed next step
validate =(data)=>{
    const errors={};
    const {step}=this.state;//validate data of each step
    switch (step){
        case 1:
            if(!data.firstName) errors.firstName='First name should not be empty';
            if(!data.lastName)  errors.lastName='Last name should not be empty';
            if(!validator.isEmail(data.email)) errors.email = 'invalid email';
            break;
        case 2:  
            if(!data.city) errors.city='City should not be empty';
            if(!data.bio)  errors.bio='Bio should not be empty';
            if(!data.occupation)  errors.occupation='Occupation should not be empty';
            break;
        default:
            break;

    }
     
    return errors;
   
    
}
nextStep=()=>{
    //validate the form
    const errors = this.validate(this.state.data)
    const {step} = this.state;
    //Check if there is no error then go to the next step
    if(Object.keys(errors).length ===0){
       
        this.setState({
            step:step+1,
            })
    }
    //otherwise set this.state.errors and pass it down to child component
    else{
        this.setState({
           errors:errors
        })
        
    }
    
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
    //const{data}=this.state;
    this.setState({
        data:{...this.state.data,[input]:e.target.value}
    })
}
    render() {
        const {step,data,errors} = this.state;
                
        switch (step) {
            case 1:
                return(
                    <React.Fragment>
                        <UserDetailsForm nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            userInfos={data} errors = {errors} />
                    </React.Fragment>
                )
                
                break;
                case 2:
                        return(
                            <React.Fragment>
                                <PersonalDetailsForm nextStep={this.nextStep}
                                    prevStep={this.prevStep}
                                    handleChange={this.handleChange}
                                    userInfos={data}
                                    errors={errors}/>
                            </React.Fragment>
                            
                        )
                        
                        break;
                case 3:
                        return(
                            <React.Fragment>
                                <Confirm nextStep={this.nextStep}
                                    prevStep={this.prevStep}
                                    userInfos={data}
                                    />
                            </React.Fragment>
                            
                        )
                        break;
                case 4:
                        return(
                            <React.Fragment>
                                <Success nextStep={this.nextStep}
                                    handleChange={this.handleChange}
                                    userInfos={data}/>
                            </React.Fragment>
                            
                        )
                        break;
                default:
                break;
        }
       
           
        
    }
}

export default UserForm;