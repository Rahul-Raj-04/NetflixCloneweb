function Footer() {
  return (
    <>
      <div className="flex flex-col justify-betwee w-full h-[auto] mt-16 cursor-pointer border-t-[3px] rounded-[20px] shadow-md">
        <div className="w-[80%] flex flex-col justify-center items-center ">
          <div className="text-white w-full flex flex-col  justify-center  ml-[335px] mt-4">
            Questions? Call 000-800-919-1694
          </div>
          <div className="text-white w-full flex flex-row h-[200px] justify-between gap-6     ml-[335px] mt-4 ">
            <ul className="flex flex-col  w-[200px]  gap-3 font-bold">
              <li>FAQ</li>
              <li>Investor Relations</li>
              <li>Privacy</li>
              <li>Speed Test</li>
            </ul>
            <ul className="flex flex-col  w-[200px] gap-3 font-bold ">
              <li>Help Centre</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
              <li>Privacy</li>
              <li>Legal Notices</li>
            </ul>
            <ul className="flex flex-col  w-[200px]  gap-3 font-bold ">
              <li>Account</li>
              <li>Ways to Watch</li>
              <li>Corporate Information</li>
              <li>Only on Netflix</li>
            </ul>
            <ul className="flex flex-col  items-end w-[200px]  gap-3 font-bold ">
              <li>Media Centre</li>
              <li>Terms of Use</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="text-white w-full flex flex-col    justify-center  ml-[335px] mt-4  ">
            <select className="w-[100px] rounded-md h-[30px]  border-[2px] bg-black text-white">
              <option className=" flex items-center ml-[25px]" value="English">
                English
              </option>
              <option value="English">Hindi</option>
            </select>
          </div>
        </div>
      </div>
      <div className=" text-white mx-[165px] my-[25px]">Netflix INDIA </div>
    </>
  );
}

export default Footer;
