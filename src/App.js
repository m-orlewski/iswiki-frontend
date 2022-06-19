import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Layout from './components/Layout';
import Opinion from './components/Opinion';
import Lecturers from './components/Lecturers';
import Lecturer from './components/Lecturer';
import Courses from './components/Courses';
import Subject from './components/Subject';
import Profil from './components/Profil';
import Missing from './components/Missing';
import AddOpinionLecturer from './components/AddOpinionLecturer';
import AddOpinionSubject from './components/AddOpinionSubject';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}

function App() {

  return (
    
    <Routes>

      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="opinion" element={<Opinion />} />

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