"use client";

import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import Typewriter from "typewriter-effect";
import { useInMobile } from "./hooks/useInMobile";
import Image from "next/image";
import useIsDark from "./hooks/useIsDark";

const HeroSection: React.FC = () => {
  const isMobile = useInMobile(768);
  const isDark = useIsDark();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0"
    >
      {/* Background geometric shapes */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Floating dots pattern */}
        <div className="absolute top-20 right-20 w-32 h-32 opacity-20">
          <div className="grid grid-cols-8 gap-2">
            {Array.from({ length: 64 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-1 bg-orange rounded-full"
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.05,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>
        </div>

        {/* Large triangle */}
        <motion.div
          className="absolute top-32 right-32 w-0 h-0 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-b-[150px] border-b-orange opacity-80"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Small floating shapes */}
        <motion.div
          className="absolute top-40 left-20 w-4 h-4 bg-orange rounded-full"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-40 left-40 w-6 h-6 border-2 border-orange rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-8 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image with Geometric Background - Mobile First */}
          <motion.div
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Large orange triangle background */}
              <motion.div
                className="absolute -top-10 -left-10 w-0 h-0 border-l-[150px] border-l-transparent border-r-[150px] border-r-transparent border-b-[200px] border-b-orange opacity-90"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ amount: 0.3 }}
              >
                {!isMobile ? (
                  <>
                    {/* Desktop Profile Image */}
                    <div className="flex items-end">
                      {isDark ? (
                        <motion.div
                          className="w-100 h-100"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                        >
                          <div>
                            <Image
                              src="/Dark_Card.PNG"
                              alt="Lyrithyreach"
                              width={200}
                              height={200}
                              className="rounded-xl"
                            />
                          </div>

                          <motion.div
                            className="absolute top-[10px] left-1/2 translate-x-1/2 rounded-xl"
                          >
                            <Image
                              src="/LyrithyreachUm_Dark.PNG"
                              alt="Lyrithyreach"
                              fill
                              className="rounded-xl scale-200"
                            />
                          </motion.div>
                        </motion.div>
                      ) : (
                        <div
                          className="flex justify-center"
                        >
                          <Image
                            src="/Landing.PNG"
                            alt="Lyrithyreach"
                            width={200}
                            height={200}
                            className="rounded-xl scale-300"
                          />
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    {/* Mobile Profile Image */}
                    {isDark ? (
                      <div className="absolute -top-[20px] left-[calc(50%+25px)] -translate-x-1/2 z-20">
                        <Image
                          src="/LandingPageProfile.PNG"
                          alt="Lyrithyreach"
                          width={300}
                          height={300}
                          className="scale-100"
                        />
                      </div>
                    ) : (
                      <div className="absolute top-[72.3px] left-[calc(50%+20px)] -translate-x-1/2 z-20">
                        <Image
                          src="/LandingPageProfile.PNG"
                          alt="Lyrithyreach"
                          width={300}
                          height={300}
                          className="rounded-3xl scale-100"
                        />
                      </div>
                    )}
                  </>
                )}
              </motion.div>

              {/* Floating geometric elements around image */}
              <motion.div
                className="absolute -top-5 -right-5 w-8 h-8 bg-orange rounded-full"
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute -bottom-5 -left-5 w-6 h-6 border-2 border-orange rotate-45"
                animate={{
                  rotate: [45, 135, 45],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="space-y-6 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hey, I&apos;m {personalInfo.name}, an{" "}
              <span className="block">intuitive</span>
              <span className="text-orange font-bold">
                <Typewriter
                  options={{
                    strings: [personalInfo.title],
                    autoStart: true,
                    loop: true,
                    delay: 80,
                    cursor: "_",
                    deleteSpeed: 30,
                  }}
                />
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {personalInfo.description}
            </motion.p>

            <motion.p
              className="text-base text-muted-foreground leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {personalInfo.specialization}
            </motion.p>

            <motion.p
              className="text-lg font-medium text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              {personalInfo.callToAction}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;