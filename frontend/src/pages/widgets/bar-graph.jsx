import { Bar } from "react-chartjs-2";

const BarGraph = ({ title, data, color }) => {
  const chartData = {
    labels: data.map((item) => item.mois),
    datasets: [
      {
        label: title,
        data: data.map((item) => item.documents),
        backgroundColor: [color], // ou plusieurs couleurs
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 3000,
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div>
      <div>{title}</div>
      <div>
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default BarGraph;
