import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const Details = () => {
  const [category, setCategory] = useState({});
  const { id } = useParams();
  const donateDetails = useLoaderData();
  console.log(id);
  const { text_color } = category;
  useEffect(() => {
    const findCategory = donateDetails.find((category) => category.id === id);
    setCategory(findCategory);
  }, [id, donateDetails]);

  const detailsbg = {
    backgroundColor: text_color,
  };

  const handleDetails = () => {
    const addDetails = [];
    const addedItems = JSON.parse(localStorage.getItem("addedCategory"));
    if (!addedItems) {
      addDetails.push(category);
      localStorage.setItem("addedCategory", JSON.stringify(addDetails));
    } else {
      const isAdd = addedItems.find((item) => item.id === id);
      swal("Successfully!", "Your donate is done", "success");
      if (!isAdd) {
        addDetails.push(...addedItems, category);
        localStorage.setItem("addedCategory", JSON.stringify(addDetails));
      } else {
        swal("Thank you", "You are already donated", "success");
      }
    }
  };

  // const imgStyle = {
  //   opacity: "calc(1-(var(--opacity)/100))",
  //   height: "650px",
  // };

  // style={{ position: "relative" }}
  return (
    <div>
      <img
        className="absolute ml-10 lg:w-[1320px] lg:h-[650px] lg:ml-24 mt-10 "
        src={category.image}
      ></img>
      {/* <div
        style={{
          positon: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "25%",
          background:
            "linear-gradient(transparent,transparent calc(100%-var(--opacity)),rgba(0,0,0,1))",
        }}
      ></div> */}
      <div>
        <button
          onClick={handleDetails}
          style={detailsbg}
          className="btn relative mt-[180px] mb-16 lg:mt-[620px] ml-32 lg:mb-20"
        >
          Donate $290
        </button>
      </div>
      <div className="ml-24">
        <h1 className="text-3xl font-bold">{category.title}</h1>
        <p className="text-xl mb-5">{category.description}</p>
      </div>
    </div>
  );
};

export default Details;
