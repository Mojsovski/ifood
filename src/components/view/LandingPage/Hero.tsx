import { Image } from "@heroui/react";
import { imageAsset } from "../../../assets/images/image";

function Hero() {
  return (
    <div className="w-full h-full flex flex-col relative pt-16 md:pb-3 pb-10">
      {/* hero 1 */}
      <div className="flex-wrap flex flex-col justify-center items-center ">
        <h1 className=" flex-wrap font-didot uppercase text-6xl md:text-9xl text-center flex items-center justify-center gap-4">
          <span>simple</span>
          <span>
            <Image
              alt="HeroUI hero Image"
              src={imageAsset.food1}
              width={150}
              height={150}
              className="object-cover"
              isBlurred
            />
          </span>
          <span>and</span>
        </h1>
        <h1 className="font-didot uppercase text-6xl md:text-[160px] text-center flex">
          tasty recipes
        </h1>
      </div>
      {/* hero 2 */}
      <div className="flex flex-col md:flex-row md:mx-6  ">
        <div className=" flex justify-center items-center">
          <Image
            src={imageAsset.food3}
            className="md:w-[400px] w-[200px] object-cover"
            isBlurred
          />
        </div>
        <div className="md:p-10 flex flex-col w-full ">
          {/* cols 1 */}
          <div className=" flex h-[200px] ">
            <div className="w-3/4 flex pb-4 md:pb-10 pt-16 md:pt-0">
              <div className="w-1/3 self-end">
                <h3 className="text-3xl ">01</h3>
              </div>
              <div className="size-28 md:size-40 rounded-full bg-slate-950 flex justify-center items-center relative p-5  ">
                <p className="text-sm md:text-base text-white text-center font-light ">
                  Expole Dishes
                </p>
              </div>
            </div>
            <hr className=" w-0.5 h-1/2 border-r-2 border-black self-end " />
            <div className="w-1/3 md:w-1/4 flex flex-col justify-end items-center px-2 md:px-0 pb-4 md:pb-10">
              <Image src={imageAsset.people1} width={150} />
              <p className="text-xs text-center ">25K well reviews</p>
            </div>
          </div>
          {/* line horizontal */}
          <hr className="h-0.5 w-full border-t-2 border-black" />
          {/* cols 2 */}
          <div className=" flex h-[200px] relative">
            <div className="w-3/5 md:w-3/4 flex pb-10 pt-5 pr-5 md:pr-14">
              <p className="text-sm font-normal text-justify md:text-xl md:text-left">
                A restaurant is a business that prepares and serves food and
                drinks to customers. Meals are generally served and eaten on
                premises
              </p>
            </div>
            <hr className=" w-0.5 h-1/2 border-r-2 border-black self-start " />
            <div className="md:w-1/4 p-5 flex justify-center items-center ">
              <Image
                src={imageAsset.food9}
                isBlurred
                className="md:w-[400px] w-[150px] scale-x-[-1] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
