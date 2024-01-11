import React from "react";
import About from "./About";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-[url('gradient.avif')] bg-cover pt-32 max-lg:pt-10">
      <div className="hero px-[20%] max-lg:px-[10%] max-md:pt-20 max-sm:px-[3%]">
        <div className="hero-content flex-col gap-8 lg:flex-row-reverse">
          <motion.h1
            className="text-5xl font-bold max-lg:text-center max-md:text-4xl lg:hidden md:pt-10"
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome To My Website!
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src="Zacky.jpg" className="max-w-sm rounded-lg shadow-2xl max-lg:w-60" />
          </motion.div>
          <div>
            <motion.h1
              className="text-5xl font-bold max-lg:text-center max-md:text-4xl max-lg:hidden "
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Welcome To My Website!
            </motion.h1>
            <motion.p
              className="pt-3 font-semibold"
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              My Name is, <span className="block text-3xl font-bold">Zacky Hafsari</span>
            </motion.p>
            <motion.p
              className="font-semibold text-lg"
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              Student.
            </motion.p>
            <motion.p
              className="text-justify py-2"
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi eum odit at maxime
              saepe voluptatibus alias sint. Ipsa, cumque recusandae!
            </motion.p>
            <motion.button
              className="btn btn-neutral mt-4 text-slate-100"
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
            >
              Contact Me
            </motion.button>
          </div>
        </div>
      </div>
      <About />
    </div>
  );
};

export default Hero;
