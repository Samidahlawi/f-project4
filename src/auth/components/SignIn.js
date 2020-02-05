import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { signIn } from '../api'
import messages from '../messages'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormLabel} from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Container }from 'react-bootstrap';
import "./signstyle.css"

class SignIn extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignIn = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signIn(this.state)
      .then(res => setUser(res.data.user))
      .then(() => alert(messages.signInSuccess, 'success'))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '' })
        alert(messages.signInFailure, 'danger')
      })
  }

  render () {
    const { email, password } = this.state

    return (
      <Container>
      <Form className='mar' onSubmit={this.onSignIn}>
      <FormGroup controlId="formBasicEmail">
        <h3>Sign In</h3>
        <FormLabel htmlFor="email">Email</FormLabel>
        <FormControl
          required
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}/>

        <FormLabel htmlFor="password">Password</FormLabel>
        <FormControl
          required
          name="password"
          value={password}
          type="password"
          onChange={this.handleChange}/>
          
        <Button variant="primary" type="submit">Sign In</Button>
        </FormGroup>
        </Form>
      
      </Container>
    )
  }
}

export default withRouter(SignIn)
