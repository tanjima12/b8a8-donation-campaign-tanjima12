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

  return (
    <section>
      <div>
        <img
          className="relative ml-10 md:w-[1320px] lg:w-[1320px] lg:h-[650px] lg:ml-24 mt-10 "
          src={category.image}
        ></img>

        <div className="w-[310px] md:w-[770px] lg:w-[1320px] h-[50px] lg:h-[80px] bg-blend-overlay bg-black bg-opacity-40 bottom-[550px] left-[40px] md:bottom-[420px] lg:bottom-[10px] lg:left-[95px] absolute">
          <div>
            <button
              onClick={handleDetails}
              style={detailsbg}
              className="btn lg:mt-5   lg:ml-32 "
            >
              Donate $290
            </button>
          </div>
        </div>
        <div className="ml-24">
          <h1 className="text-3xl font-bold">{category.title}</h1>
          <p className="text-xl mb-5">{category.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Details;
