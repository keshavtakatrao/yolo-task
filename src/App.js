import './App.css';
import SignUp from './pages/SignUp';
import {HashRouter as Router,Switch,Route}from "react-router-dom"
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Userprofile from './pages/userprofile';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} exact={true} />
        <Route path="/signup" component={SignUp} exact={true} />
        <Route path="/dashboard" component={Dashboard} exact={true} />
        <Route path="/userprofile" component={Userprofile} exact={true} />
      </Switch>
    </Router>
  );
}

export default App;
