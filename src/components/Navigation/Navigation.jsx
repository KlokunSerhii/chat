import { NavLink, useLocation } from 'react-router-dom';
import { AiOutlineWechat } from 'react-icons/ai';
import { useAuth } from '../../hooks/auth';
import { useEffect, useState } from 'react';
import imgDefault from '../../img/bot.jpg';
import { socket } from '../../options/socket';

import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import UserMenu from 'components/UserMenu/UserMenu';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const [params, setParams] = useState({
    room: '',
    user: '',
    avatar: imgDefault,
  });
  const { search } = useLocation();

  useEffect(() => {
    const searchParams = Object.fromEntries(
      new URLSearchParams(search)
    );
    setParams(searchParams);
  }, [search]);

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mt-2 mb-2">
            {isLoggedIn ? (
              <NavLink
                to={`/join`}
                onClick={() => socket.emit('leftRoom', { params })}
                style={{ textDecoration: 'none' }}
              >
                Chat
                <AiOutlineWechat />
              </NavLink>
            ) : (
              <NavLink to={`/`} style={{ textDecoration: 'none' }}>
                Home
              </NavLink>
            )}
          </Nav>
          {isLoggedIn && (
            <UserMenu aria-controls="basic-navbar-nav" />
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navigation;
