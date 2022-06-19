import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom"
import axiosInstance from '../api/axios.js';
import { Container, Row,ListGroup } from 'react-bootstrap'



const Lecturers = () => {
    const [list, setList] = useState([]);
    useEffect(() => 
    {
        axiosInstance.get('lecturers')
        .then((response) =>
        {
            setList(response.data);
        });
    }, []);

    return (
        (sessionStorage.getItem('access_token') != null)?
            <Container className="mt-5">
                <Row>
                    <h1>Lecturers Page</h1>
                    <br />
                    <p>Lecturers: </p>
                </Row>
                <Row className="d-flex justify-content-center mt-5">
                    <ListGroup className="mx-5 w-50">
                        {
                            list.map(l => (
                            <Link to={`${l.id}`} style={{textDecoration: "None"}} >
                                <ListGroup.Item className="mt-2" action variant="danger" >
                                    <span className='item-link'>{l.name}&nbsp;{l.surname}</span>
                                </ListGroup.Item>
                            </Link>
                            ))
                        }
                    </ListGroup>
                </Row>
            </Container> 
        :
            ""
    )
}

export default Lecturers