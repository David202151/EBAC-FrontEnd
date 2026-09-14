import React, {useState} from 'react'; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        userName: '',
        password: ''
    }); 
    const [error, setError] = useState(null);
    const USERNAME = 'admin';
    const PASSWORD = 'admin';
    const handleSubmit = (e) => {
        e.preventDefault();
        if(form.userName === USERNAME && form.password === PASSWORD){
            alert('Login successful');
            navigate('/movies');
        }else{
            setError('Invalid username or password');
        }
    }; 
    const handleInputChange =  (e) => {
        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }
    return(
        <section>
            <h2>Login Movie App</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        name="userName" 
                        value={form.userName} 
                        onChange={(e) => handleInputChange(e)} 
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={form.password} 
                        onChange={(e) => handleInputChange(e)} 
                    />
                </div>
                <button type="submit">Login</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
        </section>
    ); 
}; 

export default Login;