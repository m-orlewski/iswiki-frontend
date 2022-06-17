import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import axiosInstance from '../api/axios.js';
import { Container,Col,Row,ListGroup,Image,Button } from 'react-bootstrap'
import logo from "../images/lecture.svg";

const Lecturer = () => {
    const params = useParams();
    var [CoursesList, setCoursesList] = useState([]);
    var [LecturerList, setLecturerList] = useState([]);
    var [opinionList, setOpinionList] = useState([]);

    useEffect(() => 
    {
        axiosInstance.get('courses')
        .then((response) =>
        {
            setCoursesList(response.data);
        });
        axiosInstance.get('lecturers')
        .then((response) =>
        {
            setLecturerList(response.data);
        });
        axiosInstance.get('reviews')
        .then((response) =>
        {
            setOpinionList(response.data);
        });
    }, []);

    const lecturer_name = LecturerList.filter(l => l.id == params.lecturerId).map(l => (l.name));
    const lecturer_surname = LecturerList.filter(l => l.id == params.lecturerId).map(l => (l.surname));
    const lecturer_phone = LecturerList.filter(l => l.id == params.lecturerId).map(l => (l.phone));
    const lecturer_email = LecturerList.filter(l => l.id == params.lecturerId).map(l => (l.email));
    const lecturer_room = LecturerList.filter(l => l.id == params.lecturerId).map(l => (l.room));

    const opinion_name = opinionList.filter(l => l.lecturer == params.lecturerId).map(l => (l.author_name));
    const opinion_surname = opinionList.filter(l => l.lecturer == params.lecturerId).map(l => (l.author_surname));
    const opinion_date = opinionList.filter(l => l.lecturer == params.lecturerId).map(l => 
                                (l.upload_date.slice(0, 10)));
    const opinion_description = opinionList.filter(l => l.lecturer == params.lecturerId).map(l => (l.description));

    const courses = CoursesList.filter(s => s.lecturers.filter(lecture => lecture == params.lecturerId).length != 0);
    return (
        <Container className="mt-5">
            <Row id="lecturer">
                <Col md="3" className="py-5 px-5">
                    <Image src={logo} roundedCircle className="border border-success" width="200px"></Image>
                </Col>
                <Col md="9" className="py-5" style={{textAlign: "left"}}>
                    <h2>{lecturer_name}&nbsp;{lecturer_surname}</h2>
                    <Button variant="warning">Edytuj profil</Button>
                </Col>
            </Row>
            <Row>
                <Col md="3" style={{border: "1px solid black"}} className="mx-4 py-4">
                    <h2>Pokój</h2>
                    <h5>{lecturer_room}</h5>
                    <br/><br/>
                    <h2>Telefon</h2>
                    <h5>{lecturer_phone}</h5>
                    <br/><br/>
                    <h2>Email</h2>
                    <h5>{lecturer_email}</h5>
                    <br/>
                </Col>
                <Col md="4" style={{border: "1px solid black"}} className="mx-4 py-4">
                    <h2>Najprzydatniejsze opinie:</h2>
                    <br/><br/>
                    {
                    opinion_name.length == 1 ? 
                    (   
                        <>             
                            <h2>{opinion_date} &nbsp; {opinion_name + " " + opinion_surname}</h2>
                            <h5>{opinion_description}</h5>
                            <br/><br/>
                        </>
                    )
                    :
                    opinion_name.length > 1 ?
                    (   
                        <>             
                            <h2>{opinion_date[0]} &nbsp; {opinion_name[0] + " " + opinion_surname[0]}</h2>
                            <h5>{opinion_description[0]}</h5>
                            <br/><br/>
                            <h2>{opinion_date[1]} &nbsp; {opinion_name[1] + " " + opinion_surname[1]}</h2>
                            <h5>{opinion_description[1]}</h5>
                        </>
                    )
                    :
                    (<></>)
                }
                <Link style={{marginRight: '20vh'}} to={'/addOpinionLecturer?name=' + 
                    lecturer_name + ' ' + lecturer_surname + '&id=' + params.lecturerId  }>Wystaw opinie</Link>
                <Link style={{marginRight: '10vh'}} to={'/Opinion?objectType=lecturer&id='+params.lecturerId+'&name='+lecturer_name + ' ' + lecturer_surname}>Wszystkie opinie</Link>
                </Col>
                <Col md="3" className="mt-5">
                    <h1>Prowadzone przedmioty:</h1><br/>
                    <div className="coursesList">
                    <ListGroup className="mx-5">
                            {
                                courses.map(l => (
                                    <Link to={`/courses/${l.id}`} className='courses-link'>
                                        <ListGroup.Item style={{backgroundColor:"#f1356d"}} className="mt-2">
                                            {l.course_name}
                                        </ListGroup.Item> 
                                    </Link>
                                ))
                            }
                    </ListGroup>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Lecturer;