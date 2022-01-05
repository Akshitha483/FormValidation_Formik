import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    
    <Router>
    <div className="App">
      <Switch >
          
          <Route exact path='/'>
            <Login/>
          </Route>

          <Route exact path='/signUp'>
            <SignUp />
          </Route>
      </Switch>
    </div>
  </Router>
   
  );
}

export default App;
