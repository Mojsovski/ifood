import { Button, Image } from "@heroui/react";
import { imageAsset } from "../../../assets/images/image";
import { LuArrowDownRight } from "react-icons/lu";

function Explore() {
  return (
    <div className="md:px-10 my-24">
      <div className="flex flex-col justify-center items-center mb-20 gap-5">
        <h2 className="w-4/5 font-didot text-8xl uppercase text-center">
          Explore Real Taste
        </h2>
        <p className="w-4/6 text-lg text-center">
          We offer a variety of homemade pastries and sweets, including the
          almond-topped semolina cakes called harissa and the indulgent kunafe
          topped with pistachios.
        </p>
      </div>
      <div className="flex justify-between px-16">
        <div className="w-1/5 flex flex-col justify-center">
          <Image
            src={imageAsset.food8}
            isBlurred
            className="w-[200px] md:w-[300px] object-cover"
          />
          <div className="my-3 relative space-y-3">
            <div className=" flex items-center my-2">
              <p className="text-xl text-justify font-medium">
                Hearty breakfast
              </p>
              <LuArrowDownRight className=" size-7 -top-3 right-0" />
            </div>
            <p className="">
              Which includes dishes like fatteh hummus loaded with almonds
            </p>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <Image
            src={imageAsset.food9}
            isBlurred
            className="w-[200px] md:w-[500px] object-cover"
          />
          <div className="absolute z-50 bottom-10 -right-10">
            <Button className="size-28 md:size-40 rounded-full bg-slate-950 hover:bg-slate-800 flex justify-center items-center p-5 text-sm md:text-base text-white text-center font-light ">
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
          <div className="my-3 relative space-y-3">
            <div className=" flex items-center my-2">
              <p className="text-xl text-justify font-medium">For vegetarian</p>
              <LuArrowDownRight className=" size-7 -top-3 right-0" />
            </div>
            <p className="">
              You'll find something to love on our breakfast menu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
