import React, { useContext } from 'react';

import PasswordChangeForm from '../PasswordChange';
import { PasswordForgetForm } from '../PasswordForget';
import { AuthUserContext, withAuthorization } from '../Session';

const AccountPage = () => {
    const { email } = useContext(AuthUserContext);

    return (
        <div>
            <h1>Account: {email}</h1>
            <PasswordForgetForm />
            <PasswordChangeForm />
        </div>
    );
}


const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);