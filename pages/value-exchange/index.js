import React, {useState, useEffect} from 'react';
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Hero from "../../components/hero"
import Content from '../../components/content';
import Collapsible from 'react-collapsible';
import { fetchAPI } from "../../lib/api"

const ValueExchange = ({ page, pages, homepage, seo, users }) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const username = localStorage.getItem("name");
    setUsername(username)
  }, []);


  return (
		<>
			<Hero page={page} homepage={homepage} username={username}/>
			<Layout pages={pages} homepage={homepage} seo={seo}>
        {page.section && username &&
          <Content page={page}/>
        }
        {username &&
          <div className='exchange-list container'>
            <div className='list-header'>
              <div>Contact</div>
              <div>Exchange for money</div>
              <div>Exchange in kind</div>
            </div>
            {users.map((user, i) => {
              return(
                <div className='list-item'>
                  <div className='contact'>
                    {user.full_name && <div>Name: {user.full_name}</div>}
                    {user.language && <div>Language: {user.language}</div>}
                    {user.city && <div>City: {user.city}</div>}
                    {user.contact && <div>Phone: {user.contact}</div>}
                    {user.website && <div>Website: <a target="_blank" href={'https://' + user.website.replace('https://', '')}>{user.website}</a></div>}
                  </div>
                  <div className='money'>
                    {user.money ? user.money : '-'}
                  </div>
                  <div className='kind'>
                    {user.kind ? user.kind : '-'}
                  </div>
                </div>
              )
            })}
          </div>
        }
			</Layout>
		</>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [pageRes, pagesRes, homepageRes, seoRes, userRes] = await Promise.all([
    fetchAPI("/value-exchange"),
    fetchAPI("/menus"),
		fetchAPI("/homepage"),
    fetchAPI("/global"),
    fetchAPI("/users"),
  ])

  return {
    props: {
      page: pageRes,
      pages: pagesRes,
			homepage: homepageRes,
      seo: seoRes,
      users: userRes,
    },
    revalidate: 1,
  }
}

export default ValueExchange
