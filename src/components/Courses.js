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
        <Container className="mt-5" id="courses">
            <h1>Przedmioty</h1>
                <Row className="mt-5">
                    <Col md="6">
                        <h3>Filtr</h3>
                        <br/>
                        <select name="semesters" id="semesters" onChange = {(e) =>setChosenSemester(e.target.value)}>
                            <option value="1">I (zimowy)</option>
                            <option value="2">II (letni)</option>
                            <option value="3">III (zimowy)</option>
                            <option value="4">IV (letni)</option>
                            <option value="5">V (zimowy)</option>
                            <option value="6">VI (letni)</option>
                            <option value="7">VII (zimowy)</option>
                        </select>
                        <br/><br/><br/>
                        <p>Filtruj:</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" id = "obligatorySubjects" name = "obligatorySubjects" value = {isObligatory} onChange={handleObligatory} defaultChecked></input > przedmioty obowiązkowe</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" id = "optionalSubjects" name = "optionalSubjects" value = {isOptional} onChange={handleOptional} defaultChecked></input> przedmioty obieralne</p>
                    </Col>
                    <Col  md="6">
                        <ListGroup className="mx-5">
                            {
                                isObligatory &&
                                    CoursesList.filter(s => s.semester == chosenSemester).filter(s => s.obligatory).map(s => (
                                        
                                            <Link to={`${s.id}`} className='courses-link'>
                                                <ListGroup.Item style={{backgroundColor:"#f1356d"}}>
                                                    {s.course_name}[obowiązkowy]
                                                </ListGroup.Item>
                                            </Link>
                                    ))
                            }
                            {
                                isOptional &&
                                    CoursesList.filter(s => s.semester == chosenSemester).filter(s => !s.obligatory).map(s => (
                                        <ListGroup.Item style={{backgroundColor:"#f1356d"}}>
                                            <Link to={`${s.id}`} className='courses-link'>{s.course_name}</Link> [obieralny] 
                                        </ListGroup.Item>
                                    ))
                            }
                        </ListGroup>
                    </Col>
                </Row>
        </Container> 
    )
}

export default Courses