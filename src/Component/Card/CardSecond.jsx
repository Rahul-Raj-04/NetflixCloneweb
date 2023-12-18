import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faDesktop,
  faFaceSmile,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

function CardSecond() {
  return (
    <>
      <div className="ml-[160px] mt-16  text-white text-4xl">
        More reasons to join
      </div>
      <div className="flex justify-center  flex-col  items-center  ">
        <div className=" grid grid-flow-col grid-cols-4 w-[80%]  justify-center items-center h-auto gap-5">
          {" "}
          <div className="w-full h-[auto]   bg-gradient-to-t from-[rgb(33,16,28)] to-[rgb(26,31,65)] rounded-lg  m-8 ml-3">
            <h1 className="m-[25px] text-lg font-semibold text-[25px] text-white">
              Enjoy on your TV
            </h1>
            <p className="flex justify-center items-center w-[80%] ml-4 text-[20px] text-gray-300 whitespace-pre-wrap">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
            <h1 className="ml-[200px] mx-5 mt-2  text-[40px] text-purple-500 ">
              <FontAwesomeIcon icon={faDesktop} />
            </h1>
          </div>{" "}
          <div className="w-full h-[auto]   bg-gradient-to-t from-[rgb(33,16,28)] to-[rgb(26,31,65)] rounded-lg  m-8 ml-3">
            <h1 className="m-[25px] text-lg font-semibold text-[25px] text-white">
              Download your shows to watch offline
            </h1>
            <p className="flex justify-center items-center w-[80%] ml-4 text-[20px] text-gray-300">
              Save your favourites easily and always have something to watch.
            </p>
            <h1 className="ml-[200px] mx-5 mt-2  text-[40px] text-orange-400  ">
              <FontAwesomeIcon icon={faDownload} />
            </h1>
          </div>{" "}
          <div className="w-full h-[auto]   bg-gradient-to-t from-[rgb(33,16,28)] to-[rgb(26,31,65)] rounded-lg  m-8 ml-3">
            <h1 className="m-[25px] text-lg font-semibold text-[25px] text-white">
              Watch everywhere
            </h1>
            <p className="flex justify-center items-center w-[80%] ml-4 text-[20px] text-gray-300">
              Stream unlimited movies and TV shows on your phone, tablet, laptop
              and TV.
            </p>
            <h1 className="ml-[200px] mx-5 mt-2  text-[40px] text-[rgb(209,10,40)]  ">
              <FontAwesomeIcon icon={faHandshake} />
            </h1>
          </div>{" "}
          <div className="w-full h-[auto]   bg-gradient-to-t from-[rgb(33,16,28)] to-[rgb(26,31,65)] rounded-lg  m-8 ml-3">
            <h1 className="m-[25px] text-lg font-semibold text-[25px] text-white">
              Create profiles for kids
            </h1>
            <p className="flex justify-center items-center w-[80%] ml-4 text-[20px] text-gray-300">
              Send kids on adventures with their favourite characters in a space
              made just for them
            </p>
            <h1 className="ml-[200px] mx-5 mt-2  text-[40px] text-green-400  ">
              <FontAwesomeIcon icon={faFaceSmile} />
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardSecond;
