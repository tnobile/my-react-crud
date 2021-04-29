import './App.css';
import { Link, Route, Switch } from 'react-router-dom'
import Home from './Components/Home/Home'
function App() {
  return (
    <div>
      <nav className="topnav">
        <ul id="navigation">
          <li><Link to="/">Spanish</Link></li>
          <li><Link to="/english">English</Link></li>
          <li><Link to="/desarrollador">Desarrollador</Link></li>
          <li><Link to="/all">Rest</Link></li>
        </ul>
      </nav>
      <div>
        <Switch>
          <Route exact path='/'>
            <Home category="Spanish" />
          </Route>
          <Route path="/english">
            <Home category="English" />
          </Route>
          <Route path="/desarrollador">
            <Home category="Desarrollador" />
          </Route>
          <Route path="/all">
            <Home category="" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
