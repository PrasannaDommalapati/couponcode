import React, {Component} from 'react';
import faker from 'faker';

import UserProfile from '../../src/__services__/user-profile';

export default class CouponApp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loggedIn: true
        }
    }

    componentDidMount() {

        UserProfile.authStateChanged()
    }

    render() {
        return (<div>
            {faker.lorem.paragraphs()}
        </div>);
    }
}
