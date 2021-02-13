import logo from './logo.svg';
import './App.css';
import Header from './Header'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Menu from './Menu'
import Help from './Help'

function App() {
  return (
    <div>
      <Header/> 
      <Router>
        <Route exact path='/login' component={Login} /> 
        <Route exact path='/home' component={Home} />
        <Route exact path='/Menu'component={Menu}/>
        <Route exact path='/help'component={Help}/>
      </Router>
    </div>
  );
}

export default App;