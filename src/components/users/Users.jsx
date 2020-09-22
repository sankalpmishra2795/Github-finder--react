import React from 'react';
import UserItem from './UserItem';
import Spiner from '../layout/spiner';
import PropTypes from 'prop-types';

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spiner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((users) => (
          <UserItem key={users.id} user={users} />
        ))}
      </div>
    );
  }
};
Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
