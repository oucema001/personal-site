import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import PrivateRoute from './components/Routes/PrivateRoute';
import AdminRoute from './components/Routes/AdminRoute';

// Featured
import Index from './views/Index';
import About from './views/About';
import Projects from './views/Projects';
import Resume from './views/Resume';
import Stats from './views/Stats';
import Contact from './views/Contact';

// Hidden
import Music from './views/Music';
import Photography from './views/Photography';
import AdminPhotography from './views/photography/Admin';
import AdminPhotographyCreate from './views/photography/Create';

import Login from './views/Login';
import Admin from './views/Admin';

import NotFound from './views/NotFound';

// All of our CSS
require('../public/css/main.scss');

if (window.location.href.endsWith('#')) { // For Google Oauth
  window.history.replaceState({}, '', window.location.href.slice(0, -1));
}

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/stats" component={Stats} />
      <Route path="/contact" component={Contact} />
      <Route path="/music" component={Music} />
      <Route path="/login" component={Login} />

      <Route path="/photography" component={Photography} />
      <Route path="/gallery/:id" component={Photography} />

      <PrivateRoute path="/resume" component={Resume} />
      <AdminRoute exact path="/admin" component={Admin} />
      <AdminRoute exact path="/admin/photography" component={AdminPhotography} />
      <AdminRoute exact path="/admin/photography/create" component={AdminPhotographyCreate} />

      <Route component={NotFound} status={404} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
