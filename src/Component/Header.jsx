function Header() {
  return (
    <>
      <div className="">
        {" "}
        <div className="">
          {/* bg image section  */}
          <div className="relative bg-black  border-spacing-0 rounded-s-sm ">
            <img
              className="w-full h-[770px]"
              src="https://miro.medium.com/v2/resize:fit:1400/1*5lyavS59mazOFnb55Z6znQ.png"
              alt="Your Image"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black  opacity-90"></div>
          </div>
          {/* header section  */}
          <div className="w-full h-[70px]  bg-transparent absolute top-0 text-white  flex justify-between pl-6">
            <img
              className="w-[150px] h-[45px]  flex justify-center items-center mt-4 ml-8"
              src="https://code-with-mj.github.io/Netflix_Website_Clone/images/logo.png"
              alt="Logo"
            ></img>
            <div className="flex flex-row gap-3 pr-[150px]  justify-center items-center">
              <button className="w-[85px] h-[25px] bg-red-600 rounded-md ">
                Login{" "}
              </button>
              <select className=" bg-neutral-400 text-black rounded-md w-[85px]">
                <option className="ml-4">English</option>
              </select>
            </div>
          </div>
          <div className=" absolute top-[250px]">
            <h1 className="text-[60px] font-bold text-white ml-[150px]">
              Unlimited movies, TV
            </h1>
            <h1 className="text-[60px] font-bold text-white ml-[150px]">
              TV shows and more
            </h1>
            <h1 className=" text-white ml-[150px] text-2xl">
              Starts at ₹149. Cancel anytime.
            </h1>
            <h1 className="text-white ml-[150px] mt-8">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h1>
            <div className="flex">
              {" "}
              <input
                type="text"
                placeholder="Email address"
                className="ml-[150px] w-[370px] text-white h-[55px] mt-8 bg-transparent border-[2px] rounded-lg"
              ></input>
              <button className="w-[240px] h-[55px] text-white border-[2px] mt-8 ml-3 bg-red-600 font-bold cursor-pointer rounded-md">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
