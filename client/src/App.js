import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './pages/Login';
import { ProtectedRoutes } from './ProtectedRoutes';
import { Header } from './components/Header';


function App() {
  return (
    <>
      <Header />
      <Router>
          <Switch>
            <Route exact path="/">
              <ProtectedRoutes />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
