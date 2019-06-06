import React from 'react';

class ContactForm extends React.Component {
  state = {
    age: '',
    firstName: '',
    email: ''
  }

  nameHandler = event => {
    this.setState({firstName: event.target.value});
    console.log(this.state.firstName);
  }
  
  ageHandler = event => {
    this.setState({age: event.target.value});
    console.log(this.age);
  }
  
  emailHandler = event => {
    this.setState({email: event.target.value});
  }
  
  renderEmailInput = () => {
    // switch(this.age){
      // case this.age >= 14:
      if(this.state.age >= 14) {
        return <input type='email' name='email' onChange={() => this.emailHandler} />
      }
    // }
  }

  render() {
    return(
      <div>
        <input 
          type='text' 
          name='firstName' 
          // value={this.state.firstName}
          onChange={this.nameHandler}
         />
        <input 
          type='number' 
          name='age'
          value={this.state.age}
          onChange={this.ageHandler}
        />
        {this.renderEmailInput()}
      </div>
     )
  }
}

export default ContactForm;