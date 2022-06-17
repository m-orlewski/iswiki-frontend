import Register from './components/Register';
import Base from './components/Base';
import Login from './components/Login';
import Home from './components/Home';
import Layout from './components/Layout';
import Materials from './components/Materials';
import Opinion from './components/Opinion';
import Admin from './components/Admin';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import Lecturers from './components/Lecturers';
import Lecturer from './components/Lecturer';
import Courses from './components/Courses';
import Subject from './components/Subject';
import Help from './components/Help';
import Profil from './components/Profil';
import AddOpinionLecturer from './components/AddOpinionLecturer';
import AddOpinionSubject from './components/AddOpinionSubject';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axiosInstance from './api/axios';

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}

axiosInstance.defaults.xsrfCookieName = 'csrftoken'
axiosInstance.defaults.xsrfHeaderName = 'X-CSRFToken'

function App() {

  return (
    
    <Routes>

      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="base" element={<Base />} />
        <Route path="help" element={<Help />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="opinion" element={<Opinion />} />

        <Route>
          <Route path="materials" element={<Materials />} />
        </Route>


        <Route>
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route>
          <Route path="courses" element={<Courses />} />
        </Route>

        <Route>
          <Route path="lecturers" element={<Lecturers />} />
        </Route>

        <Route>
          <Route path="lecturers/:lecturerId" element={<Lecturer />} />
        </Route>

        <Route>
          <Route path="addOpinionLecturer" element={<AddOpinionLecturer />} />
        </Route>

        <Route>
          <Route path="addOpinionSubject" element={<AddOpinionSubject />} />
        </Route>

        <Route>
          <Route path="opinion" element={<Opinion />} />
        </Route>

        <Route>
          <Route path="courses/:subjectId" element={<Subject />} />
        </Route>

        <Route>
          <Route path="profil" element={<Profil />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;