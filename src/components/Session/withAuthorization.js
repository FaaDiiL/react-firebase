import React, { useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';
import AuthUserContext from './context';

const withAuthorization = condition => Component => {

    const WithAuthorization = (props) => {
        //const authUser = useContext(AuthUserContext);

        useEffect(() => {
            const listener = props.firebase.onAuthUserListener(
                authUser => {
                    if (!condition(authUser)) {
                        props.history.push(ROUTES.SIGN_IN);
                    }
                },
                () => props.history.push(ROUTES.SIGN_IN),
            );
            return () => {
                listener()
            };
        }, []);
        const authUser = useContext(AuthUserContext)
        return (
            
                    condition(authUser) ? <Component {...props} /> : null
        )             
    }
    return withRouter(withFirebase(WithAuthorization))
    
}
export default withAuthorization;
