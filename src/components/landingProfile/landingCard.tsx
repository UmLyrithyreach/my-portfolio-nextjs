import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'
import { personalInfo } from '@/data/portfolio';
import { useInMobile } from '../hooks/useInMobile';
import useIsDark from '../hooks/useIsDark';
import clsx from 'clsx';

const ProfileImage = () => {
  const isMobile = useInMobile(768)
  const isDark = useIsDark();

  return (
    <div className={clsx('relative w-full max-w-lg mx-auto h-96 flex items-center justify-center scale-100', {
      'scale-50': isMobile
    })}>
      {/* Decorative Elements */}

      {/* Floating Circles */}
      <motion.div
        className="absolute top-8 left-8 w-6 h-6 bg-blue-500 rounded-full opacity-70"
        animate={{
          y: [0, -10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-16 right-12 w-4 h-4 bg-purple-500 rounded-full opacity-60"
        animate={{
          y: [0, 15, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-20 left-16 w-8 h-8 bg-pink-400 rounded-full opacity-50"
        animate={{
          y: [0, -20, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Geometric Shapes */}
      <motion.div
        className="absolute top-12 right-8 w-12 h-12 border-2 border-orange-400 rotate-45 opacity-40"
        animate={{
          rotate: [45, 90, 45],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute bottom-12 right-20 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-60"
        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Dotted Lines */}
      <motion.div
        className="absolute top-1/4 left-4 w-16 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-30"
        animate={{
          scaleX: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-4 w-12 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-40"
        animate={{
          scaleX: [1, 0.3, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Background Gradient Ring */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-20 blur-xl"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Main Profile Container */}
      <motion.div
        className="relative z-10 w-72 h-72 bg-gradient-to-br from-purple-400 to-orange-600 rounded-full overflow-hidden shadow-2xl border-4 border-white"
        initial={{ y: 30, opacity: 0 }}  // ← Slide from bottom instead
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Inner glow effect */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-t from-transparent to-white opacity-20" />

        {/* Profile Image */}
        <div className='w-full h-full flex items-center justify-center'> {/* Minimal padding */}
          {!isDark ? (
            <Image
              className="w-68 h-68 object-cover rounded-full"
              src={"/sitting_image.jpg"}
              alt={personalInfo.name}
              width={280}
              height={280}
              priority
            />
          ) : (
            <Image
              className="w-68 h-68 object-cover rounded-full"
              src={"/image.png"}
              alt={personalInfo.name}
              width={280}
              height={280}
              priority
            />
          )}
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10" />
      </motion.div>

      {/* Orbiting Elements */}
      <motion.div
        className="absolute w-80 h-80 border border-gray-300 rounded-full opacity-20"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-yellow-400 rounded-full"
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      <motion.div
        className="absolute w-96 h-96 border border-gray-200 rounded-full opacity-10"
        animate={{
          rotate: [0, -360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <motion.div
          className="absolute top-1/4 right-0 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-green-400 rounded-full"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      {/* Code-like decorative elements */}
      <motion.div
        className="absolute top-8 left-1/2 transform -translate-x-1/2 text-xs font-mono text-muted-foreground opacity-60"
        animate={{
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        &lt;developer/&gt;
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-mono text-muted-foreground opacity-60"
        animate={{
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        {`console.log("Hello World")`}
      </motion.div>

      {/* Corner brackets */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-gray-400 opacity-30" />
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-gray-400 opacity-30" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-gray-400 opacity-30" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-gray-400 opacity-30" />
    </div>
  );
};

export default ProfileImage;
