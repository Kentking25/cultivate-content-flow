
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Flask, TestTube, Beaker, Atom } from 'lucide-react';

export const Bubble = ({ size, delay, top, left }: { size: number, delay: number, top: string, left: string }) => {
  return (
    <motion.div
      className="absolute rounded-full bg-chemist-orange bg-opacity-10"
      style={{ 
        width: size, 
        height: size,
        top,
        left,
      }}
      animate={{
        y: [-20, 0, -20],
        opacity: [0.7, 0.9, 0.7],
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        delay,
      }}
    />
  );
};

export const FloatingBeaker = ({ className }: { className?: string }) => {
  return (
    <motion.div
      className={`${className}`}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <Beaker className="text-chemist-orange h-12 w-12 md:h-16 md:w-16" />
    </motion.div>
  );
};

export const AnimatedFlask = ({ className }: { className?: string }) => {
  return (
    <motion.div
      className={`${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Flask className="text-chemist-orange h-10 w-10 md:h-14 md:w-14" />
      <motion.div
        className="absolute bottom-1/4 left-1/4 right-1/4 bg-chemist-orange bg-opacity-30 rounded-b-full"
        style={{ height: '40%' }}
        animate={{
          height: ['40%', '60%', '40%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export const LabBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 opacity-5">
      <div className="absolute top-[10%] left-[20%]">
        <TestTube size={80} />
      </div>
      <div className="absolute top-[30%] left-[85%]">
        <Beaker size={100} />
      </div>
      <div className="absolute top-[70%] left-[15%]">
        <Flask size={90} />
      </div>
      <div className="absolute top-[60%] left-[80%]">
        <Atom size={120} />
      </div>
      <div className="absolute top-[85%] left-[40%]">
        <TestTube size={70} />
      </div>
    </div>
  );
};

export const FormulaDiagram = () => {
  return (
    <motion.div 
      className="relative mt-12 w-full max-w-2xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="border-2 border-chemist-orange rounded-lg p-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-chemist-silver p-4">
              <Beaker className="text-chemist-black h-8 w-8" />
            </div>
            <p className="mt-2 font-medium">Platform Science</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-chemist-silver p-4">
              <TestTube className="text-chemist-black h-8 w-8" />
            </div>
            <p className="mt-2 font-medium">Behavioral Psychology</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-chemist-silver p-4">
              <Atom className="text-chemist-black h-8 w-8" />
            </div>
            <p className="mt-2 font-medium">Fearless Creativity</p>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <div className="flex items-center">
            <div className="h-12 w-1 bg-chemist-orange"></div>
            <div className="h-1 w-16 bg-chemist-orange"></div>
            <div className="h-1 w-16 bg-chemist-orange"></div>
          </div>
        </div>
        <div className="mt-8 text-center bg-chemist-orange text-white p-4 rounded-md">
          <p className="font-bold text-lg">Repeatable Content Formulas</p>
        </div>
      </div>
    </motion.div>
  );
};
