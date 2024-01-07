import React from "react";

const Hero = () => {
  return (
    <div className="bg-saya bg-cover">
      <div className="hero min-h-screen px-[20%] max-lg:px-[10%] max-md:pt-20 max-sm:px-[3%] backdrop-blur-xl">
        <div className="hero-content flex-col gap-8 lg:flex-row-reverse">
          <h1 className="text-5xl font-bold max-lg:text-center max-md:text-4xl lg:hidden md:pt-10">
            Welcome To My Website!
          </h1>
          <img src="Zacky.jpg" className="max-w-sm rounded-lg shadow-2xl max-lg:w-60" />
          <div>
            <h1 className="text-5xl font-bold max-lg:text-center max-md:text-4xl max-lg:hidden ">
              Welcome To My Website!
            </h1>
            <p className="pt-3 font-semibold">
              My Name is, <span className="block text-3xl font-bold">Zacky Hafsari</span>
            </p>
            <p className="font-semibold text-lg">Student.</p>
            <p className="text-justify py-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi eum odit at maxime
              saepe voluptatibus alias sint. Ipsa, cumque recusandae!
            </p>
            <button className="btn btn-primary mt-4">Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
