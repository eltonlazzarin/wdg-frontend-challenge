import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

import { Container, Content, Pagination } from './styles';

export default class Main extends Component {
  state = {
    users: [],
    pageInfo: {},
    page: 1,
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = async (page = 1) => {
    const response = await api.get(`/users?page=${page}?delay=2`);
    const { data, ...pageInfo } = response.data;

    this.setState({ users: data, pageInfo, page });
  };

  handleDeleteUser = async () => {
    const id = decodeURIComponent(this.props.match.params);
    await api.delete(`/users/${id}?delay=2`, {
      id
    }).then(res => {
      let deleteUser = window.confirm('Are you sure you want to delete this user?');
      alert(deleteUser);

      if (deleteUser === true && res.status === 204) {
        return this.props.history.push('/users')
      }
      console.log(res.status)
    })

  }

  prevPage = () => {
    const { page } = this.state;

    const pageNumber = page - 1;

    this.loadUsers(pageNumber);
  };

  nextPage = () => {
    const { page } = this.state;

    const pageNumber = page + 1;

    this.loadUsers(pageNumber);
  };

  render() {
    const { users, page, pageInfo } = this.state;

    return (
      <Container>
        <Content>
          {users.map(user => (
            <div key={user.id}>
              <img src={user.avatar} alt="User Avatar" />
              <h3>{user.first_name} {user.last_name}</h3>
              <p>{user.email}</p>
              <Link to={`/user/${encodeURIComponent(user.id)}`}><FaPencilAlt size={20} color="blue" /></Link>
              <FaTrashAlt size={20} color="red" onClick={this.handleDeleteUser} />
            </div>
          ))}
        </Content>
        <Pagination>
          <div>
            <button disabled={page === 1} onClick={this.prevPage}>
              Previous
            </button>
            <button disabled={page === pageInfo.total_pages} onClick={this.nextPage}>
              Next
            </button>
          </div>
        </Pagination>
      </Container>
    )
  }
}
