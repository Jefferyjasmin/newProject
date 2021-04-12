import "./App.css";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./Profile";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Sidebar />
            <Feed />
            <Widgets />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
