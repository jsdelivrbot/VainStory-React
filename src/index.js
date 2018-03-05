import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Player from './containers/player';
import Home from './containers/home';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <MuiThemeProvider>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/player/:region/:userName" component={Player} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>
  , document.querySelector('.root'));
