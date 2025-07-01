import { Pie } from "react-chartjs-2";

const PieGraph = ({ title, data, colors }) => {
  const chartData = {
    labels: data.map((item) => item.type),
    datasets: [
      {
        label: title,
        data: data.map((item) => item.valeur),
        backgroundColor: colors.map(color => color),
        hoverOffset: 4,
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
        display: true,
      },
    },
  };
  return (
    <div>
      <div>{title}</div>
      <div>
        <Pie data={chartData} options={options} />
      </div>
    </div>
  );
};

export default PieGraph;
