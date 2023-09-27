import PropTypes from "prop-types";

const Card = ({ card }) => {
  const { image, category, background_color, text_color, price, title } =
    card || {};
  const donatatebg = {
    backgroundColor: text_color,
  };
  const donatatetext = {
    color: text_color,
  };
  const textbg = {
    backgroundColor: background_color,
  };
  return (
    <div>
      <div
        style={textbg}
        className="mt-3 mr-2 relative flex w-[450px] lg:w-[550px] lg:ml-20  flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
      >
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img src={image} alt="image" className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <h6
            style={(donatatetext, textbg)}
            className="pl-10 mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased"
          >
            {category}
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h4>
          <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            {price}
          </p>
          <a className="inline-block" href="#">
            <button
              style={donatatebg}
              className="btn text-white flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              View Details
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  card: PropTypes.function,
};

export default Card;
