import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Login from '../../pages/login';

const Index = () => {
    return (
        <Router>
            <Routes>
                <Route path='/login' element = {<Login />} />
                <Route path='*' element = {<Navigate to  = "/login" />} />
            </Routes>
        </Router>
    );
};

export default Index;