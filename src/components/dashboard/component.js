import React from 'react';

export default class Dashboard extends React.Component {

    constructor(props) {
        console.log('props',props)

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

            let myHeaders = new Headers();
            myHeaders.set('Accept', 'application/json');
            myHeaders.set('Ocp-Apim-Subscription-Key', '6e13eebbefc04526a82528824e350e43');

            myHeaders.set('Access-Control-Allow-Origin', '*');
            myHeaders.set('Access-Control-Allow-Credentials', 'true');
            myHeaders.set('Access-Control-Allow-Methods', 'OPTIONS, GET,POST, PUT');
            myHeaders.set('Access-Control-Request-Headers', 'Origin,Content-Type,Ocp-Apim-Subscription-Key');
         
            let request = new Request('https://proxy.z-ppp-dv-apim01.xpzcloud.com/outputs/qa/api/requests', {
                method: 'POST',
                headers: myHeaders,
                // mode: 'no-cors',
                body: JSON.stringify(body)
            });

           

            fetch(request)
                .then(response => console.warn("reader result", response))
                .catch(console.log);
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