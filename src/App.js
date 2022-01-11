import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivetOutlet from './Auth/PrivetOutlet';
import About from './components/router/About';
import Contact from './components/router/Contact';
import Error from './components/router/Error';
import Home from './components/router/Home';
import Login from './components/router/Login';
import Navbar from './components/router/Navbar';
import Post from './components/router/Post';
import Service from './components/router/Service';

export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/*" element={<PrivetOutlet />}>
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="service" element={<Service />} />
                    <Route path="post/:category" element={<Post />} />
                </Route>

                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
}
