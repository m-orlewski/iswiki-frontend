import {Link} from 'react-router-dom'
import logoMoon from '../images/Moon.png';
import logoSun from '../images/Sun.png';
import { useNavigate } from "react-router-dom";
import { faPerson,faHouseUser,faArrowRightToBracket,faRegistered,faMoon,faSun,faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Themes.js";
import axiosInstance from '../api/axios.js';
import { Navbar, NavDropdown, Form, FormControl, Button, Nav,Container } from 'react-bootstrap';

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const NavbarComponent = () => {
    const [logo,setLogo]=useState(logoMoon);
    const [clickTheme, setClickTheme] = useState(false);
    const [theme, setTheme] = useState('light');

    const navigate = useNavigate();
    
    const handleClickTheme = () => {
      setClickTheme(!clickTheme);
      theme === 'light' ? setTheme('dark') : setTheme('light');
      logo === logoMoon ? setLogo(logoSun) : setLogo(logoMoon);
    }
  
    const logout = async () => {
        const response = axiosInstance.post('user/logout/blacklist/', {
          refresh_token: sessionStorage.getItem('refresh_token'),
        });
        console.log(response);
        sessionStorage.removeItem('access_token');
        sessionStorage.removeItem('refresh_token');
        axiosInstance.defaults.headers['Authorization'] = null;
        navigate('/');
    }

    return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
            <StyledApp>
                <Navbar className="mx-5 px-5 py-5 " expand="lg">
                    <Container fluid >
                        <Navbar.Brand href="#"> <img src={logo} width="80" height="100" alt="React Bootstrap logo"/><span className="text-danger text-uppercase fw-bold h2">Is</span>-wiki</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        {
                            (sessionStorage.getItem('access_token') != null)?
                            <>
                                <Nav className="me-auto" style={{ maxHeight: '400px'}} navbarScroll>
                                    <Link to='/' style={{fontSize: '20px', marginLeft: '20px'}} className='nav-link'>
                                        <FontAwesomeIcon icon={faHouseUser}/> Home
                                    </Link>
                                    <NavDropdown title="Services" style={{fontSize: '20px', marginLeft: '20px'}}>
                                        <Link to='/courses' className='nav-link'>
                                            Courses
                                        </Link>
                                        <NavDropdown.Divider />
                                        <Link to='/lecturers' className='nav-link'>
                                            Lecturers
                                        </Link>
                                    </NavDropdown>
                                    <Link to='/profil' style={{fontSize: '20px', marginLeft: '20px'}} className='nav-link'>
                                        <FontAwesomeIcon icon={faPerson}/> Profile
                                    </Link>
                                    <Link to='/' style={{fontSize: '20px', marginLeft: '20px'}} className='nav-link' onClick={logout} >
                                        <FontAwesomeIcon icon={faArrowRightFromBracket}/> Sign Out
                                    </Link>
                                </Nav>
                                <Form className="d-flex">
                                    <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                                    <Button className="btn btn-outline-danger" variant="outline-success">Search</Button>
                                </Form>
                            </>
                            :
                            <Nav className="me-auto" style={{ maxHeight: '400px'}} navbarScroll>
                                <Link to='/' style={{fontSize: '20px', marginLeft: '20px'}} className='nav-link'>
                                    <FontAwesomeIcon icon={faHouseUser}/> Home
                                </Link>
                                <Link to='/login' style={{fontSize: '20px', marginLeft: '20px'}} className='nav-link'>
                                    <FontAwesomeIcon icon={faArrowRightToBracket}/> Sign In
                                </Link>
                                <Link to='/register' style={{fontSize: '20px', marginLeft: '20px'}} className='nav-link'>
                                    <FontAwesomeIcon icon={faRegistered}/> Sign Up
                                </Link>
                            </Nav>
                        }
                        <FontAwesomeIcon icon={clickTheme ? faSun: faMoon} style={{marginLeft: '20px'}}  onClick={handleClickTheme}/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </StyledApp>
      </ThemeProvider>
    );
}
 
export default NavbarComponent;