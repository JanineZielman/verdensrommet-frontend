import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const RegisterComponent = () => {
  const router = useRouter();
  const [error, setError] = useState()
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    full_name: '',
    contact: '',
    city: '',
    languages: '',
    exchange: '',
    money: '',
    kind: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/register', userData);
      router.replace('/profile');
    } catch (err) {
      console.log(err.response.data);
      setError('! check if all the fields are filled in');
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({...userData, [name]: value });
  }

  return (
    <section className="register-page">
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" onChange={e => handleChange(e)} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="email" onChange={e => handleChange(e)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" onChange={e => handleChange(e)} />
        </label>
        <br />
        <label>
          Name:
          <input type="text" name="full_name" onChange={e => handleChange(e)} />
        </label>
         <br />
        <label>
          Contact:
          <input type="text" name="contact" onChange={e => handleChange(e)} />
        </label>
        <br />
        <label>
          City:
          <input type="text" name="city" onChange={e => handleChange(e)} />
        </label>
        <br />
        <label>
          Languages:
          <input type="text" name="languages" onChange={e => handleChange(e)} />
        </label>
        <br />
        <label>
          Work Exchange (max 500 words): 
          <textarea type="text" name="exchange" onChange={e => handleChange(e)}></textarea>
        </label>
        <br />
        <label>
          skill/knowledge/service you would like to exchange for money  (max 500 words):
          <textarea type="text" name="money" onChange={e => handleChange(e)}></textarea>
        </label>
        <br />
        <label>
          skills/knowledge/services you would like to exchange in kind  (max 500 words): 
          <textarea type="text" name="kind" onChange={e => handleChange(e)}></textarea>
        </label>
        <br />
         <div className="error">{error}</div>
        <button>Register</button>
      </form>
    </section>
    
  )
}

export default RegisterComponent;