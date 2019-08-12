import React from 'react';
import fetch from 'isomorphic-fetch';

export default class Dashboard extends React.Component {

    constructor(props) {
        console.log('props', props)

        super(props);
        this.state = {
            loggedIn: true
        };
    }

    handleChange = (e) => {

        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsText(files[0]);

        reader.onload = () => {
            let base64Data = new Buffer.from(reader.result).toString('base64');
            let body = {
                "requesterId": 'i am uploading',
                "data": base64Data
            };

            let request = new Request('https://proxy.z-ppp-dv-apim01.xpzcloud.com/outputs/dv/api/requests', {
                method: 'POST',
                headers: {
                    'Ocp-Apim-Subscription-Key': 'dbvkjdhfbjndfbkdjnf',
                    'Content-Type': 'application/json',
                    'Ocp-Apim-Trace': 'true'
                },
                // mode: 'no-cors',
                body: JSON.stringify(body)
            });

            fetch(request);
        };
    };

    handleClick = () => {
        this.props.history.push('/login')
    };

    render() {
        return (
            <div>
                <h2>Dashboard</h2>

                <input type="file" name="file" onChange={this.handleChange} accept=".xml" />
            </div>);
    }
}
