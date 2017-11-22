import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, browserHistory, HashRouter} from 'react-router-dom';
import promise from 'redux-promise';

import Home from './components/home';
import Blog from './components/blog';
import Post from './components/post';
import About from './components/about';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <HashRouter>
          <Switch>
              <Route path='/blog/:id' component={ Post } />
              <Route path='/blog' component={ Blog } />
              <Route path='/about' component={ About } />
              <Route path='/' component={ Home } />
          </Switch>
      </HashRouter>
  </Provider>
  , document.querySelector('.root'));
