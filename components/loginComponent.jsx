import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const LoginComponent = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    identifier: '',
    password: '',
  });

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/login', { ...userData });
      router.push('/profile');
    } catch (err) {
      console.log(err.response.data);
      setError(err.response.data.message)
      
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({...userData, [name]: value })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="identifier" placeholder="Email..." onChange={e => handleChange(e)} />
        <input type="password" name="password" placeholder="Password..." onChange={e => handleChange(e)} />
        <br />
        <div className='login-buttons'>
          <button className="login-link">Login</button>
          <a className="forgot-pw" href="/forgot-password">I forgot my password</a>
        </div>
        {error && <div className='error'>{error}</div>}
      </form>
    </div>
  )
}

export default LoginComponent;