import React, {useState, useEffect} from 'react';
import Link from "next/link"
import Modal from 'react-modal';
import { useRouter } from 'next/router';
import axios from 'axios';
import LoginComponent from './loginComponent';
import Search from './search'

const Nav = ( {pages, homepage}) => {
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

  const modalStyles = {
    overlay: {
      backgroundColor: 'transparent',
    },
  };
  
 
  
  return (
    <div>
      <div className="navbar">
        <ul>
          <li>
            <div onClick={handleMenuShow} className="menu-toggle">
              <a>Menu</a>
            </div>
            <Modal isOpen={menuShow} onHide={handleMenuClose} className="menu-modal" style={modalStyles}>
              <a href={'/'}>
                Home
              </a>
              {pages.map((menu, i) => {
                return(
                  <a href={'/'+menu.slug}>
                    {menu.title}
                  </a>
                )
              })}
            </Modal>
          </li>
          <li className="search">
            <Search params={''}/>
          </li>
          <li className='announcements'>
            <div className="marquee">
              {homepage.announcement &&
                <span>{homepage.announcement} &nbsp; &nbsp; &nbsp; {homepage.announcement}</span>
              }
            </div>
          </li>
        </ul>
        <ul className="desktop-login">
          <li>
            {username == undefined ? 
              <>
                <div onClick={handleShow} className="login-button">
                  <a>Log in</a>
                </div>
                <Modal isOpen={show} onHide={handleClose} className="login" style={modalStyles}>
                  <LoginComponent />
                  <div className="register">
                    <a>Not a member yet?</a>
                    <button onClick={goToRegister}>Register</button>
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
      </div>
    </div>
  )
}

export default Nav
