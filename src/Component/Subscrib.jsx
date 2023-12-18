function Subscrib() {
  return (
    <>
      <div className="w-[80%] flex flex-col justify-center items-center">
        <h1 className="text-white w-full flex flex-col justify-center  ml-[335px] mt-4">
          Ready to watch? Enter your email to create or restart your membership.
        </h1>
        <div className="text-white w-full flex flex-row justify-center ml-[250px] mt-4">
          <input
            className="text-white w-[70%]  h-[55px]  bg-transparent border-[2px] flex flex-col justify-center mr-6 mt-4"
            type="text"
          ></input>
          <button className="w-[240px] h-[55px] text-white border-[2px] ml-3 items-center mt-4 bg-red-600 font-bold cursor-pointer rounded-md">
            Get started
          </button>
        </div>
      </div>
    </>
  );
}

export default Subscrib;
