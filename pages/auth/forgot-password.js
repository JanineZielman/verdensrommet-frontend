import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const ForgotPassword = () => {
  const router = useRouter();
  const [error, setError] = useState()
  const [userData, setUserData] = useState({
    email: '',
  })

  const registerPage = useRef();
  const [loading, setLoading] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      await axios.post('https://cms.verdensrommet.network/auth/forgot-password', {
				email: userData.email,
				url:
					'https://cms.verdensrommet.network/admin/plugins/users-permissions/auth/reset-password',
			})
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
          *Email:
          <input type="text" name="email" onChange={e => handleChange(e)} />
        </label>
        <br />
         <div className="error">{error}</div>
        <button>Send Link</button>
      </form>
      {loading && "Loading..."}
      <div className='confirmation-page'>
        An email has been send to {userData.email}! <br/>
        Check your mailbox to reset your password.
      </div>
    </section>
    
  )
}

export default ForgotPassword;