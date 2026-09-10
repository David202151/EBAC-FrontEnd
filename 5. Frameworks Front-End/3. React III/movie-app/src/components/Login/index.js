import {React, useState} from 'react'; 

const Login = () => {
    const [form, setForm] = useState({
        userName: '',
        password: ''
    }); 
    const USERNAME = 'admin';
    const PASSWORD = 'admin';
    const handleSubmit = (e) => {
        e.preventDefault();
        if(form.userName === USERNAME && form.password === PASSWORD){
            alert('Login successful');
        }else{
            alert('Login failed');
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
        </section>
    ); 
}; 

export default Login;