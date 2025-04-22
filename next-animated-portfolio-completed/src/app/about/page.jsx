"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/Perfect.jpg"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">About Me!</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
            Hey there! I am Mohammad Ali — not the boxer (though I do throw punches at bugs in my code). I'm a Full-Stack Developer who enjoys building websites that not only look good but also actually work. From pixel-perfect frontends to solid backends, I handle both sides like a good espresso — strong and balanced.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
            "Writing clean code, building cool stuff, and occasionally wondering why it worked on my machine"
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
             
            width="300" 
            height="150" 
            viewBox="0 0 370 114"
            fill="none">
              <path d="M3.40 31.24L3.40 31.24L4.52 30.12Q4.36 31.40 3.22 33.40Q2.08 35.40 1.04 36.76L1.04 36.76L-1.84 40.48L-4.08 43.24L-5.20 44.36Q-4.88 40.40-3.36 36.02Q-1.84 31.64 0.48 27.60Q2.80 23.56 5.44 19.96Q8.08 16.36 10.96 13.24L10.96 13.24L12.08 12.12Q12.24 12.04 12.46 11.88Q12.68 11.72 12.84 11.56Q13 11.40 13.20 11.28Q13.40 11.16 13.52 11.16Q13.64 11.16 13.76 11.32L13.76 11.32Q14 11.80 14.04 12.52Q14.08 13.24 13.94 13.96Q13.80 14.68 13.54 15.56Q13.28 16.44 13.04 17.04L13.04 17.04L12.48 18.40Q12.20 19.16 12.12 19.44L12.12 19.44Q10.32 24.60 8.68 30.48L8.68 30.48Q12.12 22.44 15.84 16.88L15.84 16.88Q16.32 16.12 16.96 15.40L16.96 15.40L18.36 13.76Q19.16 12.84 19.56 12.32L19.56 12.32L20.68 11.20Q21.04 10.96 21.66 10.46Q22.28 9.96 22.82 9.58Q23.36 9.20 23.88 9L23.88 9Q24.52 8.72 25.06 8.70Q25.60 8.68 25.98 8.92Q26.36 9.16 26.64 9.48Q26.92 9.80 27.10 10.36Q27.28 10.92 27.40 11.42Q27.52 11.92 27.56 12.66Q27.60 13.40 27.60 13.90Q27.60 14.40 27.56 15.12L27.56 15.12L27.52 16.16Q27.48 16.52 27.44 17.04L27.44 17.04Q27.40 17.28 27.40 17.36L27.40 17.36Q26.96 22.68 25.80 27.56Q24.64 32.44 22.26 37.42Q19.88 42.40 16.52 45.88L16.52 45.88L15.40 47Q15.24 47.04 14.94 47.20Q14.64 47.36 14.50 47.40Q14.36 47.44 14.16 47.32L14.16 47.32Q13.60 46.68 13.52 45.36Q13.44 44.04 13.76 42.58Q14.08 41.12 14.32 40.24Q14.56 39.36 14.76 38.88L14.76 38.88Q15.60 36.60 16.30 35.06Q17 33.52 18 32.02Q19 30.52 19.58 29.78Q20.16 29.04 21.84 27.08L21.84 27.08L24.52 23.92L25.64 22.80Q24.68 24 22.98 25.96Q21.28 27.92 20.70 28.66Q20.12 29.40 19.12 30.90Q18.12 32.40 17.42 33.94Q16.72 35.48 15.88 37.76L15.88 37.76Q15.72 38.24 15.46 39.12Q15.20 40 14.88 41.46Q14.56 42.92 14.64 44.24Q14.72 45.56 15.28 46.20L15.28 46.20Q15.36 46.28 15.50 46.28Q15.64 46.28 15.76 46.24L15.76 46.24L16.08 46.08Q16.28 45.96 16.40 45.92L16.40 45.92Q20.80 40.80 23.20 33.56Q25.60 26.32 26.28 18.48L26.28 18.48Q26.28 18.40 26.32 18.16L26.32 18.16Q26.36 17.64 26.40 17.28L26.40 17.28L26.44 16.24Q26.48 15.52 26.46 15.02Q26.44 14.52 26.42 13.78Q26.40 13.04 26.28 12.56Q26.16 12.08 25.98 11.50Q25.80 10.92 25.50 10.60Q25.20 10.28 24.84 10.04Q24.48 9.80 23.94 9.84Q23.40 9.88 22.76 10.12L22.76 10.12Q22.40 10.28 22 10.52Q21.60 10.76 21.36 10.96L21.36 10.96L20.64 11.48Q20.20 11.84 20.04 12L20.04 12Q17.60 14.84 16.96 15.76L16.96 15.76Q14.44 19.48 11.78 24.98Q9.12 30.48 7.16 36.08L7.16 36.08Q5.84 41.36 3.96 49.64L3.96 49.64L2.84 50.76Q4.92 41.40 6.78 34.36Q8.64 27.32 11 20.56L11 20.56Q11.08 20.32 11.36 19.60L11.36 19.60L11.92 18.20Q12.16 17.56 12.42 16.68Q12.68 15.80 12.80 15.10Q12.92 14.40 12.90 13.66Q12.88 12.92 12.64 12.44L12.64 12.44Q12.56 12.32 12.44 12.30Q12.32 12.28 12.16 12.36Q12 12.44 11.84 12.56L11.84 12.56L11.52 12.88Q11.32 13.04 11.20 13.12L11.20 13.12Q7.44 17.28 4.32 21.98Q1.20 26.68-1.18 32.32Q-3.56 37.96-4.04 42.92L-4.04 42.92L-3.56 42.32L-1.28 39.52Q-0.48 38.44 0.72 36.74Q1.92 35.04 2.58 33.68Q3.24 32.32 3.40 31.24ZM32.20 36.64L31.08 37.76Q29.16 39.52 27.16 40.36L27.16 40.36Q25.32 41.16 25.48 39.92L25.48 39.92Q25.56 39 26.76 37.08L26.76 37.08L27.88 35.96Q25.56 39.72 27.32 39.52L27.32 39.52Q28.68 39.36 31.32 37.40L31.32 37.40Q31.92 36.16 30.48 36.20L30.48 36.20Q30.12 36.20 29.24 36.32L29.24 36.32Q28.64 36.40 28.40 36.40L28.40 36.40L29.52 35.28Q29.64 35.28 30.76 35.12L30.76 35.12Q29.96 33.92 27.88 35.96L27.88 35.96L28.40 35.44L29.08 34.76Q29.36 34.48 29.74 34.14Q30.12 33.80 30.44 33.68Q30.76 33.56 31.08 33.52Q31.40 33.48 31.68 33.74Q31.96 34 32.12 34.52L32.12 34.52L31.60 35.04Q32.36 35.04 32.56 35.34Q32.76 35.64 32.20 36.64L32.20 36.64ZM38.28 18.12L39.24 13.72L40.36 12.60L39.44 16.88L38.44 21.44Q38.12 22.88 37.46 25.62Q36.80 28.36 36.28 30.14Q35.76 31.92 35.02 34.22Q34.28 36.52 33.48 38.52L33.48 38.52L36.36 34.88L37.48 33.76Q37.16 34.56 36.96 35.16Q36.76 35.76 36.78 36.26Q36.80 36.76 36.84 37.10Q36.88 37.44 37.22 37.74Q37.56 38.04 37.80 38.22Q38.04 38.40 38.68 38.60Q39.32 38.80 39.72 38.90Q40.12 39 41 39.20L41 39.20Q41.48 39.32 41.72 39.40L41.72 39.40L40.60 40.52Q40.36 40.48 39.84 40.36L39.84 40.36L38.64 40.08Q38.28 39.96 37.66 39.76Q37.04 39.56 36.80 39.40L36.80 39.40L36.20 38.96Q35.84 38.72 35.78 38.42Q35.72 38.12 35.66 37.68Q35.60 37.24 35.72 36.72Q35.84 36.20 36.12 35.52L36.12 35.52L33.24 39.16L32.12 40.28Q32.96 38.24 33.74 35.88Q34.52 33.52 35.04 31.70Q35.56 29.88 36.24 27.04L36.24 27.04L37.24 22.80L38.28 18.12ZM41.80 38.68L41.80 38.68Q44.24 38.24 48.64 37.12L48.64 37.12Q48.72 37.08 48.82 36.96Q48.92 36.84 49 36.76Q49.08 36.68 49.14 36.60Q49.20 36.52 49.20 36.48Q49.20 36.44 49.12 36.40L49.12 36.40Q46.24 35.76 41.80 38.68ZM50.60 37.48L48.48 38.04Q48 38.88 47.68 39.72L47.68 39.72L46.56 40.84Q47 39.64 47.96 38.16L47.96 38.16Q42.76 39.48 40.08 39.92L40.08 39.92L41.20 38.80Q46.84 34.52 50.24 35.28L50.24 35.28Q50.36 35.36 50.30 35.46Q50.24 35.56 50 35.80L50 35.80L49.68 36.12L49.08 37.04L51.72 36.36L50.60 37.48ZM53.28 33.36L53.28 33.36L54.40 32.24Q53.60 33.84 52.52 36.58Q51.44 39.32 51.84 39.88L51.84 39.88Q51.92 40 52.04 40.04Q52.16 40.08 52.38 40.14Q52.60 40.20 52.68 40.20L52.68 40.20Q54.36 38.32 56.04 36.16L56.04 36.16L56.08 36.12Q56.68 35.20 57.20 34.48L57.20 34.48L58.64 32.68L59.76 31.56L57.20 35.04Q56.68 35.84 56.36 36.44Q56.04 37.04 55.88 37.44Q55.72 37.84 55.76 38.04Q55.80 38.24 55.88 38.34Q55.96 38.44 56.28 38.36Q56.60 38.28 56.82 38.18Q57.04 38.08 57.52 37.84L57.52 37.84L58.28 37.40L59.08 36.92L59.68 36.56Q59.92 36.40 60.24 36.22Q60.56 36.04 60.80 35.92Q61.04 35.80 61.20 35.76L61.20 35.76Q61.24 35.72 61.38 35.68Q61.52 35.64 61.62 35.60Q61.72 35.56 61.84 35.54Q61.96 35.52 62.02 35.56Q62.08 35.60 62.12 35.68L62.12 35.68Q62.24 35.92 61.98 36.46Q61.72 37 61.84 37.24L61.84 37.24Q62.24 38.04 63.08 38.24Q63.92 38.44 64.64 38.26Q65.36 38.08 66.36 37.72Q67.36 37.36 67.52 37.32L67.52 37.32L66.40 38.44Q66.24 38.48 65.24 38.84Q64.24 39.20 63.52 39.38Q62.80 39.56 61.94 39.36Q61.08 39.16 60.72 38.36L60.72 38.36Q60.60 38.12 60.84 37.58Q61.08 37.04 61 36.80L61 36.80Q60.96 36.72 60.88 36.70Q60.80 36.68 60.72 36.72L60.72 36.72L60.48 36.72Q60.40 36.76 60.26 36.82Q60.12 36.88 60.08 36.88L60.08 36.88Q59.76 37 57.08 38.56L57.08 38.56Q54.64 40 54.60 39.16L54.60 39.16Q54.60 38.60 55.40 37.24L55.40 37.24Q54.08 38.80 52.72 40.24L52.72 40.24L51.60 41.36Q51.48 41.32 51.28 41.28Q51.08 41.24 50.94 41.18Q50.80 41.12 50.72 41L50.72 41Q50.32 40.44 51.38 37.72Q52.44 35 53.28 33.36ZM69.08 33.36L69.08 33.36L70.20 32.24Q69.40 33.84 68.32 36.58Q67.24 39.32 67.64 39.88L67.64 39.88Q67.72 40 67.84 40.04Q67.96 40.08 68.18 40.14Q68.40 40.20 68.48 40.20L68.48 40.20Q70.16 38.32 71.84 36.16L71.84 36.16L71.88 36.12Q72.48 35.20 73 34.48L73 34.48L74.44 32.68L75.56 31.56L73 35.04Q72.48 35.84 72.16 36.44Q71.84 37.04 71.68 37.44Q71.52 37.84 71.56 38.04Q71.60 38.24 71.68 38.34Q71.76 38.44 72.08 38.36Q72.40 38.28 72.62 38.18Q72.84 38.08 73.32 37.84L73.32 37.84L74.08 37.40L74.88 36.92L75.48 36.56Q75.72 36.40 76.04 36.22Q76.36 36.04 76.60 35.92Q76.84 35.80 77 35.76L77 35.76Q77.04 35.72 77.18 35.68Q77.32 35.64 77.42 35.60Q77.52 35.56 77.64 35.54Q77.76 35.52 77.82 35.56Q77.88 35.60 77.92 35.68L77.92 35.68Q78.04 35.92 77.78 36.46Q77.52 37 77.64 37.24L77.64 37.24Q78.04 38.04 78.88 38.24Q79.72 38.44 80.44 38.26Q81.16 38.08 82.16 37.72Q83.16 37.36 83.32 37.32L83.32 37.32L82.20 38.44Q82.04 38.48 81.04 38.84Q80.04 39.20 79.32 39.38Q78.60 39.56 77.74 39.36Q76.88 39.16 76.52 38.36L76.52 38.36Q76.40 38.12 76.64 37.58Q76.88 37.04 76.80 36.80L76.80 36.80Q76.76 36.72 76.68 36.70Q76.60 36.68 76.52 36.72L76.52 36.72L76.28 36.72Q76.20 36.76 76.06 36.82Q75.92 36.88 75.88 36.88L75.88 36.88Q75.56 37 72.88 38.56L72.88 38.56Q70.44 40 70.40 39.16L70.40 39.16Q70.40 38.60 71.20 37.24L71.20 37.24Q69.88 38.80 68.52 40.24L68.52 40.24L67.40 41.36Q67.28 41.32 67.08 41.28Q66.88 41.24 66.74 41.18Q66.60 41.12 66.52 41L66.52 41Q66.12 40.44 67.18 37.72Q68.24 35 69.08 33.36ZM83.40 38.68L83.40 38.68Q85.84 38.24 90.24 37.12L90.24 37.12Q90.32 37.08 90.42 36.96Q90.52 36.84 90.60 36.76Q90.68 36.68 90.74 36.60Q90.80 36.52 90.80 36.48Q90.80 36.44 90.72 36.40L90.72 36.40Q87.84 35.76 83.40 38.68ZM92.20 37.48L90.08 38.04Q89.60 38.88 89.28 39.72L89.28 39.72L88.16 40.84Q88.60 39.64 89.56 38.16L89.56 38.16Q84.36 39.48 81.68 39.92L81.68 39.92L82.80 38.80Q88.44 34.52 91.84 35.28L91.84 35.28Q91.96 35.36 91.90 35.46Q91.84 35.56 91.60 35.80L91.60 35.80L91.28 36.12L90.68 37.04L93.32 36.36L92.20 37.48ZM103.80 17.56L103.80 17.56Q99.96 22.72 97.64 34.56L97.64 34.56Q100.40 30.36 102.08 25.98Q103.76 21.60 103.80 17.56ZM98.12 38.60L97 39.72Q97.24 39.32 98.52 37.68Q99.80 36.04 100.16 35.08L100.16 35.08Q100.76 33.40 98.08 34.80L98.08 34.80Q97.88 34.92 97.64 35.08L97.64 35.08L97.52 35.24Q95.96 43.40 95.48 51.96L95.48 51.96L94.36 53.08Q94.80 44.80 96.28 36.84L96.28 36.84Q94.92 38.60 93.44 40.12L93.44 40.12L92.32 41.24Q89.64 41.92 91.52 39.76L91.52 39.76Q91.88 39.36 92.64 38.60L92.64 38.60L93 38.24Q90.56 40.80 93.32 40.16L93.32 40.16Q94.92 38.36 96.40 36.36L96.40 36.36L96.48 35.76Q94.32 37.16 93 38.24L93 38.24L94.12 37.12Q94.88 36.48 96.60 35.32L96.60 35.32Q99.24 22 103.80 17.36L103.80 17.36L104.92 16.24Q104.92 20.52 103.08 25.20Q101.24 29.88 98.20 34.28L98.20 34.28Q101.76 32.08 101.36 33.72L101.36 33.72L101.28 33.96Q100.96 34.92 99.66 36.56Q98.36 38.20 98.12 38.60L98.12 38.60ZM124.96 29.48L124.96 29.48Q126.16 25.76 127.84 21.56L127.84 21.56Q128.00 21.16 128.98 19.22Q129.96 17.28 130.42 15.80Q130.88 14.32 130.68 13.24L130.68 13.24Q130.64 13 130.48 12.90Q130.32 12.80 130.02 12.90Q129.72 13 129.50 13.10Q129.28 13.20 128.80 13.48L128.80 13.48L128.24 13.76Q124.80 17.60 122.42 22.26Q120.04 26.92 117.92 33L117.92 33L117.76 33.48Q121.96 30.96 124.96 29.48ZM124.76 30.16L124.76 30.16Q121.64 31.60 117.56 34.04L117.56 34.04L117.28 34.96Q120.84 33.56 124.00 32.76L124.00 32.76Q124.32 31.52 124.76 30.16ZM116.64 34.60L113.48 36.52L116.40 35.28L116.64 34.60ZM118.24 42.08L117.68 42.68L117.12 43.20L116.20 44.08Q115.76 44.52 115.26 44.86Q114.76 45.20 114.56 45.12L114.56 45.12Q114.32 45 114.32 43.98Q114.32 42.96 114.56 41.80L114.56 41.80Q114.92 39.92 116.16 36.08L116.16 36.08Q113.24 37.20 109.48 38.92L109.48 38.92L110.60 37.80L116.84 34.04Q119.08 27.60 121.66 22.70Q124.24 17.80 128.08 13.84L128.08 13.84L129.20 12.72L129.76 12.44L130.24 12.16L130.72 11.92Q130.96 11.80 131.12 11.76Q131.28 11.72 131.44 11.72Q131.60 11.72 131.68 11.82Q131.76 11.92 131.80 12.12L131.80 12.12Q132 13.20 131.54 14.68Q131.08 16.16 130.10 18.10Q129.12 20.04 128.96 20.44L128.96 20.44Q127.08 25.08 125.88 29.04L125.88 29.04Q127.80 28.16 129.64 27.48L129.64 27.48Q130.72 27.08 131.98 26.74Q133.24 26.40 134.80 26.04Q136.36 25.68 137.20 25.44L137.20 25.44L136.08 26.56Q135.24 26.80 133.68 27.16Q132.12 27.52 130.86 27.86Q129.60 28.20 128.52 28.60L128.52 28.60Q127.12 29.12 125.64 29.76L125.64 29.76L124.88 32.52Q129 31.52 132.96 31.36L132.96 31.36Q141.64 31 142.64 33.44L142.64 33.44Q143.64 35.96 137.72 41.72L137.72 41.72L137.60 41.84Q142.68 36.60 141.42 34.36Q140.16 32.12 131.84 32.48L131.84 32.48Q128.32 32.64 124.68 33.44L124.68 33.44Q124.04 36.16 123.82 38.36Q123.60 40.56 123.84 42.52Q124.08 44.48 125.18 45.58Q126.28 46.68 128.16 46.68L128.16 46.68Q131 46.68 134.36 44.44L134.36 44.44Q134.88 44.08 135.40 43.68L135.40 43.68L136.60 42.64Q137.28 42.08 137.60 41.84L137.60 41.84L136.60 42.84L135.56 43.76L134.32 44.76Q133.76 45.20 133.24 45.56L133.24 45.56Q129.88 47.80 127.04 47.80L127.04 47.80Q125.44 47.80 124.42 46.98Q123.40 46.16 122.98 44.84Q122.56 43.52 122.58 41.62Q122.60 39.72 122.90 37.80Q123.20 35.88 123.76 33.64L123.76 33.64Q120.56 34.44 117.04 35.76L117.04 35.76Q116.00 39.04 115.68 40.68L115.68 40.68Q115.44 41.84 115.44 42.86Q115.44 43.88 115.68 44L115.68 44Q115.92 44.04 116.40 43.70Q116.88 43.36 117.32 42.96L117.32 42.96L118.24 42.08ZM146.84 16.12L147.72 15.24L147.96 15.88L147.08 16.76L146.96 16.36Q145.88 18.28 145.10 21.94Q144.32 25.60 143.94 29.86Q143.56 34.12 143.38 37.14Q143.20 40.16 143.16 42.80L143.16 42.80L142.28 43.68Q142.36 40.72 142.56 37.44Q142.76 34.16 143.22 29.52Q143.68 24.88 144.62 21.20Q145.56 17.52 146.84 16.12L146.84 16.12ZM148.04 40.40L146.92 41.52Q146.92 40.76 146.88 40.30Q146.84 39.84 146.96 39.12Q147.08 38.40 147.14 38Q147.20 37.60 147.40 36.92L147.40 36.92L147.72 35.84Q147.84 35.48 148.12 34.80L148.12 34.80L148.52 33.76L148.96 32.64Q149.24 31.96 149.44 31.52L149.44 31.52L150.56 30.40Q150.56 30.52 150.30 33.70Q150.04 36.88 150.24 39.16Q150.44 41.44 151.36 41.72L151.36 41.72Q151.68 41.80 151.98 41.60Q152.28 41.40 152.64 41Q153.00 40.60 153.20 40.48L153.20 40.48L152.08 41.60Q151.88 41.76 151.52 42.14Q151.16 42.52 150.86 42.72Q150.56 42.92 150.24 42.84L150.24 42.84Q149.64 42.68 149.34 41.74Q149.04 40.80 149.06 39.10Q149.08 37.40 149.12 36.36Q149.16 35.32 149.32 33.48L149.32 33.48Q147.84 37.32 148.04 40.40L148.04 40.40ZM149.36 26.88Q149.60 27.12 149.60 27.44Q149.60 27.76 149.36 28Q149.12 28.24 148.80 28.24Q148.48 28.24 148.24 28Q148.00 27.76 148.00 27.44Q148.00 27.12 148.24 26.88Q148.48 26.64 148.80 26.64Q149.12 26.64 149.36 26.88Z"
              stroke="black"
              strokeWidth="2">
              </path>
            </svg>














              
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Nest.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Spring Boot
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                GraphQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Apollo
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Three.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                WebGL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Webpack
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vite
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Docker
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                AWS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EDUCATION
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  B.Tech CSE Hons - Full Stack Software Development
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                  CGPA - 7.8 {" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2022 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Lovely Professional University
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Intermediate
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                
                    Percentage - 90%{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2021 - 2022{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Super International School
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    High School{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Percentage - 93%{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2018 - 2019{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Super International School
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
            {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              CERTIFICATIONS
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Intelligence Tools for the Digital Age
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                  in-depth exploration of modern tools and technologies{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2023
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    ie.edu
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Full Stack through MERN
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                  built dynamic, full-featured web applications using the MERN stack{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    CipherSchools
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Prompt Engineering for ChatGPT{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                  Crafted effective prompts for leveraging the full capabilities of ChatGPT{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Vanderbilt University
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
          </div>
          
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
