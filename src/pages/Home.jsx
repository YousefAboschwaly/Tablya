import { LuChevronsRight } from "react-icons/lu";



export default function Home() {
  return (
    <div className="relative">
    <div className="w-full min-h-screen relative overflow-hidden bg-(--mainDynamic) bg-[url(/Pattern.png)] bg-auto">
      {/* Hero Section Content */}
      <div className="w-full flex flex-col items-center justify-center pt-28 pb-16 px-4 relative z-2">
        {/* Main Heading */}
        <h1 className="text-[110px] font-bold text-white leading-none text-center mb-4">
          Come Eat,
          <br />
          Feel Home
        </h1>

        {/* Layer 1: Food Image - Middle Layer */}
        <div className="relative z-1 mb-6 -mt-5">
          <img
            src="/LandingImage.png"
            alt="Delicious food spread"
            className="w-[750px] h-auto object-contain"
          />

          {/* Layer 2: Linear Gradient Overlay - Bottom Half of Image */}
          <div className="absolute left-0 bottom-0 w-full h-1/2 pointer-events-none bg-[linear-gradient(180deg,var(--bgMain-transparent)_0%,var(--bgMain)_100%)] z-2"></div>
        </div>

        {/* Get Start Button */}
        <button className="text-(--bgMain) px-8 py-4 rounded-full text-xl font-medium flex items-center gap-3 hover:scale-105 transition-transform duration-300 relative z-20 bg-(--textMain)">
          Get Start
          <LuChevronsRight className="text-2xl" />
        </button>
      </div>


      {/* Layer 0: Curved White Background (Layer_1) - Bottom Layer */}
      <div className="absolute left-0 bottom-[8%] h-[55%] z-1 w-full pointer-events-none bg-(--bgMain) mask-[url(/Layer_1.png)] [-webkit-mask-image:url(/Layer_1.png)] mask-no-repeat [-webkit-mask-repeat:no-repeat] mask-center-bottom [-webkit-mask-position:center_bottom] mask-contain [-webkit-mask-size:contain]"></div>

    </div>
        <div className=" absolute bottom-0 w-full p-10 bg-(--bgMain)"></div>

    </div>
  );
}
