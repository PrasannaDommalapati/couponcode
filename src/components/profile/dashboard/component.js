import React from 'react';

export default class Dashboard extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            loggedIn: true
        };
    }

    render() {
         return(

             <div>
                 Dashboard
             </div>);
    }
}