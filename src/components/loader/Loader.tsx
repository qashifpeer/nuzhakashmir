"use client";

import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex flex-col items-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full"
        />
        <p className="mt-4 text-lg font-semibold text-gray-700">Loading...</p>
      </motion.div>
    </div>
  );
};

export default Loader;
