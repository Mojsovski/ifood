import { Image } from "@heroui/react";
import { imageAsset } from "../../../assets/images/image";
import { LuArrowUpRight } from "react-icons/lu";
import { REGION_LIST } from "./LandingPage.constans";

function Latest() {
  return (
    <div className="md:px-10 py-20 ">
      {/* row 1 */}
      <div className="flex justify-center items-center mb-20">
        <h2 className="font-didot text-5xl md:text-8xl uppercase text-center">
          View All Latest
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="flex md:flex-col gap-10 md:gap-24">
          {REGION_LIST.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className="relative h-[175px] w-[150px] md:w-[250px] xl:w-[360px] flex flex-col gap-4 justify-between "
            >
              <p className="text-sm md:text-xl">{item.desc}</p>
              <div className="my-3 ">
                <div className="relative flex items-center my-2">
                  <h2 className="text-base md:text-xl text-justify ">
                    {item.region}
                  </h2>
                  <LuArrowUpRight className="absolute size-5 md:size-9 -top-3 right-0" />
                </div>
                <hr className="border-t-2 border-black" />
              </div>
            </div>
          ))}
        </div>
        
          <Image
            src={imageAsset.food7}
            isBlurred
            className="w-[270px] md:w-[350px] xl:w-[500px] object-cover"
          />
  
        <div className="flex md:flex-col gap-10 md:gap-24">
          {REGION_LIST.slice(2, 4).map((item, index) => (
            <div
              key={index}
              className=" relative h-[175px] w-[150px] md:w-[250px] xl:w-[360px] flex flex-col gap-4 justify-between"
            >
              <p className="text-sm md:text-xl">{item.desc}</p>
              <div className="my-3 ">
                <div className="relative flex items-center my-2">
                  <h2 className="text-base md:text-xl text-justify ">
                    {item.region}
                  </h2>
                  <LuArrowUpRight className="absolute size-5 md:size-9 -top-3 right-0" />
                </div>
                <hr className="border-t-2 border-black" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Latest;
