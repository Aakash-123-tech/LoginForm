import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom' 
import { toast } from 'react-toastify'
const Login = () => {
 const [email,setEmail]=useState('')
 const [password,setPassword]=useState('')
 const [errormsg,setErrormsg]=useState('')
 const navigate=useNavigate();

    const submitFun= async(e)=>{
        e.preventDefault()
        try{
             const res = await axios.post('http://localhost:5000/login', { email, password });
                if(res.data.success){
                toast.success('Login Successfully....');
                navigate('/home');
                }
                 else{
                    setErrormsg("Invalid Username or Password");
                    }
        }
        catch(err){
            console.log(err);
        }  
    };
  return (
    <>
    <div className=' login-container d-flex justify-content-center align-items-center vh-100 bg-light '>
        <div className='login-page border p-5 rounded shadow w-50 '>
        <h2 className='text-center text-primary'>Welcome</h2>
        <form onSubmit={submitFun} >
            <div className='mb-3'>
                <label className='form-label'>Email <span className='text-danger'>*</span></label>
                <input type="email" placeholder='Enter Email' className='form-control ' value={email} onChange={(e)=>setEmail(e.target.value)} required />
                <label className='form-label text-primary'>*Aakash123@gmail.com*</label>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Password <span className='text-danger'>*</span></label>
                <input type="password" placeholder='Enter Password'   className='form-control ' value={password} onChange={(e)=>setPassword(e.target.value)}  required />
                <label className='form-label text-primary'>*Aakash@123*</label>
            </div>
            <button type="submit" className='mt-3 btn btn-primary form-control'>Login</button>
        </form>
        <p className='text-danger text-center mt-3 fs-5'>{errormsg}</p>
    </div>
    </div>
    </>
  )
}

export default Login
