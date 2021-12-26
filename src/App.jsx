import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

import './App.css';

export default function App() {
  return (
    <main>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </main>
  );
}
