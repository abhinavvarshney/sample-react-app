import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const nav = useNavigate();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3 shadow-lg sticky-top top-0">
            <a className="navbar-brand" href="/">Photo Upload Application</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav" style={{
                    marginLeft: 'auto'
                }}>
                    {localStorage.getItem('accessToken') &&
                        <>
                            <li className="nav-item mr-1">
                                <a className="nav-link" href="/movies">
                                    Characters
                                </a>
                            </li>
                            <li className="nav-item active">
                                <button className="btn btn-danger"
                                    onClick={
                                        () => {
                                            localStorage.clear();
                                            nav('/signin');
                                        }
                                    }
                                    href="/">Logout</button>
                            </li>
                        </>}
                </ul>
            </div>
        </nav>
    )
}

export default Header