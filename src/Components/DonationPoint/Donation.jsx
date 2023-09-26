import { Link } from "react-router-dom";

const Donation = ({ donation }) => {
  const { image, category, background_color, text_color, title, id } = donation;

  const bgColor = {
    backgroundColor: background_color,
  };
  const textColor = {
    color: text_color,
  };
  return (
    <Link to={`/donate/${id}`}>
      <div>
        <div
          style={bgColor}
          className="relative flex mr-8 flex-col rounded-xl bg-white bg-clip-border  text-gray-700 shadow-md mb-10 "
        >
          <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <img src={image} alt="profile-picture" />
          </div>
          <div style={textColor} className="p-6 text-center">
            <h4
              style={bgColor}
              className="border mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
            >
              {category}
            </h4>
            <p
              style={textColor}
              className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased"
            >
              {title}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Donation;
