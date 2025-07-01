import { Line } from "react-chartjs-2";

const LineGraph = ({ title, data, color }) => {
  const chartData = {
    labels: data.map((item) => item.mois),
    datasets: [
      {
        label: title,
        data: data.map((item) => item.total),
        borderColor: color, 
        tension: 0.1,
        fill: false
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
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default LineGraph;
