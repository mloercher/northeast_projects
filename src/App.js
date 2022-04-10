import './App.css'
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <NavBar>
          <Switch>
            <Route exact path='/'/>
          </Switch>
        </NavBar>
      </Router>
    </>
  );
}

export default App;
