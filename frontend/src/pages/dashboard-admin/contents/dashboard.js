import renderNavbar from "../../widgets/render-navbar";
import renderCard from "../../widgets/render-card";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const cardInfo = [
    { link: "document", id: "Documents", label: "50.000" },
    { link: "utilisateur", id: "Utilisateurs", label: "2.000" },
    { link: "synchronisation", id: "Documents synchronisés", label: "80" },
    { link: "param-ia", id: "Taux d’indexation IA", label: "92%" },
  ];

  return (
    <div>
      <div>
        {renderNavbar("Dashboard")}
        <div className="main-content">
          {renderCard(cardInfo)};
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
