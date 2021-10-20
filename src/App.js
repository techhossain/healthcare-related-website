import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Packages from './pages/Packages/Packages';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import SinglePackagePage from './pages/Packages/SinglePackagePage/SinglePackagePage';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './contexs/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import FeedBack from './pages/FeedBack/FeedBack';

function App() {
  return (
    <div className="container">

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <PrivateRoute path="/packages/:id">
              <SinglePackagePage></SinglePackagePage>
            </PrivateRoute>

            <Route path="/packages">
              <Packages></Packages>
            </Route>

            <PrivateRoute path="/feedback">
              <FeedBack></FeedBack>
            </PrivateRoute>

            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
