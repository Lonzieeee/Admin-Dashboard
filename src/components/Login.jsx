import React,  {useState} from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // CREDENYIALS
        const validUsername = 'admin';
        const validPassword = 'admin123'

        if(username === validUsername && password === validPassword) {
            navigate('/dashboard');
        } else {
            alert ('Invalid Credentials');
        }
    };
    return (
        <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
<input
type="text"
placeholder="Username"
value={username}
onChange={(e) => setUsername(e.target.value)}
required
/>

<input 
type="password"
placeholder="Password"
value={password}
onChange={(e) => setPassword(e.target.value)}
required />

<button type="submit">Login</button>

            </form>
        </div>
    );
};
export default Login;