import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route , Switch } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <Switch>
      <Route path = "/" component = { Home} exact/>
      <Route path = "/About" component = {About} />
      <Route path = "/Login" component = {Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
