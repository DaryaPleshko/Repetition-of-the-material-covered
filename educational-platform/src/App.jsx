import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import About from './pages/AboutPlatform/AboutPlatform';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/sprint" element={<div>Sprint Page</div>} />
          <Route path="/tasks" element={<div>Tasks Page</div>} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<div>КУРСЫ</div>} />
          <Route path="/statistics" element={<div>Statistics Page</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;