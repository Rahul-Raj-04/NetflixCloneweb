import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./Faq.css";
import PropTypes from "prop-types";

function Faq({ title = "Rahul", description = "demo" }) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleToggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <>
      <div className=" text-white">
        <div className="flex justify-center">
          <div className={`faq-container ${isContentVisible ? "open" : ""}`}>
            <div
              onClick={handleToggleContent}
              className="h-[70px] flex justify-between items-center cursor-pointer"
            >
              <h1 className="text-white ml-4">{title}</h1>
              <FontAwesomeIcon icon={faPlus} className="mr-4 text-white" />
            </div>
            {isContentVisible && (
              <div className="w-[100%]  bg-white text-black p-4">
                <p>{description}.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
Faq.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Faq;
