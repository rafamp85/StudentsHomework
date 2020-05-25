import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateStudent from './components/CreateStudent';
import Student from './components/Student';
import ShowStudent from './components/ShowStudent';

// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
        <Provider store={store}>

          <div className="container mt-5">
            <Switch>
              <Route exact path="/" component={CreateStudent} />
              <Route exact path="/student/show" component={ShowStudent} />
              <Route exact path="/student/detail/:id" component={Student} />
            </Switch>
          </div>
        </Provider>
      </Router>
  );
}

export default App;
