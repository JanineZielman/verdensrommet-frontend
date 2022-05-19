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
    language: '',
    website: '',
    money: '',
    kind: ''
  })


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/register', userData);
      // await strapi.plugins['email'].services.email.send({
      //   to: 'janine.zielman@icloud.com',
      //   from: 'info@verdensrommet.network',
      //   replyTo: 'info@verdensrommet.network',
      //   subject: 'Use strapi email provider successfully',
      //   text: 'Hello world!',
      //   html: 'Hello world!',
      // });
      router.replace('/profile');
    } catch (err) {
      // console.log(err);
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
          *Phone:
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
          *Please list at least 2 skill/knowledge/service* you would like to exchange for money:
          <textarea type="text" name="money" onChange={e => handleChange(e)}></textarea>
        </label>
        <br />
        <label>
          *Please list at least 2 skills/knowledge/services you would like to exchange in-kind**:
          <textarea type="text" name="kind" onChange={e => handleChange(e)}></textarea>
        </label>
        <br />
         <div className="error">{error}</div>
        <button>Register</button>
      </form>
      <p className='small-text'>
        *  Examples of skills (hard or soft), knowledge and services that can be exchanged: video-editing, writing, proofreading, researching, teaching, lending equipment, lending books, driving, caretaking, dumpster diving, food, accounting and taxes, reading buddy, translation, interpretation, explaining philosophical concepts, application writing, stylist, haircut, etc.
      </p>
      <p className='small-text'>
        **What do we mean by “exchange In-kind”: you can trade your skills, knowledge or services other skills, knowledge, services, self-determining exchange of value. 

      </p>
    </section>
    
  )
}

export default RegisterComponent;