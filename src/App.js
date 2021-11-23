
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import OurDoctor from './components/OutDoctor/OurDoctor';
import Registion from './components/Registion/Registion';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import DetalseServis from './components/DetalseServis/DetalseServis';
import DetalseDoctor from './components/DetalseDoctor/DetalseDoctor';
import './App.css';
import AuthProvider from "./components/context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/doctor" exact component={OurDoctor} />
          <Route path="/registion" exact component={Registion} />
          <Route path="/login" exact component={Login} />
          <PrivateRoute path="/detalseservis/:id" exact>
            <DetalseServis/>
          </PrivateRoute>
          <PrivateRoute path="/detalsedoctor/:id" exact> 
            <DetalseDoctor/>
          </PrivateRoute>
          <Route path="/*" exact component={NotFound} />
        </Switch>
        <Footer/>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
