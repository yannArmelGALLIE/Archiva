import { useState, useEffect } from "react";
import { useLocation, Outlet, Link } from "react-router-dom";
import renderMenuItems from "../widgets/render-menu-items";
import profil from "../../styles/img/profil.jpg";

const DashboardAdmin = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split("/")[2];
    if (path) setActivePage(path);
  }, [location]);

  const menuItems = [
    { id: "dashboard", icon: "dashboard", label: "Dashboard" },
    { id: "utilisateur", icon: "group_add", label: "Utilisateurs" },
    { id: "document", icon: "article", label: "Documents" },
    { id: "param-ia", icon: "psychology", label: "Paramètres IA" },
    { id: "securite", icon: "lock", label: "Sécurité / Accès" },
    { id: "synchronisation", icon: "public", label: "Synchronisation" },
  ];

  return (
    <div className="dashboard-admin">
      <div className="dashboard-bar">
        <div className="dashboard-title">
          <h1>Archiva</h1>
        </div>
        <div className="dashboard-menu">
          {renderMenuItems(
            "Principale",
            menuItems.slice(0, 3),
            activePage,
            setActivePage
          )}
          {renderMenuItems(
            "Configuration",
            menuItems.slice(3),
            activePage,
            setActivePage
          )}
        </div>
        <div className="dashboard-profil">
          <img src={profil} alt="Photo de profil" />
          <Link>
            <div>
              <p>GALLIE Yann-Armel</p>
              <p>Administrateur</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="dashboard-main">
        <Outlet /> {}
      </div>
    </div>
  );
};

export default DashboardAdmin;
