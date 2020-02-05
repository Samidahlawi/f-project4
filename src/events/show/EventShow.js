import React, {Component} from 'react';
import {show,destroy} from '../api'
import {withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom'
class EventShow extends Component {
    state = {  
        event:""
}
componentDidMount(){
    // const user = this.props.user;
    const eventId = this.props.match.params.id; // get the :id in url
    // console.log(user,eventId)
    show(eventId )
    .then((response)=>{
        const showEvent = response.data.event;
        this.setState({
            event:showEvent
        })
    })
    .catch((error)=> console.log(error))
}
destroy = (id) => {
    destroy(this.props.user,id)
        .then(()=> alert("deleted"))
        .then(()=>{
            //redirect the url 
            this.props.history.push(`/events`)
        })
        .catch(err => console.log(err))
}

    render() { 
        return (
            <div>
            {this.state.event ? 
            <div>
                <h5>Name: {this.state.event.name}</h5> 
                <h5>Place: {this.state.event.place}</h5>
                <h5>Date: {this.state.event.date}</h5>
                <br/>
                <img src={this.state.event.img}/>
                {this.props.user ? 
                <div>
                    {this.props.user.admin ? 
                    <div>
                          <Link to={`/events/${this.state.event._id}/edit`}>Edit</Link> 
                     <button onClick={() => this.destroy(this.state.event._id)}>Delete</button>
                    </div>
                    :
                    ""}
                  
                </div>
                :
                ""}
               
               
            </div>
            :
            ""}
            </div>
          );
    }
}
export default withRouter(EventShow);