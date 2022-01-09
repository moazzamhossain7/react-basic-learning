import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const activeStyle = {
        textDecoration: 'underline',
        fontWeight: 'bold',
    };

    return (
        <nav>
            <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : null)}>
                Home
            </NavLink>{' '}
            {' | '}
            <NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyle : null)}>
                Contact
            </NavLink>{' '}
            {' | '}
            <NavLink to="/service" style={({ isActive }) => (isActive ? activeStyle : null)}>
                Services
            </NavLink>{' '}
            {' | '}
            <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : null)}>
                About
            </NavLink>
        </nav>
    );
}
