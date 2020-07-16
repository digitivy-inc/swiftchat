import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import TodoApp from './TodoApp';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './index.css';

const todoStore = createStore(TodoApp);

ReactDOM.render(
    <Router>
      <Switch>
        <Route path="/" exact>
          <App />
        </Route>
        <Route path="/todo">
          <Provider store={todoStore}>
            <h2>This is the Todo Component</h2>
          </Provider>
        </Route>
        <Route path="/tictactoe">
          <h2>This is the TicTacToe Component</h2>
        </Route>
      </Switch>
    </Router>,
  document.getElementById('root')
);