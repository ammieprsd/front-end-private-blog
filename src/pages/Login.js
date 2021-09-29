import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";


function Login(props) {
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return(
        <>
            <h1>Login</h1>
            <button
                value={!isAuthenticated}
                onClick={() => toggleIsAuthenticated(isAuthenticated)}
            ><Link to="/blogposts">Inloggen</Link>
            </button>
        </>



    );
}

export default Login;