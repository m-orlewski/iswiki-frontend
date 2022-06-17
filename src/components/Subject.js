import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import axiosInstance from '../api/axios.js';
import { Container,Col,Row,ListGroup,Image,Button } from 'react-bootstrap'
import logo from "../images/subject.svg";

const Subject = () => {

    const params = useParams();

    var [CoursesList, setCoursesList] = useState([]);
    var [LecturersList, setLecturersList] = useState([]);
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
            setLecturersList(response.data);
        });
        axiosInstance.get('reviews')
        .then((response) =>
        {
            setOpinionList(response.data);
        });
    }, []);

    const course_name = CoursesList.filter(s => s.id == params.subjectId).map(s => (s.course_name));
    const description = CoursesList.filter(s => s.id == params.subjectId).map(s => (s.description));
    const obligatory = CoursesList.filter(s => s.id == params.subjectId).map(s => (s.obligatory));
    const semester = CoursesList.filter(s => s.id == params.subjectId).map(s => (s.semester));

    const opinion_name = opinionList.filter(s => s.course == params.subjectId).map(s => (s.author_name));
    const opinion_surname = opinionList.filter(s => s.course == params.subjectId).map(s => (s.author_surname));
    const opinion_date = opinionList.filter(s => s.course == params.subjectId).map(s => 
                                (s.upload_date.slice(0, 10)));
    const opinion_description = opinionList.filter(s => s.course == params.subjectId).map(s => (s.description));

    let lecturersID = CoursesList.filter(s => s.id == params.subjectId).map(s => (s.lecturers));
    const allIDs = new Set();
    for(let i in lecturersID)
    {
        for(let j in lecturersID[i])
            {
                allIDs.add(lecturersID[i][j]);
            }
    }
    const arrIDs = Array.from(allIDs);
    let lecturers = LecturersList.filter(l => arrIDs.some(lecture => lecture == l.id));

    function printObligatory(o)
    {
        if(o) return "przedmiot obowiązkowy";
        else return "przedmiot obieralny";
    }

    return (
        <Container className="mt-5">
                <Row id="subject">
                    <Col md="3" className="py-5 px-5">
                        <Image src={logo} roundedCircle className="border border-primary" width="200px"></Image>
                    </Col>
                    <Col md="3" className="py-5" style={{textAlign: "left"}}>
                        <h2>{course_name}</h2>
                        <h6>{printObligatory(obligatory[0])}</h6>
                    </Col>
                    <Col md="3" className="py-5 mt-5" style={{textAlign: "left"}}>
                        <h5>Semestr {semester}</h5>
                        <h6>{description}</h6>
                    </Col>
                    <Col md="3" className="py-5 d-flex align-items-center justify-content-center" style={{textAlign: "left"}}>
                        <Button variant="warning">Materiały do zajęć</Button>
                    </Col>
                </Row>
                <Row>
                    <Col md="6" style={{border: "1px solid black"}} className="mx-4 py-4">
                        <h1>Najprzydatniejsze opinie:</h1>
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
                        <Link style={{marginRight: '20vh'}} to={'/addOpinionSubject?name=' + 
                            course_name + '&id=' + params.subjectId  }>Wystaw opinie</Link>
                        <Link style={{marginRight: '10vh'}} to={'/Opinion?objectType=subject&id='+params.subjectId+'&name='+course_name}>Wszystkie opinie</Link>
                    </Col>
                    <Col md="5" style={{border: "1px solid black"}} className="mx-4 py-4">
                        <h1>Prowadzący:</h1><br/>
                        <ListGroup className="mx-5">
                        {
                            lecturers.map(l => (
                            <Link to={`/lecturers/${l.id}`} className='courses-link'>
                                <ListGroup.Item style={{backgroundColor:"#f1356d"}}>
                                    {l.name}&nbsp;{l.surname}
                                </ListGroup.Item> 
                            </Link> 
                            ))
                        }
                        </ListGroup>
                    </Col>
                </Row>
        </Container> 
    )
}

export default Subject;