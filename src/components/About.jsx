import React from "react";

const About = () => {
  return (
    <div className="w-full py-10 h-screen">
      <div className="px-[21%] max-lg:px-[10%] max-sm:px-[6%]">
        <h1 className="font-bold text-4xl text-slate-800">About Me</h1>
        <div className="flex w-full gap-6 max-sm:flex-col">
          <div className="w-1/2 max-sm:w-full">
            <h1 className="font-semibold text-2xl mt-5 mb-3">
              Ayo Belajar <span className="font-bold">Coding,</span>
              <span className="">
                Mulai dari <span className="font-bold">Sekarang.</span>
              </span>
            </h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, illum in ut quaerat ad
              velit quod eaque consectetur, maiores, voluptate quos nisi possimus explicabo aut.
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="w-1/2 text-justify max-sm:w-full">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quis consequatur?
              Ipsa, maiores ratione ex fuga, dolores sequi assumenda velit, corporis totam facilis
              necessitatibus voluptatibus.
            </p>
            <div>
              <h1 className="font-semibold text-2xl py-3">
                Follow My <span className="font-bold">Social Media</span>
              </h1>
              <div className="flex gap-3">
                <div className="border border-neutral rounded-full p-2 hover:bg-neutral hover:shadow-xl transition-all stroke-neutral hover:stroke-slate-100">
                  <a href="https://github.com/zackyhafsa">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-github"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
                <div className="border border-neutral rounded-full p-2 hover:bg-neutral hover:shadow-xl transition-all stroke-neutral hover:stroke-slate-100">
                  <a href="https://www.facebook.com/zacky.hafsari.902?mibextid=vk8aRt">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-facebook"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                </div>
                <div className="border border-neutral rounded-full p-2 hover:bg-neutral hover:shadow-xl transition-all stroke-neutral hover:stroke-slate-100">
                  <a href="https://www.linkedin.com/in/zacky-h-1b53a8273">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
