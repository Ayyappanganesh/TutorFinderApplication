import React from 'react';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import TeacherProfile from './components/TeacherProfile/TeacherProfile';
import HomePage from './components/HomePage/HomePage';
import SignIn from './components/SigninPage/SignIn';
import Search from './components/Search/Search';
import SearchResults from './components/Search/SearchResults';
import StudentRegister from './components/Register/Student/StudentRegister';
import TeacherRegister from './components/Register/Teacher/TeacherRegister';

import Sidebar from './components/TeacherProfile/Sidebar';
import TeacherProfileRoutes from './components/TeacherProfile/TeacherProfileRoutes';
<<<<<<< HEAD
import StudentProfile from './components/StudentProfile/StudentProfile';
=======
>>>>>>> c9a721c2760a4a20330d9ba42e07ad2f7882b12a
// import MyTution from './components/TeacherProfile/MyTution';





function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teacherprofile" element={<TeacherProfile/>} />
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/search" element={<Search/>} />
        <Route path="/searchtutor" element={<SearchResults/>} />
        <Route path="/studentRegister" element={<StudentRegister/>} />
        <Route path="/teacherRegister" element={<TeacherRegister/>} />
        <Route path="/sidebar" element={<Sidebar/>} />
        <Route path="*" element={<TeacherProfileRoutes/>} />
<<<<<<< HEAD
        <Route path="/student-profile/:studentName" element={<StudentProfile/>} />
=======
>>>>>>> c9a721c2760a4a20330d9ba42e07ad2f7882b12a

        {/* <Route path="/my-tuitions" element={<MyTution/>} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
