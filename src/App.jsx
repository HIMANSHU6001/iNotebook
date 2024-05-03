import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import LoginSignup from './pages/LoginSignup';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about"  element={<About />}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/loginsignup" element={<LoginSignup/>}/>
      </Routes>
  </Router>
  )
}
