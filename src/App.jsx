import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './context/Auth';
import PrivateRoute from './components/PrivateRoute';
import Home from './views/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

import './App.css';

export default function App() {
  return (
    <main>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </main>
  );
}
