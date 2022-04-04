import { useContext } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Context } from '..';
import { SHOP_ROUTE } from '../utils/constants';
import {observer} from "mobx-react-lite"
// import Container from 'react-bootstrap';
// import Nav from 'react-bootstrap';
// import NavDropdown from 'react-bootstrap';
const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <NavLink to={SHOP_ROUTE} style={{ color: 'white' }}>
              Купи девайс
            </NavLink>
            {user.isAuth ? (
              <Nav className="ml-auto" style={{ color: 'white' }}>
                <Button variant={'outline-light'}>Админ-панель</Button>
                <Button variant={'outline-light'} className= "ml-2">Выйти</Button>
              </Nav>
            ) : (
              <Nav className="ml-auto" style={{ color: 'white' }}>
                <Button variant={'outline-light'} onClick ={()=>user.setIsAuth(true)}>Авторизация</Button>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
});

export default NavBar;
