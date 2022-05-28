import React from 'react';
// import google from '../../../images/icon/google.png';
import facebook from '../../../images/icon/facebook.png';
import github from '../../../images/icon/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error || error2) {
          errorElement = <div>
            <p className='text-danger'>Error: {error?.message} {error2?.message}</p>
          </div>
      }
    if (user || user2) {
          navigate('/')
      }
      if (loading || loading2) {
        return <Loading></Loading>
      }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height:"1px"}} className='bg-primary w-50'></div>
                <p className='m-2'>Or</p>
                <div style={{height:"1px"}} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={()=>signInWithGoogle()} className='btn btn-info w-50 d-block mx-auto my-3'>
                    <img height={20} src="" alt="" />
                    <span className='ps-2'>Google Sign In</span></button>
                <button className='btn btn-info w-50 d-block mx-auto my-3'>
                    <img height={20} src={facebook} alt="" />
                    <span className='ps-2'>Facebook Sign In</span></button>
                <button onClick={()=>signInWithGithub()} className='btn btn-info w-50 d-block mx-auto my-3'>
                    <img height={20} src={github} alt="" />
                   <span className='ps-2'>Github Sign In</span></button>
            </div>
        </div>
    );
};

export default SocialLogin;