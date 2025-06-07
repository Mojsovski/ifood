import { Image } from "@heroui/react";
import { imageAsset } from "../../../assets/images/image";

function Experience() {
  return (
    <div className="h-[630px] px-10  flex relative  justify-between">
      {/* row 1 */}
      <div className="w-3/4 flex flex-col pr-7">
        <div className="flex pt-20 pb-10 items-center">
          <h1 className="uppercase font-didot text-8xl text-left leading-tight">
            experience of real recipes
            <span className="inline-flex items-center ml-2">
              taste
              <Image
                alt="food 2"
                src={imageAsset.food12}
                width={100}
                height={100}
                isBlurred
                className="ml-4 object-cover"
              />
            </span>
          </h1>
        </div>
        <div className="flex border-t-2 border-black py-5 gap-5 items-center">
          <Image
            alt="food 3"
            src={imageAsset.food12}
            width={180}
            isBlurred
            className="object-cover "
          />
          <p className="text-xl ">
            But our menu doesn't stop at breakfast. we also offer a wide range
            of kebab plates
          </p>
          <div className="w-1/2 flex justify-end">
            <a href="/" className=" underline text-xl ">
              View All
            </a>
          </div>
        </div>
      </div>
      {/* row 2 */}
      <div className="w-[650px] flex justify-center items-center ">
        <Image
          width={500}
          height={500}
          src={imageAsset.food2}
          isBlurred
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default Experience;
