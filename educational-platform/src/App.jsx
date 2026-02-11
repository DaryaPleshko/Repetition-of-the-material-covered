import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import About from './pages/AboutPlatform/AboutPlatform';
import Courses from './pages/Courses/Courses';
import Statistics from './pages/Statistics/Statistics';

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
          <Route path="/courses" element={<Courses />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/sprint" element={<div>Sprint Page</div>} />
          <Route path="/tasks" element={<div>Tasks Page</div>} />

          <Route path="/bestProject" element={<div>best Project</div>} />
          <Route path="/bestStudents" element={<div>best Students</div>} />

          <Route path="/javascript" element={<div>JavaScript Page</div>} />
          <Route path="/typescript" element={<div>TypeScript Page</div>} />
          <Route path="/python" element={<div>Python Page</div>} />
          <Route path="/csharp" element={<div>C# Page</div>} />
          <Route path="/java" element={<div>Java Page</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;