import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Shop } from "./components";
import { FaShoppingCart } from "react-icons/fa";
function App() {
  return (
    <>
      <Router>
        <div className="to__shop">
          <Link to="/shop" className="to__shop__link">
            <FaShoppingCart className="to__shop__icon" />
            <p>Killer's shop</p>
          </Link>
        </div>
        <Switch>
          <Route path="/shop" exact component={Shop} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
