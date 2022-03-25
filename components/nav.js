import React, {useState, useEffect} from 'react';
import Link from "next/link"
import Modal from 'react-bootstrap/Modal'
import { useRouter } from 'next/router';
import axios from 'axios';
import LoginComponent from './loginComponent';

const Nav = ( {pages}) => {
  const router = useRouter();
  const [username, setUsername] = useState('');

  useEffect(() => {
    const username = localStorage.getItem("name");
    setUsername(username)
  }, []);

  const logout = async () => {
    try {
      await axios.get('/api/logout');
      localStorage.removeItem("name");
      router.push('/');
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  }
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => {
    if (show == false){
      setShow(true);
    } else{
      setShow(false);
    }
  }

  const [menuShow, setMenuShow] = useState(false);

  const handleMenuClose = () => setMenuShow(false);

  const handleMenuShow = () => {
    if (menuShow == false){
      setMenuShow(true);
    } else{
      setMenuShow(false);
    }
  }

  const goToRegister = () => {
    router.push('/register');
  }
  
 
  
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <div onClick={handleMenuShow} className="menu-toggle">
              <a>Menu</a>
            </div>
            <Modal show={menuShow} onHide={handleMenuClose} className="menu-modal">
              {pages.map((menu, i) => {
                return(
                  <Link href={menu.slug}>
                    <a>{menu.title}</a>
                  </Link>
                )
              })}
            </Modal>
          </li>
          <li>
            <Link href="/">
              <a>Search</a>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            {username == undefined ? 
              <>
                <div onClick={handleShow} className="login-button">
                  <a>Log in</a>
                </div>
                <Modal show={show} onHide={handleClose} className="login">
                  <LoginComponent />
                  <div className="register">
                    <a>Not a member yet?</a>
                    <button onClick={goToRegister}>Start here</button>
                  </div>
                </Modal>
              </>
            : 
              <div onClick={logout} className="login-button">
                <a>Log out</a>
              </div>
            }
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
