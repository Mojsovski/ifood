import { Image } from "@heroui/react";
import { imageAsset } from "../../../assets/images/image";

function LandingPage() {
  return (
    <div className="w-full flex flex-col">
      <div className="my-16 flex-wrap flex flex-col justify-center items-center ">
        <h1 className=" flex-wrap font-didot uppercase text-6xl md:text-9xl text-center flex items-center justify-center gap-4">
          <span>simple</span>
          <span className="">
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
      <div className="flex flex-row">
        <div className="w-1/4 ">
          <Image
            src={imageAsset.food2}
            width={300}
            height={300}
            className="object-cover"
            isBlurred
          />
        </div>
        <div className="flex flex-col">
          <div className="h-[1px] w-96 bg-black mx-4" />
          {/* <hr className="w-full border-b-2 border-black" /> */}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
