import { useLoaderData, useParams } from "react-router-dom";
import { PieChart, Pie } from "recharts";
const Statistics = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <PieChart width={730} height={250}>
        <Pie
          data={data}
          dataKey="price"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
        />
      </PieChart>
    </div>
  );
};

export default Statistics;
