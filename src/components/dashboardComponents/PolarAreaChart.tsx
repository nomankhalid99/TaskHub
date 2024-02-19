import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexChartProps, PolarChartData } from "../../constants/types";

const PolarAreaChart: React.FC<ApexChartProps> = () => {
  const [chartData, setChartData] = useState<PolarChartData>({
    series: [42, 47, 52, 58, 65],
    options: {
      chart: {
        width: 400,
        type: "polarArea",
      },
      labels: ["France", "India", "Canada", "Italy", "US"],
      fill: {
        opacity: 0.9,
      },
      stroke: {
        width: 1,
        colors: undefined,
      },
      yaxis: {
        show: false,
      },
      legend: {
        position: "bottom",
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0,
          },
          spokes: {
            strokeWidth: 1,
          },
        },
      },
      theme: {
        monochrome: {
          enabled: false,
          shadeTo: "light",
          shadeIntensity: 0.6,
        },
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="polarArea"
          height={350}
          width={"100%"}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default PolarAreaChart;
