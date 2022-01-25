import "./Graph.scss";
import { useContext } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { ReferenceDataContext } from "../../state/ReferenceDataContext";

const Graph = () => {
  const { labels, values, from, to, error } = useContext(ReferenceDataContext);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  );

  return (
    <div className="graph-wrapper">
      {error}
      <Chart
        type="line"
        data={{
          labels,
          datasets: [
            {
              label: "",
              data: values,
              borderColor: "rgb(75, 192, 192)",
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              display: true,
              text: `${from} to ${to}`,
            },
            tooltip: {
              animation: {
                easing: "easeInOutCirc",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Graph;
