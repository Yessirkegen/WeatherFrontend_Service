import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WeatherInfo from './components/Weather/WeatherInfo';
import WeatherMap from './components/Weather/WeatherMap';
import Login from './components/User/Login';
import Register from './components/User/Register';
import Profile from './components/User/Profile';
import SubscriptionList from './components/Subscription/SubscriptionList';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={WeatherInfo} />
    <Route path="/map" component={WeatherMap} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/profile" component={Profile} />
    <Route path="/subscriptions" component={SubscriptionList} />
  </Switch>
);

export default Routes;
