import { useState } from "react";
import renderMenuItems from "../widgets/render-menu-items";
import profil from "../../styles/img/profil.jpg";
import renderContentDashboard from "./render-content-dashboard";
import renderContentUser from "./render-content-user";
import renderContentSecurity from "./render-content-security";
import renderContentIa from "./render-content-ia";
import renderContentDoc from "./render-content-doc";
import renderContentSync from "./render-content-sync";

const DashboardAdmin = () => {
  const [activePage, setActivePage] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", icon: "dashboard", label: "Dashboard" },
    { id: "utilisateur", icon: "group_add", label: "Utilisateurs" },
    { id: "document", icon: "article", label: "Documents" },
    { id: "ia", icon: "psychology", label: "Paramètres IA" },
    { id: "securite", icon: "lock", label: "Sécurité / Accès" },
    { id: "sync", icon: "public", label: "Synchronisation" },
  ];

  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return renderContentDashboard();
      case "utilisateur":
        return renderContentUser();
      case "document":
        return renderContentDoc();
      case "ia":
        return renderContentIa();
      case "securite":
        return renderContentSecurity();
      case "sync":
        return renderContentSync();
      case "profil":
        return <p>Profil</p>;
    }
  };

  

  return (
    <div class="dashboard-admin">
      <div class="dashboard-bar">
        <div class="dashboard-title">
          <h1>Archiva</h1>
        </div>
        <div class="dashboard-menu">
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
        <div class="dashboard-profil">
          <img src={profil} alt="Photo de profil" />
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActivePage("profil");
            }}
          >
            <div>
              <p>GALLIE Yann-Armel</p>
              <p>Administrateur</p>
            </div>
          </a>
        </div>
      </div>
      <div class="dashboard-main">
        {renderContent()}
      </div>
    </div>
  );
};
export default DashboardAdmin;
