import React, { Fragment, useEffect } from 'react';
import spnier from '../layout/spiner';
import Repos from '../repos/Repos';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReposItem from '../repos/ReposItem';

const User = ({ user, loading, getUser, getUserRepos, match, repos }) => {
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    blog,
    bio,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hirable,
  } = user;

  if (loading) return <spnier />;
  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back To Search
      </Link>
      Hirable:{' '}
      {hirable ? (
        <i className="fas fa-check text-susess" />
      ) : (
        <i className="fas fa-check text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt=""
            className="round-img"
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit Guthub Profile{' '}
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>UserName:</strong> {login}
                </Fragment>
              )}
            </li>
          </ul>
          <ul>
            <li>
              {company && (
                <Fragment>
                  <strong>Company:</strong> {company}
                </Fragment>
              )}
            </li>
          </ul>
          <ul>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website :</strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers:{followers}</div>
        <div className="badge badge-success">Following:{following}</div>
        <div className="badge badge-light">Repos:{public_repos}</div>
        <div className="badge badge-dark">Gists:{public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};
User.propTypes = {
  loading: propTypes.bool,
  user: propTypes.object.isRequired,
  repos: propTypes.array.isRequired,
  getUser: propTypes.func.isRequired,
  getUserRepos: propTypes.func.isRequired,
};

export default User;
