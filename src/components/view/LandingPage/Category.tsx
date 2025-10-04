import { Image, Button } from "@heroui/react";
import { imageAsset } from "../../../assets/images/image";
import { MENU_ITEMS } from "./LandingPage.constans";
import { LuArrowUpRight } from "react-icons/lu";

function Category() {
  return (
    <div className="md:px-10 my-24 ">
      {/* row 1 */}
      <div className="flex justify-between items-center mb-20">
        <h3 className="w-1/5 text-3xl font-medium">02</h3>
        <h2 className="w-3/5 font-didot text-8xl uppercase text-center">
          our category
        </h2>
        <p className="w-1/5 pl-28 text-sm">
          All grilled to perfection over charcoal our dips and sauces
        </p>
      </div>
      {/* row 2 */}
      <div className="flex justify-between mb-20">
        <Image
          src={imageAsset.food4}
          isBlurred
          className="w-[200px] md:w-[300px] object-cover"
        />
        <div className="flex flex-col">
          {MENU_ITEMS.map((item, index) => (
            <div key={index} className="w-[500px] ">
              <div className="my-3 relative">
                <p className="text-xl ">{item.label}</p>
                <LuArrowUpRight className="absolute size-9 -top-3 right-0" />
              </div>
              <hr className="border-t-2 border-black" />
            </div>
          ))}
        </div>
        <Image
          src={imageAsset.food5}
          isBlurred
          className="w-[200px] md:w-[300px] object-cover"
        />
      </div>
      {/* row 3 */}
      <div className="flex justify-between items-center gap-20  ">
        <p className="w-3/6 text-xl">
          We understand that every event is unique, and we work closely with you
          to customize our catering menu to suit ypur specific needs.
        </p>
        <div className="w-3/6 flex justify-center">
          <Image
            src={imageAsset.food6}
            isBlurred
            className="w-[200px] md:w-[300px] object-cover"
          />
        </div>
        <div className="w-3/6 flex justify-center">
          <Button className="size-28 md:size-40 rounded-full bg-slate-950 hover:bg-slate-800 flex justify-center items-center relative p-5 text-sm md:text-base text-white text-center font-light ">
            Explore More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Category;
