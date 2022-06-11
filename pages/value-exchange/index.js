import React, {useState, useEffect} from 'react';
import Layout from "../../components/layout"
import Hero from "../../components/hero"
import Content from '../../components/content';
import { fetchAPI } from "../../lib/api"

const ValueExchange = ({ page, pages, homepage, seo, users }) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const username = localStorage.getItem("name");
    setUsername(username)

  }, []);

function myFunction() {
  // Declare variables 
  var input, filter, table, tr, td, td2, td3, i, txtValue;
  input = document.getElementById("listSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("list");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        td2 = tr[i].getElementsByTagName("td")[1];
        if (td2) {
          txtValue = td2.textContent || td2.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            td3 = tr[i].getElementsByTagName("td")[2];
            if (td3) {
              txtValue = td3.textContent || td3.innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
              } else {
                tr[i].style.display = "none";
              }
            } 
          }
        } 
      }
    } 
  }
}
  

    
  return (
		<>
			<Hero page={page} homepage={homepage} username={username}/>
			<Layout pages={pages} homepage={homepage} seo={seo}>
        {page.section && username &&
          <Content page={page}/>
        }
        {username &&
          <div className='exchange-list container'>
            <input type="text" id="listSearch" onKeyUp={myFunction} placeholder="Search" title="Search"></input>
            <div className='list-header'>
              <div>Contact</div>
              <div>Exchange for money</div>
              <div>Exchange in kind</div>
            </div>
            <div id="list">
              {users.map((user, i) => {
                return(
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
                )
              })}
            </div>
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
