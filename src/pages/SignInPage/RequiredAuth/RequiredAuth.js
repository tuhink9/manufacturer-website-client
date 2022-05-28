import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const RequiredAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    console.log(user);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    if(!user) {
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    return children;
};

export default RequiredAuth;