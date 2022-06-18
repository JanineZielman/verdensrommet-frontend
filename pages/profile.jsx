import { useRouter } from 'next/router';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import nookies from 'nookies';
import { fetchAPI } from "../lib/api"
import Layout from '../components/layout'

const Profile = ({user, pages, homepage, seo, users}) => {
  const router = useRouter();
	
  const [username, setUser] = useState(user.username);

  const [error, setError] = useState()
  const [userData, setUserData] = useState({
    full_name: '',
    language: '',
    city: '',
    contact: '',
    website: '',
    money: '',
    kind: '',
  })
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    // storing input name
    localStorage.setItem("name", JSON.stringify(user));
    // alert("you've succesfully logged in, welcome!");
    // router.push('/account');
  }, [user]);
  

  const logout = async () => {
    try {
      await axios.get('/api/logout');
      localStorage.removeItem("name");
      router.push('/');
    } catch (e) {
      console.log(e);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      await axios.put(`https://cms.verdensrommet.network/users/${user.id}`, {
				full_name: userData.full_name || user.full_name,
        language: userData.language || user.language,
        city: userData.city || user.city,
        contact: userData.contact || user.contact,
        website: userData.website || user.website,
        money: userData.money || user.money,
        kind: userData.kind || user.kind,
			})
      setLoading(false);
      router.push('/profile');
      // router.replace('/profile');
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

  console.log(user)

  return (
    <section className='profile' >
      <Layout pages={pages} homepage={homepage} seo={seo}>
        <div className='container'>
          <h1>My profile</h1><br/>
          <form id="list" onSubmit={handleSubmit}>
            <tr className='list-item'>
              <td className='contact'>
                <div className='title'>Contact:</div>
                <div>Name: <input type="full_name" name="full_name" onChange={e => handleChange(e)} placeholder={user.full_name}/></div>
                <div>Language: <input type="language" name="language" onChange={e => handleChange(e)} placeholder={user.language}/></div>
                <div>City: <input type="city" name="city" onChange={e => handleChange(e)} placeholder={user.city}/></div>
                <div>Phone: <input type="contact" name="contact" onChange={e => handleChange(e)} placeholder={user.contact}/></div>
                <div>Website: <input type="website" name="website" onChange={e => handleChange(e)} placeholder={user.website}/></div>
              </td>
              <td className='money' id="money">
                <div className='title'>Exchange for money:</div>
                <textarea cols="40" rows="5" type="money" name="money" onChange={e => handleChange(e)} placeholder={user.money}/>
              </td>
              <td className='kind' id="kind">
                <div className='title'>Exchange in kind:</div>
                <textarea cols="40" rows="5" type="kind" name="kind" onChange={e => handleChange(e)} placeholder={user.kind}/>
              </td>
            </tr>
          </form>
          {loading && "Loading..."}
          <div className='buttons'>
            <button>Update</button>
            <button onClick={logout}>Logout</button>
          </div>
        </div>
      </Layout>
    </section>

  )
}

export const getServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx)
  let user = null;

   const [pagesRes, homepageRes, seoRes, userRes] = await Promise.all([
    fetchAPI("/menus"),
		fetchAPI("/homepage"),
    fetchAPI("/global"),
    fetchAPI("/users"),
  ])

  if (cookies?.jwt) {
    try {
      const { data } = await axios.get('http://85.214.72.113:1337/users/me', {
        headers: {
          Authorization:
            `Bearer ${cookies.jwt}`,
          },
      });
      user = data;
    } catch (e) {
      console.log(e);
    }
  }

  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: '/'
      }
    }
  }

  return {
    props: {
      user: user,
      pages: pagesRes,
			homepage: homepageRes,
      seo: seoRes,
      users: userRes,
    }
  }
}

export default Profile;