import React from 'react';
import ReactDOM from 'react-dom';
import CouponApp from './components/coupon-app';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import AppHeader from "./components/header/component";
import FooterComponent from "./components/footer/component";
import LoginComponent from "./components/profile/login/component";
import RegisterComponent from "./components/profile/register/component";
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/favicon.png';

const routing = (
    <Router>
        <div>
            <AppHeader/>
            <Route exact path="/" component={CouponApp}/>
            <Route exact path="/login" component={LoginComponent}/>
            <Route exact path="/register" component={RegisterComponent}/>
            <FooterComponent/>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
