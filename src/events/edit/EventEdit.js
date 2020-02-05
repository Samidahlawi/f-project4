import React, {Component} from 'react';
import {show,update} from '../api';
import {withRouter} from 'react-router-dom';
import './style.css'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormLabel} from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Container }from 'react-bootstrap';


class EventEdit extends Component {
    state = { 
        eventForm:{
            name:"",
            place:"",
            link:"",
            date:"",
            img:""
        }
     }
     
     componentDidMount(){
        //  const user = this.props.user
         const eventId = this.props.match.params.id
         show(eventId)
         .then((response)=>{
             const event = response.data.event
             this.setState({
                eventForm: event
             })
         })
         .catch(err => console.log(err))
     }


     handleChange = (event)=> {
        const name = event.target.name;
        const value = event.target.value;
        const newForm = {...this.state.eventForm}
        newForm[name] = value;
        this.setState({
            eventForm:newForm
        })
    }


    handleSubmit = (event) =>{
        event.preventDefault();
        // console.log(this.props)
        const user = this.props.user;
        const eventId = this.props.match.params.id;
        const updateEvent = this.state.eventForm;
        update(user,updateEvent,eventId)
        .then(() => this.props.history.push(`/events/${eventId}`))
        .catch((error) => console.log(error))
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
            placeholder="Enter your name"
            value={this.state.eventForm.name} 
            onChange={this.handleChange}/>
            </FormGroup>


            <FormLabel> Place Name: </FormLabel>
            <FormControl 
            name="place"
            placeholder="Enter your place name"
            value={this.state.eventForm.place} 
            onChange={this.handleChange}/>
            
            <FormLabel> Place Link </FormLabel>
            <FormControl 
            name="link" 
            placeholder="Enter place link"
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
export default withRouter(EventEdit);