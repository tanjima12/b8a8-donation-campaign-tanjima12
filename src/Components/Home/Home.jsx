import { useLoaderData } from "react-router-dom";
import Donation from "../DonationPoint/Donation";
import { useState } from "react";

const Home = () => {
  const donations = useLoaderData();
  const [input, setInput] = useState("");
  const [newDonations, setNewDonations] = useState(donations);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (input) {
      const tempArray = [];
      donations.forEach(
        (item) =>
          item.category.toLowerCase().includes(input.toLowerCase()) &&
          tempArray.push(item)
      );
      setNewDonations(tempArray);
      return;
    }
    setNewDonations(donations);
  };

  return (
    <div>
      <div>
        <img
          className="relative opacity-20 mt-5  lg:max-w-7xl mx-auto"
          src="https://i.ibb.co/mHLVfkj/Rectangle-4281.jpg"
        ></img>
      </div>
      <div>
        <div className="absolute top-[20px] md:top-[200px] md:left-[180px] lg:top-[250px] lg:left-[450px] text-center mt-5 mb-5 ">
          <h1 className="text-3xl font-bold lg:mb-8 pt-12">
            I Grow By Helping People In Need
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Search here"
                className="input input-bordered w-full max-w-xs"
                onChange={(event) => {
                  setInput(event.target.value);
                }}
                value={input}
              />
              <button
                type="submit"
                className="text-white  bg-red-500  border px-5 py-2 ml-5 rounded-md"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 mt-10 ml-5">
        {newDonations?.map((item) => (
          <Donation key={item.id} donation={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
