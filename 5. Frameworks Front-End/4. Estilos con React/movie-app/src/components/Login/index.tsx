
/*
JAVASCRIPT
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
*/

/* TYPESCRIPT */
import React, {useState} from 'react'; 
import { useNavigate } from 'react-router-dom';
//import './Login.css'; 

type FormState = {
    userName: string; 
    password: string; 
}; 

const Login = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState<FormState>({
        userName: '',
        password: ''
    }); 
    const [error, setError] = useState<string | null>(null);
    const USERNAME : string = 'admin';
    const PASSWORD : string = 'admin';
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(form.userName === USERNAME && form.password === PASSWORD){
            alert('Login successful');
            navigate('/movies');
        }else{
            setError('Invalid username or password');
        }
    }; 
    const handleInputChange =  (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target; 
        setForm(prev => ({...prev, [name]: value }));
    }
    const inputClass = `text-gray-700 border border-gray-300 rounded px-3 py-2 w-full ${error ? 'border-red-500' : ''}`;
    return(
        <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Login Movie App</h2>
            <form className="bg-white p-6 rounded shadow" onSubmit={handleSubmit}>
                <div className="block mb-4 login__field text-gray-700">
                    <label className="login__label" htmlFor="username">Username:</label>
                    <input
                        id="username" 
                        className={inputClass}
                        type="text"
                        name="userName"
                        value={form.userName}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div className="block mb-4 login__field text-gray-700">
                    <label className="login__label" htmlFor="password">Password:</label>
                    <input
                        id="password"
                        className={inputClass}
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" type="submit">Login</button>
        </form>
        {error && <p className="text-red-500">{error}</p>}
        </section>
    ); 
}; 

export default Login;