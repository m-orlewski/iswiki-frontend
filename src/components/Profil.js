import logo from "../images/profile.svg";
import { Container,Col,Row,Image } from 'react-bootstrap'

const Profil = () => {
    return (
        (sessionStorage.getItem('access_token') != null)?
            <Container className="mt-5">
                <Row id="profile">
                    <Col md="3" className="py-5 px-5">
                        <Image src={logo} roundedCircle className="border border-danger" width="200px"></Image>
                    </Col>
                    <Col md="9" className="py-5" style={{textAlign: "left"}}>
                        <h1>{sessionStorage.getItem('first_name')} {sessionStorage.getItem('last_name')}</h1><br />
                        <div>
                            <h5>email: {sessionStorage.getItem('email')}</h5>
                        </div>

                    </Col>
                </Row>
            </Container> 
        :
        ""
    )
}

export default Profil;