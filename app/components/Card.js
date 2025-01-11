"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const Card = ({ title, description, color }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  console.log(scrollYProgress);
  return (
    <div className="cardContainer" ref={containerRef}>
      <div
        className="card flex justify-between items-center gap-5 p-5"
        style={{ backgroundColor: color }}
      >
        <div className="flex-1">
          {" "}
          <h3 className="text-4xl py-3 font-semibold">{title}</h3>
          <p>{description}</p>
        </div>
        <div className="imageContainer">
          <motion.div
            className="flex-1 inner"
            style={{
              scale,
            }}
          >
            <Image
              className="rounded-xl object-cover"
              alt="image"
              src={
                "https://t4.ftcdn.net/jpg/05/62/02/41/360_F_562024161_tGM4lFlnO0OczLYHFFuNNdMUTG9ekHxb.jpg"
              }
              width={500}
              height={500}
            ></Image>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Card;
