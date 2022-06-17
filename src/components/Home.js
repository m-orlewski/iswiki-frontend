import { FaFacebookF,FaTwitter,FaYoutube,FaGooglePlus } from "react-icons/fa";
import { Carousel,Container,Col,Row } from 'react-bootstrap';

const Home = () => {
    
    return (
        <>
            <Carousel className="d-block w-75 h-75 mx-auto my-20">
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/333850/pexels-photo-333850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{color: "white"}}>This is the first slide!</h3>
                        <p style={{color: "white"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1480688/pexels-photo-1480688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{color: "white"}}>Second slide label</h3>
                        <p style={{color: "white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1480687/pexels-photo-1480687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{color: "white"}}>Third slide label</h3>
                        <p style={{color: "white"}}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1480689/pexels-photo-1480689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{color: "white"}}>Fourth slide label</h3>
                        <p style={{color: "white"}}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>   
            <Container className="mt-4">
                <Row className="justify-content-md-center">
                    <Col md="12">
                        <h1 style={{marginTop: '40px'}}>Welcome to</h1>
                        <h1 style={{color: 'blue'}}>IS-wiki for students of AGH</h1>
                        <br/><br/>
                        <h5>On this page you will find a lot of valuable information about the lecturers or about the subjects</h5>
                        <br/>
                        <h5>You also have the opportunity to explore lesson materials</h5>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md="3" sm="6" className="px-3">
                        <div className="fb">
                            <FaFacebookF />
                        </div>
                    </Col>
                    <Col md="3" sm="6" className="px-3">
                        <div className="yt">
                            <FaYoutube/>
                        </div>
                    </Col>
                    <Col md="3" sm="6" className="px-3">
                        <div className="tw">
                            <FaTwitter/>
                        </div>
                    </Col>
                    <Col md="3" sm="6" className="px-3">
                        <div className="gplus">
                            <FaGooglePlus/>
                        </div>
                    </Col>
                </Row>
            </Container>  
        </>
    )
}

export default Home