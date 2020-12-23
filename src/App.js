import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Shop, Home } from "./components";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/shop" exact component={Shop} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
