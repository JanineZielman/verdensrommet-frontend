import { useState, useRef } from 'react';
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
    language: '',
    website: '',
    money: '',
    kind: ''
  })

  const registerPage = useRef();
  const [loading, setLoading] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      await axios.post('/api/register', userData);
      // router.replace('/profile');
      setLoading(false);
      registerPage.current.classList.add("confirmation");
    } catch (err) {
      console.log(err.response.data.message);
      setError(err.response.data.message);
      setLoading(false);
    } 
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({...userData, [name]: value });
  }

  return (
    <section className="register-page" ref={registerPage}>
      <form onSubmit={handleSubmit}>
        <label>
          *Username:
          <input type="text" name="username" onChange={e => handleChange(e)} />
        </label>
        <br />
        <label>
          *Email:
          <input type="text" name="email" onChange={e => handleChange(e)} />
        </label>
        <br />
        <label>
          *Password:
          <input type="password" name="password" onChange={e => handleChange(e)} />
        </label>
        <br />
        <label>
          *Name:
          <input type="text" name="full_name" onChange={e => handleChange(e)} />
        </label>
         <br />
        <label>
          Phone:
          <input type="text" name="contact" onChange={e => handleChange(e)} />
        </label>
        <br />
        <label>
          *City:
          <input type="text" name="city" onChange={e => handleChange(e)} />
        </label>
        <br />
        <label>
          *Language:
          <input type="text" name="language" onChange={e => handleChange(e)} />
        </label>
        <br />
        <label>
          Website:
          <input type="text" name="website" onChange={e => handleChange(e)} />
        </label>
        <br />
        <label>
          *Please list at least 2 skills, services or knowledge* you would like to exchange for money (separate each item with a comma to form a list):
          <p className='small-text'>Examples of skills (hard or soft), knowledge and services that can be exchanged: video-editing, writing, proofreading, researching, teaching, lending equipment, lending books, driving, caretaking, dumpster diving, cooking, accounting and taxes, application writing, reading buddy, translation, interpretation, explaining philosophical concepts, stitching, stylist, haircutting etc.</p>
          <textarea type="text" name="money" onChange={e => handleChange(e)}></textarea>
        </label>
        <br />
        <label>
          *Please list at least 2 skills, services, knowledge or anything else you would like to exchange in-kind (separate each item with a comma to form a list):
          <p className='small-text'>Examples of ???exchange In-kind???: you can trade your skills, knowledge or services for other skills, knowledge, services, a self-determined and negotiated exchange value, like translating a text for cutting hair. </p>
          <textarea type="text" name="kind" onChange={e => handleChange(e)}></textarea>
        </label>
        <br />
         <div className="error">{error}</div>
        <button>Register</button>
      </form>
      {loading && "Loading..."}
      <div className='confirmation-page'>
        An email has been send to {userData.email}! <br/>
        Check your mailbox to confirm your registration.
      </div>
    </section>
    
  )
}

export default RegisterComponent;