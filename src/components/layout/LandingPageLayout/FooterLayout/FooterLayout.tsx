import { Button, Input } from "@heroui/react";

function FooterLayout() {
  return (
    <div className="px-10 md:px-20 mt-24 mb-5 flex flex-col gap-9">
      <h1 className="font-didot text-5xl md:text-8xl text-center uppercase">
        Let's connect with us
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
        <Input
          placeholder="enter your email"
          variant="bordered"
          radius="full"
          size="lg"
          className="md:w-[400px] "
          type="email"
        />
        <Button
          radius="full"
          size="lg"
          className="uppercase bg-black text-white"
        >
          Subscribe now
        </Button>
      </div>

      <div className="flex flex-col md:flex-row my-5 gap-5 text-center md:text-start ">
        <div className=" flex flex-col gap-3 md:pr-52 relative">
          <h1 className="font-didot text-5xl">Ifood</h1>
          <p className="flex-wrap">
            A restaurant is a business that prepare and serves food
          </p>
        </div>
        <div className="flex w-full justify-between flex-col md:flex-row">
          <div className="flex flex-col gap-5">
            <a href="" className="hover:text-gray-600">
              About Us
            </a>
            <a className="hover:text-gray-600" href="">
              Dishes
            </a>
            <a className="hover:text-gray-600" href="">
              Contact
            </a>
          </div>
          <div className="hidden md:flex flex-col gap-5">
            <a href="" className="hover:text-gray-600">
              Compare Plans
            </a>
            <a className="hover:text-gray-600" href="">
              Resources
            </a>
            <a className="hover:text-gray-600" href="">
              Healthy & Safety
            </a>
          </div>
          <div className="hidden md:flex flex-col gap-5">
            <a href="" className="hover:text-gray-600">
              Terms of service
            </a>
            <a className="hover:text-gray-600" href="">
              Privacy & Policy
            </a>
            <a className="hover:text-gray-600" href="">
              Request Beta
            </a>
          </div>
          <div className="hidden md:flex flex-col gap-5">
            <a href="" className="hover:text-gray-600">
              Facebook
            </a>
            <a className="hover:text-gray-600" href="">
              Instagram
            </a>
            <a className="hover:text-gray-600" href="">
              X
            </a>
          </div>
        </div>
      </div>
      <p className="text-center">
        Copyright © 2025 ifood | Mojsovski. All right reserved
      </p>
    </div>
  );
}
export default FooterLayout;
