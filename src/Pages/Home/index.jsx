import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [user, setUser] = useState({});
  const accessToken = localStorage.getItem('accessToken');

  const navigate = useNavigate();
  useEffect(() => {
    if (!accessToken) {
      console.log("In this");
      navigate('/signin');
    }
    const userInfo = JSON.parse(localStorage.getItem('user'));
    setUser(userInfo);
  }, [])
  return (
    <div className='container d-flex align-items-center justify-content-center'>
      <div>
        <h1 className='text-center'>Hi {user.name}</h1>
        <p className='text-center'>Welcome back to the application</p>

        <p>
          We are using Marevel API to fetch some comics information
        </p>
      </div>
    </div>
  )
}

export default Home