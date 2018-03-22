import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from 'components/App';
import reducers from 'reducers';

import 'bootstrap/dist/css/bootstrap.css';


const history = createHistory();
const store = createStore(
  reducers,
  applyMiddleware(thunk, routerMiddleware(history)),
);

const Wrapp = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>
);


render(<Wrapp />, document.getElementById('root'));

