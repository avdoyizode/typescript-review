import "./App.css";
import Fetch from "./components/Fetch";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import NewEm from "./components/NewEm";
const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/view" component={Fetch} />
        <Route exact path="/add" component={NewEm} />
      </div>
    </Router>
  );
};

export default App;
