import { Image } from "@heroui/react";
import { imageAsset } from "../../../assets/images/image";

function Category() {
  return (
    <div className="md:px-10 py:20 ">
      <div className="flex justify-between items-center mb-20">
        <h3 className="w-1/5 text-3xl font-medium">02</h3>
        <h2 className="w-3/5 font-didot text-8xl uppercase text-center">
          our category
        </h2>
        <p className="w-1/5 pl-28 text-sm">
          All grilled to perfection over charcoal our dips and sauces
        </p>
      </div>
      <div className="flex justify-between my-10">
        <Image
          src={imageAsset.food4}
          isBlurred
          className="w-[200px] md:w-[400px] object-cover"
        />
        <div>
          <div className=""></div>
        </div>
        <Image
          src={imageAsset.food5}
          isBlurred
          className="w-[200px] md:w-[400px] object-cover"
        />
      </div>
    </div>
  );
}

export default Category;
