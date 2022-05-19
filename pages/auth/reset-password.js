import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const ForgotPassword = () => {
  const router = useRouter();
  const [error, setError] = useState()
  const [userData, setUserData] = useState({
    password: '',
		passwordConfirmation: '',
  })

  const registerPage = useRef();
  const [loading, setLoading] = useState(null);
	const [code, setCode] = useState(null);

	
	useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
		const code = queryParams.get('code');
		setCode(code)
  }, []);
	


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      await axios.post('https://cms.verdensrommet.network/auth/reset-password', {
				code: code,
				password: userData.password,
				passwordConfirmation: userData.passwordConfirmation
			})
      // router.replace('/profile');
      setLoading(false);
      router.replace('/profile');
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
          *New Password:
          <input type="password" name="password" onChange={e => handleChange(e)} />
        </label>
        <br />
				<label>
          *Password Confirmation:
          <input type="password" name="passwordConfirmation" onChange={e => handleChange(e)} />
        </label>
         <div className="error">{error}</div>
        <button>Reset</button>
      </form>
      {loading && "Loading..."}
    </section>
    
  )
}

export default ForgotPassword;