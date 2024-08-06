import Home from './pages/home/Home'
import Productslist from './pages/productslist/Productslist'
import Productslistiunit from './pages/productslistiunit/Productslistiunit';
import Basket from './pages/basket/Basket'
import Regist from './pages/regist/Regist'
import Login from './pages/login/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/Productslist'>
            <Productslist />
          </Route>
          <Route path='/Productslistiunit'>
            <Productslistiunit />
          </Route>
          <Route path='/Basket'>
            <Basket />
          </Route>
          <Route path='/Regist'>
            <Regist />
          </Route>
          <Route path='/Login'>
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
