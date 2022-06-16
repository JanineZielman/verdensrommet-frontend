import { useRouter } from 'next/router';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import nookies from 'nookies';
import { fetchAPI } from "../lib/api"
import Layout from '../components/layout'

const Profile = ({user, pages, homepage, seo, users}) => {
  const router = useRouter();
	
  const [username, setUser] = useState(user.username);

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

  return (
    <section className='profile' >
      <Layout pages={pages} homepage={homepage} seo={seo}>
        <div className='container'>
          <h1>My profile</h1><br/>
          <div id="list">
            <div className='list-header'>
              <div>Contact</div>
              <div>Exchange for money</div>
              <div>Exchange in kind</div>
            </div>
            <tr className='list-item'>
              <td className='contact'>
                {user.full_name && <div>Name: <span>{user.full_name}</span></div>}
                {user.language && <div>Language: <span>{user.language}</span></div>}
                {user.city && <div>City: <span>{user.city}</span></div>}
                {user.contact && <div>Phone: <span>{user.contact}</span></div>}
                {user.website && <div>Website: <a target="_blank" href={'https://' + user.website.replace('https://', '')}>{user.website}</a></div>}
              </td>
              <td className='money' id="money">
                <span>{user.money ? user.money : '-'}</span>
              </td>
              <td className='kind' id="kind">
                {user.kind ? user.kind : '-'}
              </td>
            </tr>
          </div>
          <button onClick={logout}>Logout</button>
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