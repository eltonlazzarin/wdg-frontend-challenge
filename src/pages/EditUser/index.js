import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { FaArrowLeft } from 'react-icons/fa';

import { Container, Form } from './styles';

export default class EditUser extends Component {
  state = {
    name: '',
    surname: ''
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmitEdit = async event => {
    event.preventDefault();


    const headers = {
      "Authorization": "Bearer QpwL5tke4Pnpja7X4"
    };

    const id = decodeURIComponent(this.props.match.params.id);
    const name = this.state.name;
    const surname = this.state.surname;

    const newData = {
      headers,
      first_name: name,
      last_name: surname
    }

    await api.put(`/users/${id}?delay=2`, {
      newData
    })
      .then(res => {
        if (res.status === 200) {
          return this.props.history.push('/users')
        }
      })

  }

  render() {
    const { name, surname } = this.state;
    return (
      <Container>
        <Link to='/users'><FaArrowLeft size={24} color="#adadad" /></Link>
        <h1>Editing User</h1>
        <Form>
          <form onSubmit={this.handleSubmitEdit}>
            Name <br /> <input type="text" name="name" value={name} onChange={this.handleInputChange} placeholder="Type a new name" />
            <br />
            Surname <br /> <input type="text" name="surname" value={surname} onChange={this.handleInputChange} placeholder="Type a new surname" />
            <br />
            <button type="submit">Updade</button>
          </form>
        </Form>
      </Container>
    );
  }
}


