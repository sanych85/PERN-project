import { useContext } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Context } from '..';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/constants';
import {observer} from "mobx-react-lite"
import {useNavigate } from "react-router-dom"
// import Container from 'react-bootstrap';
// import Nav from 'react-bootstrap';
// import NavDropdown from 'react-bootstrap';
const NavBar = observer(() => {
  const navigate = useNavigate()
  const { user } = useContext(Context);
  const logout = ()=> {
    user.setIsAuth(false)
    navigate(LOGIN_ROUTE)
  }
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
                <Button variant={'outline-light'}onClick = {()=>navigate(ADMIN_ROUTE)}>Админ-панель</Button>
                <Button variant={'outline-light'} className= "ml-2"onClick = {logout}>Выйти</Button>
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
