import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserItem extends Component {
  render() {
    const { login, avatar_url, html_url } = this.props.user;
    return (
      <div className="card text-center">
        <img
          className="round-img"
          src={avatar_url}
          style={{ width: '60px' }}
          alt=""
        />
        <h3>{login}</h3>
        <div>
          <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
            More
          </Link>
        </div>
      </div>
    );
  }
}

export default UserItem;
