import { useLoaderData } from "react-router-dom";
import Donation from "../DonationPoint/Donation";
import Search from "../Search/Search";

const Home = () => {
  const donations = useLoaderData();
  console.log(donations);
  return (
    <div>
      <div>
        <Search></Search>
      </div>
      <div className="grid grid-cols-4 mt-10">
        {donations.map((donation) => (
          <Donation key={donation.id} donation={donation}></Donation>
        ))}
      </div>
    </div>
  );
};

export default Home;
