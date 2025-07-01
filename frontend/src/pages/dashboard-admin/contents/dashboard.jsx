import renderNavbar from "../../widgets/render-navbar";
import renderCard from "../../widgets/render-card";
import BarGraph from "../../widgets/bar-graph";
import LineGraph from "../../widgets/line-graph";
import PieGraph from "../../widgets/pie-graph";
import graphRGBColors from "../../../styles/utils/graph-rgb-colors";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { Link } from "react-router-dom";

const barChartData = [
  { mois: "Janvier", documents: 1200 },
  { mois: "Février", documents: 980 },
  { mois: "Mars", documents: 1350 },
  { mois: "Avril", documents: 1480 },
  { mois: "Mai", documents: 1720 },
  { mois: "Juin", documents: 1600 },
  { mois: "Juillet", documents: 1850 },
  { mois: "Août", documents: 2100 },
  { mois: "Septembre", documents: 2000 },
  { mois: "Octobre", documents: 2400 },
  { mois: "Novembre", documents: 2300 },
  { mois: "Décembre", documents: 2800 },
];

const sommeTotalDoc = barChartData.reduce(
  (acc, item) => acc + item.documents,
  0
);

const lineChartData = [
  { mois: "Janvier", total: 1200 },
  { mois: "Février", total: 2180 },
  { mois: "Mars", total: 3530 },
  { mois: "Avril", total: 5010 },
  { mois: "Mai", total: 6730 },
  { mois: "Juin", total: 8330 },
  { mois: "Juillet", total: 10180 },
  { mois: "Août", total: 12280 },
  { mois: "Septembre", total: 14280 },
  { mois: "Octobre", total: 16680 },
  { mois: "Novembre", total: 18980 },
  { mois: "Décembre", total: 21780 },
];

const pieChartData = [
  { type: "Actes de naissance", valeur: 8712, pourcentage: 40 },
  { type: "Certificats de résidence", valeur: 5445, pourcentage: 25 },
  { type: "Permis de construire", valeur: 4356, pourcentage: 20 },
  { type: "Mariage / Divorce", valeur: 2178, pourcentage: 10 },
  { type: "Autres", valeur: 1089, pourcentage: 5 },
];

const Dashboard = () => {
  const cardInfo = [
    {
      link: "document",
      id: "Documents",
      label: sommeTotalDoc.toLocaleString("fr-FR"),
    },
    { link: "utilisateur", id: "Utilisateurs", label: "2.000" },
    { link: "synchronisation", id: "Documents synchronisés", label: "80" },
    { link: "param-ia", id: "Taux d’indexation IA", label: "92%" },
  ];

  return (
    <div>
      <div>
        {renderNavbar("Dashboard")}
        <div className="main-content">
          {renderCard(cardInfo)}
          <div className="second-content">
            <div className="graphs-content">
              <BarGraph
                title="Documents archivés par mois"
                data={barChartData}
                color="#2563eb"
              />
              <LineGraph
                title="Croissance cumulée des archives"
                data={lineChartData}
                color="#2563eb"
              />
              <PieGraph
                title="Répartition par type de document"
                data={pieChartData}
                colors={graphRGBColors.slice(0, 5)}
              />
            </div>
            <div className="collaborators-content"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
