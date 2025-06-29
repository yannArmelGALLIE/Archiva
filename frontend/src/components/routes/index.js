import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Login from '../../pages/login';
import DashboardAdmin from '../../pages/dashboard-admin/dashboard-admin';

const Index = () => {
    return (
        <Router>
            <Routes>
                <Route path='/login' element = {<Login />} />
                <Route path='/dashboard-admin' element = {<DashboardAdmin />} />
                <Route path='*' element = {<Navigate to  = "/login" />} />
            </Routes>
        </Router>
    );
};

export default Index;