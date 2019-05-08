import { version, Component } from 'inferno';
import { BrowserRouter, Route, Switch, Link } from 'inferno-router';
import Logo from './logo';
import './app.scss';
import Home from './Home';
import Top from './Top';
import Pay from './Pay';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="app">
        <header className="header">
        <nav class="nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/top">Top</Link>
          <Link className="nav-link" to="/pay">Pay</Link>
        </nav>
        </header>
        <div className="content">
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/top" component={Top} />
        <Route path="/pay" component={Pay} />
      </Switch>
        </div>
        <div className="footer">
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
