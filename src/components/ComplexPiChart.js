import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
Chart.register(ArcElement, Tooltip, Legend);

const ComplexPiChart = ({ graphTitle /*dataSetIn*/ }) => {
  // Sample data for the line chart
  const currentDate = new Date();
  const thisMonth = currentDate.getDate();
  const dataSetIn = [
    0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 0,
  ];
  let paddedDataSetIn = Array(31).fill(0);
  const startIndex = Math.max(0, dataSetIn.length - 31);
  const endIndex = dataSetIn.length;

  for (
    let i = startIndex, j = 31 - (endIndex - startIndex);
    i < endIndex;
    i++, j++
  ) {
    paddedDataSetIn[j] = dataSetIn[i];
  }

  console.log(paddedDataSetIn);

  const [period, setPeriod] = useState(7);
  const [summaryTitle, setSummaryTitle] = useState("Last " + period + " days");

  const [dataSetOut, setDataSetOut] = useState([1, 1]);
  const [options, setOptions] = useState({
    labels: ["Presents", "Absents"],
    datasets: [
      {
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)"],
        borderWidth: 1,
        data: dataSetOut,
      },
    ],
  });
  useEffect(() => {
    updateDataSetOut(period);
  }, []);
  useEffect(() => {
    updateDataSetOut(period);
    setSummaryTitle("Last " + period + " days");
  }, [period]);

  useEffect(() => {
    console.log("datasetout changed");
    console.log(dataSetOut);
    setOptions({
      ...options,
      datasets: [
        {
          ...options.datasets[0],
          data: dataSetOut,
        },
      ],
    });
  }, [dataSetOut]);

  useEffect(() => {
    console.log(dataSetOut);
    console.log(options);
  }, [options]);

  // Chart options

  const handleChange = (event) => {
    setPeriod(parseInt(event.target.value));
  };
  const updateDataSetOut = (days) => {
    console.log(paddedDataSetIn);
    const dataSlice = paddedDataSetIn.slice(-days);
    console.log(dataSlice);
    const absents = dataSlice.filter((item) => item === 0).length;
    const presents = dataSlice.filter((item) => item !== 0).length;
    const dataToSet = [presents, absents];
    console.log(dataToSet);

    setDataSetOut(dataToSet);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div
        className="row-container-small"
        style={{
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <h2>{graphTitle}</h2>
        <select
          className="dropdown-form"
          value={period}
          onChange={handleChange}
        >
          <option value="7">Past 7 days</option>
          <option value="30" selected>
            Past 30 days
          </option>
          <option value={thisMonth}>This Month</option>
        </select>
      </div>
      <div
        className="graph-container-big"
        style={{ position: "relative", flexGrow: "1", width: "100%" }}
      >
        <Pie
          data={options}
          options={{
            maintainAspectRatio: false,
            responsive: true,
          }}
          className="custom-legend"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </div>
    </div>
  );
};

export default ComplexPiChart;
