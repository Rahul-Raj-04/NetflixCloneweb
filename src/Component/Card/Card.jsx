import PropTypes from "prop-types";
const Card = ({
  title = "Rahul",
  desc = "A great way to enjoy all your favourite shows and movies on a budget.",
  price = "",
}) => {
  return (
    <>
      <div className="w-full h-[250px]   justify-around bg-gradient-to-t from-[rgb(36,13,16)] to-[rgb(93,28,55)] rounded-lg  m-8 ml-3">
        <div className=" flex flex-col  justify-between">
          <h1 className="m-[25px] text-lg font-semibold text-[25px] text-white flex-wrap">
            {title}
          </h1>
          <p className="flex justify-center items-center w-[80%] ml-4 text-[20px] text-gray-300 min-w-[60%]">
            {desc}
          </p>
          <h1 className="ml-4 mt-10 text-[25px] text-white ">{price}</h1>
        </div>
      </div>
    </>
  );
};
Card.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  price: PropTypes.string,
};
export default Card;
