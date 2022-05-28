// import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocilaLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(
        auth
      );
      const location = useLocation();
      const from = location.state?.from?.pathname || '/';
      console.log(location);

      if (user) {
          navigate(from, {replace:true})
      }
      if (loading || sending) {
        return <Loading></Loading>
      }
      let errorElement;
    if (error || error2) {
          errorElement = <div>
            <p className='text-danger'>Error: {error?.message}</p>
          </div>
      }
    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
        .then(()=>{})
        console.log(email, password)
    }
    const toSignUp = () => {
        navigate('/signup');
    }
    if (user) {
        navigate('/home')
    }
    const toResetPassword = async() => {
      const email = emailRef.current.value;
      if(email){
        await sendPasswordResetEmail(email)
        toast('email sent')
      }
      else{
        toast('Please enter your email address')
      }
    }
    return (
        <div className="container w-50 mx-auto" id='login'>
            <div className="signin-container">
            <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">   
    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
  </Form.Group>
  <Button variant="primary w-50 mx-auto p-2" type="submit">
    Login
  </Button>
</Form>
            </div>
{errorElement}
<p>New to Himashray Motors? <span className='text-primary signin' onClick={toSignUp}>Please SignUp</span></p>
<p>Forget Password? <span className='text-primary signin' onClick={toResetPassword}>Reset Password</span></p>
<SocialLogin></SocialLogin>
<ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;