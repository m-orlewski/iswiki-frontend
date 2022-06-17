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
        <Container className="mt-5">
            <Row>
                <h1>Lecturers Page</h1>
                <br />
                <p>Lecturers: </p>
            </Row>
            <Row md="6" className="d-flex justify-content-center mt-5">
                <ListGroup className="mx-5">
                    {
                        list.map(l => (
                        <Link to={`${l.id}`} className='courses-link'>
                            <ListGroup.Item style={{backgroundColor:"#f1356d"}} className="mt-2">
                                {l.name}&nbsp;{l.surname}
                            </ListGroup.Item>
                        </Link>
                        ))
                    }
                </ListGroup>
            </Row>
        </Container> 
    )
}

export default Lecturers