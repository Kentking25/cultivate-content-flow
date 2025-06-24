
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, TestTube, Beaker, Atom, Play, Award, Users } from 'lucide-react';

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
      <Atom className="text-chemist-orange h-12 w-12 md:h-16 md:w-16" />
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
      <FlaskConical className="text-chemist-orange h-10 w-10 md:h-14 md:w-14" />
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
        <FlaskConical size={90} />
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
      <div className="border-2 border-chemist-orange rounded-lg p-8 bg-chemist-black bg-opacity-90 text-white">
        <div className="space-y-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-chemist-orange bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Play className="text-chemist-orange h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Podcast Appearances</h3>
            <p className="text-gray-300">Featured on 20+ top marketing podcasts</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-chemist-orange bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-chemist-orange h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Industry Recognition</h3>
            <p className="text-gray-300">Award-winning content strategies</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-chemist-orange bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-chemist-orange h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Community Access</h3>
            <p className="text-gray-300">Join 1,200+ content creators</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
