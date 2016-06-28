import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import NavBar from './components/nav_bar'
import Users from './containers/users';
import UserForm from './containers/userForm';
import Posts from './containers/posts';

export default (
  <Route path="/" component={App}>
    <Route path="users" component={Users} / >
    <Route path="users/new" component={UserForm} / >
    <Route path="users/:id" component={UserForm} / >
    <Route path="posts" component={Posts} / >
  </Route>
);