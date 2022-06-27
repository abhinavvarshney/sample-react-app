import { useState } from 'react';
import { login } from '../../Auth';
import './style.css';
import { useNavigate } from 'react-router-dom';
const Signin = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const obj = {
            email,
            password
        }
        const res = await login(obj);
        console.log(res);
        if(res && res.user && res.accessToken){
            localStorage.setItem('user',JSON.stringify(res.user));
            localStorage.setItem('accessToken',res.accessToken);
            navigate('/');
        }
    }
    return (
        <>
            {/* Section: Design Block */}
            <section
            style={{ backgroundColor: "hsl(0, 0%, 96%)",height:'100vh' }}
            >
                {/* Jumbotron */}
                <div
                    className="py-5 text-center text-lg-start h-100"
                >
                    <div className="container"
                    >
                        <div className="row gx-lg-5 align-items-center">
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <h1 className="my-5 display-3 fw-bold ls-tight">
                                    A Place <br />
                                    <span className="text-primary">For all your needs</span>
                                </h1>
                                <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                                    A place where you can store your memories
                                </p>
                            </div>
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <div className="card shadow">
                                    <div className="card-body py-5 px-md-5">
                                        <form onSubmit={handleSubmit}>
                                            {/* Email input */}
                                            <div className="form-outline mb-4">
                                                <input
                                                    type="email"
                                                    id="form3Example3"
                                                    className="form-control"
                                                    value={email}
                                                    onChange={(e)=>setEmail(e.target.value)}
                                                />
                                                <label className="form-label" htmlFor="form3Example3">
                                                    Email address
                                                </label>
                                            </div>
                                            {/* Password input */}
                                            <div className="form-outline mb-4">
                                                <input
                                                    type="password"
                                                    id="form3Example4"
                                                    className="form-control"
                                                    value={password}
                                                    onChange={(e)=>setPassword(e.target.value)}
                                                />
                                                <label className="form-label" htmlFor="form3Example4">
                                                    Password
                                                </label>
                                            </div>
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-block mb-4"
                                            >
                                                Sign up
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Jumbotron */}
            </section>
            {/* Section: Design Block */}
        </>

    )
}

export default Signin