import React, {Component} from 'react';
import './component.scss';

export default class FooterComponent extends Component {
    render() {
        return(<div className="footer bg-dark footer-font-style text-muted footer-position fixed-bottom">
            <p>This pretty footer</p>
        </div>);
    }
}