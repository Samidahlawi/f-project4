import React, { Component } from 'react';
import {index, destroy} from '../api';
import {Link} from 'react-router-dom' ;
import { Card, Button , CardGroup} from 'react-bootstrap';
// import { Card } from 'react-bootstrap';
import "./index.css"
class EventIndex extends Component {
    state = { 
        events:[]
    }
componentDidMount(){
    const user = this.props.user;
    index(user)
    .then( (response) => {
        const allevent = response.data.events
        // console.log(allevent)
        this.setState({
            events: allevent
        })
    })
    .catch(err => console.log(err))
}
render() { 
return ( 
    <div className="eventIndex">
<CardGroup >
 {this.state.events.map((event,index)=> (
    <Card style={{ width: '18rem', margin: "10px"}} >
  <Card.Img variant="top" src={event.img} />
  <Card.Body>
    <Card.Title>{event.name}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
      <br/>
      Date: {event.date}
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
    <Link to={`/events/${event._id}`} class="primary">
    <Button variant="secondary" size="lg" block>
        Show
     </Button>
    </Link>
    
  </Card.Body>
</Card>

 ))}
        </CardGroup>
        </div>


);
}
}
export default EventIndex;