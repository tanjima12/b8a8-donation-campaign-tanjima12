import { useEffect, useState } from "react";

import Card from "../Card/Card";

const Donate = () => {
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
        <div className="mt-5 ml-5 grid grid-cols-2">
          {donate.map((card) => (
            <Card key={card.id} card={card}></Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Donate;
