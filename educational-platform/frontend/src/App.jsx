import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import About from './pages/AboutPlatform/AboutPlatform';
import Courses from './pages/Courses/Courses';
import CourseDetail from './pages/Courses/CourseDetail/CourseDetail';
import Statistics from './pages/Statistics/Statistics';
import UserCourse from './pages/StudentDashboard/StudentDashboard';

const EXTERNAL_LINKS = {
  '/sprint': 'https://sunny-bublanina-205a81.netlify.app/allpractice?mode=sprint',
  '/tasks': 'https://sunny-bublanina-205a81.netlify.app/tasks',
};

function ExternalRedirect() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (EXTERNAL_LINKS[pathname]) {
      window.open(EXTERNAL_LINKS[pathname]);
      navigate('/');
    }
  }, [pathname, navigate]);

  return null;
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/courses" element={<Courses />} />

          <Route path="/sprint" element={<ExternalRedirect />} />
          <Route path="/tasks" element={<ExternalRedirect />} />

          <Route path="/bestProject" element={<div>best Project</div>} />
          <Route path="/bestStudents" element={<div>best Students</div>} />

          <Route path="/courses/:courseId" element={<CourseDetail />} />
          <Route path="/dashboard" element={<UserCourse />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;