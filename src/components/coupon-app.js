import React, {Component} from 'react';
import faker from 'faker';

import UserProfile from '../../src/__services__/user-profile';

export default class CouponApp extends Component {
    sentence = faker.lorem.sentences();

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
            {this.sentence}
            {this.sentence}
            {this.sentence}
            {this.sentence}
            {this.sentence}
            {this.sentence}
            {this.sentence}
            {this.sentence}
            {this.sentence}
            {this.sentence}
            {this.sentence}
        </div>);
    }
}
