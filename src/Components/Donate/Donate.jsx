import { useEffect, useState } from "react";

import Card from "../Card/Card";

const Donate = () => {
  const [datalength, setdatalength] = useState(4);
  const [donate, setDonate] = useState([]);
  const [noFound, setFound] = useState(false);
  useEffect(() => {
    const addedItems = JSON.parse(localStorage.getItem("addedCategory"));
    if (addedItems) {
      setDonate(addedItems);
    } else {
      console.log("no data found");
      setFound("No Data Found");
    }
  }, []);
  return (
    <div>
      {noFound ? (
        <p className="text-3xl text-center mt-10">{noFound}</p>
      ) : (
        <div className="mt-5 md:ml-40 lg:ml-5 grid grid-cols-1 lg:grid-cols-2">
          {donate.slice(0, datalength).map((card) => (
            <Card key={card.id} card={card}></Card>
          ))}
        </div>
      )}
      <div onClick={() => setdatalength()} className="flex justify-center mt-5">
        <button className="btn bg-red-300">See All</button>
      </div>
    </div>
  );
};

export default Donate;
