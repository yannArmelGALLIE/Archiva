import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Login from "../../pages/login";
import DashboardAdmin from "../../pages/dashboard-admin/dashboard-admin";
import Dashboard from "../../pages/dashboard-admin/contents/dashboard";
import User from "../../pages/dashboard-admin/contents/user";
import Document from "../../pages/dashboard-admin/contents/document";
import ParamIa from "../../pages/dashboard-admin/contents/param-ia";
import Security from "../../pages/dashboard-admin/contents/security";
import Sync from "../../pages/dashboard-admin/contents/sync";

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard-admin" element={<DashboardAdmin />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="utilisateur" element={<User />} />
          <Route path="document" element={<Document />} />
          <Route path="param-ia" element={<ParamIa />} />
          <Route path="securite" element={<Security />} />
          <Route path="synchronisation" element={<Sync />} />
          
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default Index;
