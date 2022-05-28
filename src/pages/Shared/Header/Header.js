import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)
    return (
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to='/home'>Himashray Motors</Navbar.Brand>
            <Navbar.Brand as={Link} to='/'>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            { user &&
              <Nav.Link as={Link} to='/dashboard'>Dashboard</Nav.Link>
            }
            { user &&
              <Nav.Link as={Link} to='/addreview'>Add Reviews</Nav.Link>
            }
                <Nav.Link as={Link} to='/myportfolio'>My Portfolio</Nav.Link>
                <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
            { user &&
              <Nav.Link>{user?.displayName}</Nav.Link>
            }
            { user ?
                <Nav.Link as={Link} to=''><p onClick={()=>signOut(auth)}>Sign Out</p></Nav.Link>
                :
                <Nav.Link as={Link} to='/login'>Login</Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;