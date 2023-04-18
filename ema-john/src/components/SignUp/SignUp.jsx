import React, { useContext, useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {
    const[error,setError]=useState('')
    const {createUser}=useContext(AuthContext);
    const handleSignUp=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        const confirm=e.target.confirm.value;
        console.log(email,password,confirm);
        setError('')
        if(password!==confirm){
            setError("Your password is incorrect")
            return
        }
        else if(password.length<6){
            setError("Password should be 6 characters or longer")
            return
        }
        createUser(email,password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser)
        })
        .catch(error=>{
            console.log(error)
            setError(error.message)
        })
    }
    return (
        <div className='form-container'>
        <h3 className='form-title'>SignUp </h3>
        <form onSubmit={handleSignUp}>
            <div className="form-control">
                <label htmlFor="">Email</label>
                <input type="email" name="email" id="" required />
            </div>
            <div className="form-control">
                <label htmlFor="">Password</label>
                <input type="password" name="password" id="" required />
            </div>
            <div className="form-control">
                <label htmlFor="">Confirm Password</label>
                <input type="password" name="confirm" id="" required />
            </div>
            <input className='btn-submit' type="submit" value="Sign Up" />
        </form>
        <p><small>Already have an account? <Link to="/login">Login</Link></small></p>
        <p className='text-error'>{error}</p>
    </div>
    );
};

export default SignUp;