"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
          I Build Full-Stack Web Experiences That Just Work.
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
          From responsive frontends to powerful backends, I specialize in crafting seamless, high-performance web applications. Whether it is designing intuitive user interfaces or architecting scalable server-side solutions, I combine creativity with technical precision to deliver digital products that are fast, functional, and built to last.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link href="/resume.pdf">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              Resume
            </button>
            </Link>
            <Link href="/contact">
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
            </Link>
            
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
