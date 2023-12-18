import "./App.css";
import Card from "./Component/Card/Card";
import CardSecond from "./Component/Card/CardSecond";
import Faq from "./Component/Faq";
import Footer from "./Component/Footer";

import Header from "./Component/Header";
import Subscrib from "./Component/Subscrib";
function App() {
  return (
    <>
      <Header />
      <div
        className={`flex justify-center  flex-col   items-center item bg-black border-[rgb(225,11,26)] border-t-[2px]  rounded-t-[10%]`}
      >
        <div className=" text-white  text-3xl mt-[70px] h-[2px] w-[80%]">
          A plan to suit your needs
        </div>
        <div
          className={`grid grid-flow-col grid-cols-4 w-[80%] mt-[50px] justify-center items-center h-auto gap-5`}
        >
          <Card
            title={"MOBILE"}
            desc={"A travel-friendly option for your mobile devices."}
            price={"₹149/month"}
          />
          <Card
            title={"BASIC"}
            desc="A great way to enjoy all your favourite shows and movies on a budget."
            price={"₹199/month"}
          />
          <Card
            title="STANDARD"
            desc="All the entertainment you love, in Full HD video quality."
            price={"₹499/month"}
          />
          <Card
            title="PREMIUM"
            desc="A cinematic experience with the best picture and audio quality."
            price={"₹649/month"}
          />
        </div>
      </div>
      <CardSecond />
      <div className="flex flex-col gap-4 ml-4">
        <div className="flex justify-center  flex-col ml-[150px] my-4 text-white text-4xl">
          Frequently Asked Questions
        </div>
        <Faq
          title="What is Netflix"
          description="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
        />
        <Faq
          description="
Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
          title="How much does Netflix cost?"
        />
        <Faq
          description="
Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
          title="Where can I watch?"
        />
        <Faq
          description="
Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
          title="How do I cancel?"
        />
        <Faq
          description="
Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
          title="What can I watch on Netflix?"
        />
        <Faq
          description="
The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
          title="Is Netflix good for kids?"
        />
      </div>
      <Subscrib />
      <Footer />
    </>
  );
}

export default App;
