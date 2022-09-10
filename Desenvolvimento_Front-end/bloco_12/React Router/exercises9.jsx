import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route exact path="/about" component={ About }/>
          <Route
            exact
            path="/users/:id"
            render={ (props) => <Users {...props} greetingMessage="Good Morning" /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

class Users extends Component {
  render() {
    const {
      greetingMessage = 'Hi There',
      match: { params: { id }
    } } = this.props;

    return (
      <main>
        <h2> Users </h2>
        <p>
        { `${greetingMessage} User ${id}` }, this is my awesome Users component
        </p>
      </main>
    );
  }
}

export {Users, App};
