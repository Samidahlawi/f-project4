import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { signUp, signIn } from '../api'
import messages from '../messages'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormLabel} from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Container }from 'react-bootstrap';
import "./signstyle.css"

class SignUp extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignUp = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => alert(messages.signUpSuccess, 'success'))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '', passwordConfirmation: '' })
        alert(messages.signUpFailure, 'danger')
      })
  }

  render () {
    const { email, password, passwordConfirmation } = this.state

    return (
      <Container>
      <Form className='mar-form' onSubmit={this.onSignUp}>
      <FormGroup controlId="formBasicEmail">
        <h3>Sign Up</h3>

        <FormLabel htmlFor="email">Email</FormLabel>
        <FormControl
          required
          name="email"
          value={email}
          type="email"
          onChange={this.handleChange}
        />
        <FormLabel htmlFor="password">Password</FormLabel>
        <FormControl
          required
          name="password"
          value={password}
          type="password"
          onChange={this.handleChange}
        />
        <FormLabel htmlFor="passwordConfirmation">Confirm Password</FormLabel>
        <FormControl
          required
          name="passwordConfirmation"
          value={passwordConfirmation}
          type="password"
          onChange={this.handleChange}
        />
         <Button variant="primary" type="submit">Sign Up</Button>
    </FormGroup>
    </Form>
    </Container>
    )
  }
}

export default withRouter(SignUp)
