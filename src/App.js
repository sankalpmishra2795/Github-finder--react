import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
// import UserItem from './components/users/UserItem.jsx';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import axios from 'axios';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [repos, setRepos] = useState([]);

  // search User
  const searchUser = async (text) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&c3dab3a1314c703e12ad&85296307f891dfd73309d1f51c381f029363c19e`
    );
    console.log(res.data);
    setUsers(res.data.items);
    setLoading(false);
  };

  // GET Single User
  const getUser = async (userName) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${userName}?c3dab3a1314c703e12ad&85296307f891dfd73309d1f51c381f029363c19e`
    );
    console.log(res.data);
    setUser(res.data);
    setLoading(false);
  };
  // GET User Repos
  const getUserRepos = async (userName) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&c3dab3a1314c703e12ad&85296307f891dfd73309d1f51c381f029363c19e`
    );
    setRepos(res.data);
    setLoading(false);
  };
  // clear user
  const clearUser = () => {
    setUsers([]);
    setLoading(false);
  };
  // Set Alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 5000);
  };
  // Render

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <Search
                    searchUser={searchUser}
                    clearUser={clearUser}
                    showClear={users.length > 0 ? true : false}
                    setAlert={showAlert}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/user/:login"
              render={(props) => (
                <User
                  {...props}
                  getUser={getUser}
                  getUserRepos={getUserRepos}
                  repos={repos}
                  user={user}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
