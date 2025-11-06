import { HiArrowRight } from "react-icons/hi2";

export default function Home() {
  return (
    <div className="w-full min-h-screen relative overflow-hidden bg-(--mainDynamic) bg-[url(/Pattern.png)] bg-auto">
      {/* Layer 0: Curved White Background (Layer_1) - Bottom Layer */}
      <div className="absolute left-0 bottom-[-8%] h-[55%] z-1 bg-[url(/Layer_1.png)] bg-center bg-no-repeat w-full pointer-events-none"></div>

      {/* Hero Section Content */}
      <div className="w-full flex flex-col items-center justify-center pt-28 pb-16 px-4 relative z-10">
        {/* Main Heading */}
        <h1 className="text-[110px] font-bold text-white leading-none text-center mb-4">
          Come Eat,
          <br />
          Feel Home
        </h1>

        {/* Layer 1: Food Image - Middle Layer */}
        <div className="relative z-10 mb-6 -mt-5">
          <img
            src="/LandingImage.png"
            alt="Delicious food spread"
            className="w-[750px] h-auto object-contain"
          />

          {/* Layer 2: Linear Gradient Overlay - Bottom Half of Image */}
          <div className="absolute left-0 bottom-0 w-full h-1/2 pointer-events-none bg-[linear-gradient(180deg,rgba(255,247,240,0)_0%,var(--bgMain)_100%)] z-2"></div>
        </div>

        {/* Get Start Button */}
        <button className="text-white px-8 py-4 rounded-full text-xl font-medium flex items-center gap-3 hover:scale-105 transition-transform duration-300 relative z-20 bg-(--bgFixed)">
          Get Start
          <HiArrowRight className="text-2xl" />
        </button>
      </div>
    </div>
  );
}
