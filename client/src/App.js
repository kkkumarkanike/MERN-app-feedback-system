import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import Pnf from "./components/404";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "./store/actions/authActions";
import Surveys from "./components/Surveys";
import NewSurvey from "./components/NewSurvey";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!user) dispatch(getUser());
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />

        {user ? (
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/surveys" exact component={Surveys} />
            <Route path="/surveys/new" exact component={NewSurvey} />
            <Route path="/404" exact component={Pnf} />
            <Redirect to="/404" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />
            <Redirect to="/" />
          </Switch>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
