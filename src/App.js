import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Profile from './Components/Profile/Profile';


function App() {
  return (
    <>
    <Router>
    <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/error">
            <NotFound />
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
