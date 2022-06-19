import { Link } from "react-router-dom"
import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axios.js';
import { Container,Col,Row,ListGroup } from 'react-bootstrap'

const Courses = () => {

    var [CoursesList, setCoursesList] = useState([]);
    
    useEffect(() => 
    {
        axiosInstance.get('courses')
        .then((response) =>
        {
            setCoursesList(response.data);
        });
    }, []);

    const [chosenSemester, setChosenSemester] = useState(1);
    const [isObligatory, setIsObligatory] = useState(true);
    const [isOptional, setIsOptional] = useState(true);

    const handleObligatory = () =>
    {
        setIsObligatory(!isObligatory);
    }
    const handleOptional = () =>
    {
        setIsOptional(!isOptional);
    }

    return (
        (sessionStorage.getItem('access_token') != null)?
            <Container className="mt-5" id="courses">
                <h1>Subjects</h1>
                    <Row className="mt-5">
                        <Col md="6">
                            <h3>Filter</h3>
                            <br/>
                            <select name="semesters" id="semesters" onChange = {(e) =>setChosenSemester(e.target.value)}>
                                <option value="1">I (winter)</option>
                                <option value="2">II (summer)</option>
                                <option value="3">III (winter)</option>
                                <option value="4">IV (summer)</option>
                                <option value="5">V (winter)</option>
                                <option value="6">VI (summer)</option>
                                <option value="7">VII (winter)</option>
                            </select>
                            <br/><br/><br/>
                            <p>Filter:</p>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" id = "obligatorySubjects" name = "obligatorySubjects" value = {isObligatory} onChange={handleObligatory} defaultChecked></input > compulsory subjects</p>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" id = "optionalSubjects" name = "optionalSubjects" value = {isOptional} onChange={handleOptional} defaultChecked></input> optional subjects</p>
                        </Col>
                        <Col  md="6">
                            <ListGroup className="mx-5">
                                {
                                    isObligatory &&
                                        CoursesList.filter(s => s.semester == chosenSemester).filter(s => s.obligatory).map(s => (
                                                <Link to={`${s.id}`} style={{textDecoration: "None"}} >
                                                    <ListGroup.Item className="mt-2" action variant="primary" >
                                                        <span className='item-link'>{s.course_name}[compulsory]</span>
                                                    </ListGroup.Item>
                                                </Link>
                                        ))
                                }
                                {
                                    isOptional &&
                                        CoursesList.filter(s => s.semester == chosenSemester).filter(s => !s.obligatory).map(s => (
                                            <Link to={`${s.id}`} style={{textDecoration: "None"}} >
                                                <ListGroup.Item className="mt-2" action variant="info" >
                                                    <span className='item-link'>{s.course_name}[optional]</span>
                                                </ListGroup.Item>
                                            </Link>
                                        ))
                                }
                            </ListGroup>
                        </Col>
                    </Row>
            </Container> 
        :
        ""
    )
}

export default Courses