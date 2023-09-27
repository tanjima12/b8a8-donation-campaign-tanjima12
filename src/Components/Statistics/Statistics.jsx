import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell } from "recharts";

const Statistics = () => {
  const data = useLoaderData();
  const addedItems = JSON.parse(localStorage.getItem("addedCategory"));

  const pieChartData = [
    { name: "Total Donate", value: data.length - addedItems.length },
    { name: "Your Donate", value: addedItems.length },
  ];

  const COLORS = ["#FF444A", "#00C49F"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        style={{ fontWeight: 700, fontSize: "larger" }}
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    );
  };

  return (
    <div
      className={"flex flex-col items-center justify-center mt-[8rem] gap-1"}
    >
      <p className={"text-lg"}>This is Statistics</p>
      <PieChart width={400} height={400}>
        <Pie
          data={pieChartData}
          cx={"50%"}
          cy={"50%"}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={170}
          fill={"#8884d8"}
          dataKey={"value"}
        >
          {pieChartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default Statistics;
