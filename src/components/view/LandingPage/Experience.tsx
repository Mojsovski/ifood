import { Image } from "@heroui/react";
import { imageAsset } from "../../../assets/images/image";

function Experience() {
  return (
    <div className="md:h-[630px] md:px-10 pb:20 flex flex-col md:flex-row relative ">
      {/* row 1 */}
      <div className="md:w-3/4 flex flex-col md:pr-7 ">
        <div className="flex pt-20 pb-10 items-center">
          <h1 className="uppercase font-didot text-5xl md:text-8xl text-center md:text-left leading-tight">
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
            className="md:w-[180px] w-[280px] object-cover"
          />
          <p className="text-xl ">
            But our menu doesn't stop at breakfast. we also offer a wide range
            of kebab plates
          </p>
          <div className="hidden w-1/2 md:flex justify-end">
            <a href="/" className=" underline text-xl ">
              View All
            </a>
          </div>
        </div>
      </div>
      {/* row 2 */}
      <div className="md:w-[650px] flex justify-center items-center ">
        <Image
          src={imageAsset.food2}
          isBlurred
          className="w-[200px] md:w-[500px] object-cover"
        />
      </div>
    </div>
  );
}

export default Experience;
