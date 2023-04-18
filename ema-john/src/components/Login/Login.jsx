import React, { useContext } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
const Login = () => {
    const {signIn}=useContext(AuthContext);
    const navigate=useNavigate();
    const location =useLocation()
    console.log(location)

    const from=location.state?.from?.pathname || '/';

    const handleLogIn=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);

        signIn(email,password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            e.target.reset();
            navigate(from,{replace:true})
        })
        .catch(error=>{
            console.log(error);
        })
    }
   
    return (
        <div className='form-container'>
            <h3 className='form-title'>Login </h3>
            <form onSubmit={handleLogIn}>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>New to Ema-John? <Link to="/signup">Sign Up</Link></small></p>
        </div>
    );
};

export default Login;