import React, { Component, } from 'react';
// eslint-disable-next-line
import { HashRouter, Route, Switch, BrowserRouter } from 'react-router-dom';
import './scss/style.scss';


import Loader from './Loader/Loader';
import "./App.css";




// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)
// Pages
const Login = React.lazy(() => import('./templates/pages/login/Login'));
const Register = React.lazy(() => import('./templates/pages/register/Register'));
const Page404 = React.lazy(() => import('./templates/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./templates/pages/page500/Page500'));
const SigninCallback = React.lazy(() => import('./templates/pages/SigninCallback'));

class App extends Component {

  render() {
    return (
      <BrowserRouter basename={process.env.REACT_APP_BASE_NAME}>      
        <React.Suspense fallback={<Loader/>}>
          <Switch>
            
            <Route exact path="/signin-callback" name="Callback Page" render={props =>  <SigninCallback {...props} />} />
            
            <Route path="/" name="Home" render={props => <TheLayout {...props} />} />
            <Route path="*"  render={props => <Page500 {...props} />} />
          </Switch>
          {/* <ToastContainer /> */}
        </React.Suspense>       
      </BrowserRouter>
    );
  }
}

export default App;

console.log = console.warn = console.error = () => {}