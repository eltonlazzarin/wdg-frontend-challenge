import React, { Component } from 'react';

import api from '../../services/api';

import { Container, Form } from './styles';

export default class NewClient extends Component {
  state = {
    email: '',
    password: ''
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const email = this.state.email;
    const password = this.state.password;

    api.post('/login?delay=2', {
      email,
      password
    })
      .then(res => {
        const { token } = res.data;

        if (token) {
          localStorage.setItem('token', token);
        }

        if (res.status === 200) {
          return this.props.history.push('/users')
        }
      })
      .catch(error => {
        return alert('Invalid Login!')
      });
  }

  render() {
    const { email, password } = this.state;
    return (
      <Container>
        <h1>Welcome</h1>
        <Form>
          <form onSubmit={this.handleSubmit}>
            <input type="email" name="email" value={email} onChange={this.handleInputChange} placeholder="Email" />
            <br />
            <input type="password" name="password" value={password} onChange={this.handleInputChange} placeholder="Password" />
            <br />
            <button type="submit">Login</button>
          </form>
        </Form>
      </Container>
    );
  }
}

