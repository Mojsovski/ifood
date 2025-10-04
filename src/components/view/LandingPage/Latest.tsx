import { Image } from "@heroui/react";
import { imageAsset } from "../../../assets/images/image";
import { LuArrowUpRight } from "react-icons/lu";
import { REGION_LIST } from "./LandingPage.constans";

function Latest() {
  return (
    <div className="md:px-10 my-24 ">
      {/* row 1 */}
      <div className="flex justify-center items-center mb-20">
        <h2 className="w-4/5 font-didot text-8xl uppercase text-center">
          View All Latest
        </h2>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-24">
          {REGION_LIST.slice(0, 2).map((item, index) => (
            <div key={index} className="w-[360px] flex flex-col gap-4 ">
              <p className="text-xl ">{item.desc}</p>
              <div className="my-3 ">
                <div className="relative flex items-center my-2">
                  <p className="text-xl text-justify ">{item.region}</p>
                  <LuArrowUpRight className="absolute size-9 -top-3 right-0" />
                </div>
                <hr className="border-t-2 border-black" />
              </div>
            </div>
          ))}
        </div>
        <div className="w-3/6 flex justify-center">
          <Image
            src={imageAsset.food7}
            isBlurred
            className="w-[350px] md:w-[500px] object-cover"
          />
        </div>
        <div className="flex flex-col gap-24">
          {REGION_LIST.slice(2, 4).map((item,index) => (
            <div key={index} className="w-[360px] flex flex-col gap-4 ">
              <p className="text-xl">{item.desc}</p>
              <div className="my-3 ">
                <div className="relative flex items-center my-2">
                  <p className="text-xl text-justify ">{item.region}</p>
                  <LuArrowUpRight className="absolute size-9 -top-3 right-0" />
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
