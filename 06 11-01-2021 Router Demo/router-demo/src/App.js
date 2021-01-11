
import './App.css';
import { Switch, Route, withRouter, Link } from 'react-router-dom';

import CCSyncStorage from './Components/CCSyncStorage';
import CCHome from './Components/CCHome';
import CCAbout from './Components/CCAbout';
import CCStudent from './Components/CCStudent';

function App() {
  let userId = 7;

  return (
    <div className="App">
      <div style={{ margin: 10 }}>
        <Link to="/">Home</Link> &nbsp;&nbsp;&nbsp;  | &nbsp;&nbsp;&nbsp;
        <Link to={`/student/${userId}`}>Student</Link> &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
        <Link to="/about">About</Link> &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
        <Link to="/sync">Sync</Link>
      </div>
      <header className="App-header">
        <Switch>
          <Route exact path="/" >
            <CCHome />
          </Route>
          <Route path="/student/:userId"
            component={CCStudent} />
          <Route path="/about">
            <CCAbout />
          </Route>
          <Route path="/sync" >
            <CCSyncStorage />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default withRouter(App);
