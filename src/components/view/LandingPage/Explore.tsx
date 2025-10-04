import { Button, Image } from "@heroui/react";
import { imageAsset } from "../../../assets/images/image";
import { LuArrowDownRight } from "react-icons/lu";

function Explore() {
  return (
    <div className="md:px-5 lg:px-10 my-24">
      {/* col 1 */}
      <div className="flex flex-col justify-center items-center mb-20 gap-5">
        <h2 className=" font-didot text-5xl md:text-8xl uppercase text-center">
          Explore Real Taste
        </h2>
        <p className="w-5/6 md:w-4/6 text-base md:text-lg text-center">
          We offer a variety of homemade pastries and sweets, including the
          almond-topped semolina cakes called harissa and the indulgent kunafe
          topped with pistachios.
        </p>
      </div>
      {/* col 2 */}
      <div className="flex justify-between xl:px-16">
        <div className="w-1/5 flex flex-col justify-center">
          <Image
            src={imageAsset.food8}
            isBlurred
            className="w-[200px] md:w-[300px] object-cover"
          />
          <div className="my-3 relative md:space-y-3">
            <div className="flex items-center my-2">
              <p className="text-sm md:text-xl text-justify font-medium">
                Hearty breakfast
              </p>
              <LuArrowDownRight className=" size-7 -top-3 right-0" />
            </div>
            <p className="text-xs md:text-base">
              Which includes dishes like fatteh hummus loaded with almonds
            </p>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <Image
            src={imageAsset.food9}
            isBlurred
            className="w-[150px] sm:w-[240px] md:w-[300px] lg:w-[400px] xl:w-[500px] object-cover"
          />
          <div className="absolute z-10 -right-2 bottom-10 md:-right-10">
            <Button className="size-20 md:size-28 xl:size-40 rounded-full bg-slate-950 hover:bg-slate-800 flex justify-center items-center p-5 text-xs md:text-base text-white text-center font-light ">
              View Next
            </Button>
          </div>
        </div>
        <div className="w-1/5 flex flex-col justify-center">
          <Image
            src={imageAsset.food11}
            isBlurred
            className="w-[200px] md:w-[300px] object-cover"
          />
          <div className="my-3 relative md:space-y-3">
            <div className=" flex items-center my-2">
              <p className="text-base md:text-xl text-justify font-medium">For vegetarian</p>
              <LuArrowDownRight className=" size-7 -top-3 right-0" />
            </div>
            <p className="text-xs md:text-base">
              You'll find something to love on our breakfast menu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
