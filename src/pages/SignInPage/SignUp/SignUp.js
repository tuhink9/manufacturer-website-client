import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import './SignUp.css'

const Register = () => {
    const [agree, setAgree] = useState(false);
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating] = useUpdateProfile(auth);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({displayName: name})
        console.log(name,email, password)
        navigate('/home')
    }
    const toLogin = () => {
        navigate('/login')
    }
    if (loading || updating) {
        return <Loading></Loading>
      }
    return (
        <div className='signin-container mx-auto'>
            <div>
            <h1>Please Register!</h1>
            <form onSubmit={handleSubmit} className='form' action="">
                <input ref={nameRef} type="text" placeholder='Your Name' name='name' required/>
                <br />
                <input ref={emailRef} type="text" placeholder='Your Email' name='email' required/>
                <br />
                <input ref={passwordRef} type="password" placeholder='Your Password' name='password' required />
                <br />
                <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? "text-primary ps-2" : "text-danger ps-2"} htmlFor="terms">Accept Genius Car Terms And Conditions</label> */}
                <label className={`ps-2 ${agree ? "text-primary" : "text-danger"}`} htmlFor="terms">Accept Himashray Motors Terms And Conditions</label>
                <br />
                <input
                    disabled={!agree}
                    className='w-50 mx-auto btn btn-primary mt-2'
                    type="submit"
                    value="Register" />
            </form>
            <p>Already Have An Account? <Link className='text-primary pe-auto' to='/login' onClick={toLogin}>Please Login</Link></p>
            </div>
        </div>
    );
};

export default Register;