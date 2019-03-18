import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import UserProfile from '../../__services__/user-profile';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    
    let user = UserProfile.authStateChanged();
  
    return (
        <Route {...rest} render={
            (props) => {
                if (!!user) {
                    console.log('user from private route',user)
                    return <Component {...props} />
                }
                else {
                    return <Redirect to={{
                        pathname: '/',
                        state: {
                            from: props.location
                        }
                    }
                } />
            }
        }
    } />);
}