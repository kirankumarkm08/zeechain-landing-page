import React from "react";

const Newsletter = () => {
  return (
    <div className=" mx-auto my-20 py-20 ">
      {/* <Image src={Newsletter_bg} alt="" className="w-full absolute" /> */}
      <div className=" flex flex-col  items-center pt-20 relative bg-Newsletter_bg bg-no-repeat bg-cover ">
        <h1 className="bg-text-top-buttom-linear bg-clip-text text-transparent text-40  font-semibold ">
          {" "}
          Newsletter Section{" "}
        </h1>
        <h3 className="font-normal text-24 leading-40 text-white-900">
          Subscribe to our newsletter
        </h3>
        <form className="mt-10">
          <input
            type="text"
            className="  bg-card_background rounded-full  p-4 max-w-[400px] md:w-[400px] outline-none text-white-300"
            placeholder="enter your email"
          />
          <button className="bg-purple-500 p-4 rounded-full text-white-300 uppercase font-semibold  text-sm md:text-16  ">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
