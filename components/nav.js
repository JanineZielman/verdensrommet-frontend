import React, { useState } from "react"
import Link from "next/link"
import Modal from 'react-bootstrap/Modal'
import { useRouter } from 'next/router';
import axios from 'axios';
import nookies from 'nookies';
import LoginComponent from './loginComponent';

const Nav = (username) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const router = useRouter();
  const goToRegister = () => {
    router.push('/register');
  }

  // console.log(username)

  // if ( username.username == undefined){
  //   console.log('hello')
  // }
  
  
 
  
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link href="/">
              <a>Menu</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Search</a>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            {username.username == undefined ? 
              <>
                <div onClick={handleShow} className="login-button">
                  <a>Log in</a>
                </div>
                <Modal show={show} onHide={handleClose} className="login">
                  <LoginComponent />
                  <div className="register">
                    Not a member yet?
                    <button onClick={goToRegister}>Start here</button>
                  </div>
                  <button variant="secondary" onClick={handleClose} className="close">
                    x
                  </button>
                </Modal>
              </>
            : 
              <div>{username.username}</div>
            }
          </li>
        </ul>
      </nav>
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx)
  let user = null;

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

  if (user) {
    return {
      redirect: {
        permanent: false,
        destination: '/profile'
      }
    }
  }

  return {
    props: {}
  }
}

export default Nav
