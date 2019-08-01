const React = require('react');
const { render } = require('react-dom');

// router
const Route = require('react-router-dom').Route;
const BrowserRouter = require('react-router-dom').BrowserRouter;
const hashHistory = require('react-router-dom').hashHistory;

// redux
const { createStore } = require('redux');
const { Provider } = require('react-redux');
const votes = require('./reducers');

let store = createStore(votes);

/* Import Components */
const HelloWorld = require('./components/HelloWorld');
const About = require('./components/About');
const Table = require('./components/Table');

render((
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={HelloWorld}/>
        <Route path="/about" component={About}/>
        <Route path="/table" component={Table}/>
      </div>
    </BrowserRouter>
  </Provider>), document.getElementById('main'));