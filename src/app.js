import React from 'react';
import ReactDOM from 'react-dom';
import CouponApp from './components/coupon-app';
import './index.scss';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<CouponApp />, document.getElementById('root'));
serviceWorker.unregister();
