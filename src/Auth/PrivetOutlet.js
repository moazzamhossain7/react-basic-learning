import { Navigate, Outlet } from 'react-router-dom';
import useAuth from './useAuth';

export default function PrivetOutlet() {
    const auth = useAuth();

    return auth ? <Outlet /> : <Navigate to="/login" />;
}
