
import React, { Component } from 'react';
import { create } from '../api';
import {withRouter} from 'react-router-dom';
import './create.css'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormLabel} from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Container }from 'react-bootstrap';
class NewEvent extends Component {
state = { 
  eventForm : {
    name: "",
    place: "",
    link:"",
    date:"",
    img:""
  }
}
handleChange = event => {
  // which input was targeted by the user
  const name = event.target.name
  // then the value of the target
  const value = event.target.value
  //after that i put the value in the targeted input by doing the following
  // in this case i will use set state because i am entring and setting new value
  // for the state.....is the copied state i am using and i want it to appear for me
  // as an object so in put it in {} 
  const newForm = {...this.state.eventForm}
  newForm[name] = value;
  this.setState({
      eventForm:newForm
    })
}

handleSubmit = event => {
// to prevent the page from loading
event.preventDefault()
// get the new event from state 
const newEvent = this.state.eventForm
const user = this.props.user
  create(user , newEvent)
  .then(res => {
    this.props.history.push(`/events`)
  })
  .catch(
    error => console.error(error)
  )
}

render() { 
return ( 
  <Container>
  <div className="bg-color">
  <div className="container"> 
  <div className="form">
<Form onSubmit={this.handleSubmit} className="mar">
<FormGroup controlId="formBasicEmail">
<FormLabel> Name </FormLabel>
<FormControl 
name="name" 
value={this.state.eventForm.name} 
onChange={this.handleChange}/>
</FormGroup>


<FormLabel> Place Name: </FormLabel>
<FormControl 
name="place"
value={this.state.eventForm.place} 
onChange={this.handleChange}/>

<FormLabel> Place Link </FormLabel>
<FormControl 
name="link" 
value={this.state.eventForm.link} 
onChange={this.handleChange}/>

<FormLabel>Date:</FormLabel>
<FormControl 
name="date" 
type="date" 
value={this.state.eventForm.date} 
onChange={this.handleChange}/>

<FormLabel>image:</FormLabel>
<FormControl 
name="img" 
value={this.state.eventForm.img} 
onChange={this.handleChange}/>

<Button variant="primary" type="submit"> Submit </Button>
</Form>
</div>
</div>
</div>

</Container>
);
}
}
export default withRouter(NewEvent);