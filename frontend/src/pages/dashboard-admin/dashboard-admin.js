import { useState } from "react";
import profil from "../../styles/img/profil.jpg";

const DashboardAdmin = () => {
  const [activePage, setActivePage] = useState("dashboard");

  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return <p>Dashboard</p>;
      case "utilisateur":
        return <p>Utilisateurs</p>;
      case "document":
        return <p>Documents</p>;
      case "ia":
        return <p>Paramètres IA</p>;
      case "securite":
        return <p>Sécurité / Accès</p>;
      case "sync":
        return <p>Synchronisation</p>;
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
          <div>
            <h3>Principale</h3>
            <div>
              <div
                className={
                  activePage === "dashboard"
                    ? "menu-indicator active"
                    : "menu-indicator"
                }
              ></div>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActivePage("dashboard");
                }}
                className={activePage === "dashboard" ? "active-link" : ""}
              >
                <span className="material-icons">dashboard</span>
                Dashboard
              </a>
            </div>
            <div>
              <div
                className={
                  activePage === "utilisateur"
                    ? "menu-indicator active"
                    : "menu-indicator"
                }
              ></div>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActivePage("utilisateur");
                }}
                className={activePage === "utilisateur" ? "active-link" : ""}
              >
                <span class="material-icons">group_add</span>
                Utilisateurs
              </a>
            </div>
            <div>
              <div
                className={
                  activePage === "document"
                    ? "menu-indicator active"
                    : "menu-indicator"
                }
              ></div>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActivePage("document");
                }}
                className={activePage === "document" ? "active-link" : ""}
              >
                <span class="material-icons">article</span>
                Documents
              </a>
            </div>
          </div>
          <div>
            <h3>Configuration</h3>
            <div>
              <div
                className={
                  activePage === "ia"
                    ? "menu-indicator active"
                    : "menu-indicator"
                }
              ></div>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActivePage("ia");
                }}
                className={activePage === "ia" ? "active-link" : ""}
              >
                <span class="material-icons">psychology</span>
                Paramètres IA
              </a>
            </div>
            <div>
              <div
                className={
                  activePage === "securite"
                    ? "menu-indicator active"
                    : "menu-indicator"
                }
              ></div>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActivePage("securite");
                }}
                className={activePage === "securite" ? "active-link" : ""}
              >
                <span class="material-icons">lock</span>
                Sécurité / Accès
              </a>
            </div>
            <div>
              <div
                className={
                  activePage === "sync"
                    ? "menu-indicator active"
                    : "menu-indicator"
                }
              ></div>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActivePage("sync");
                }}
                className={activePage === "sync" ? "active-link" : ""}
              >
                <span class="material-icons">public</span>
                Synchronisation
              </a>
            </div>
          </div>
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
      <div class="dashboard-main">{renderContent()}</div>
    </div>
  );
};

export default DashboardAdmin;
