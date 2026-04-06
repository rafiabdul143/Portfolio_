import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/rafi-portfolio/visits")
      .then((res) => res.json())
      .then((data) => setCount(data.value));
  }, []);

  return (
    <div className="flex items-center gap-2 text-red-500 font-semibold">
      
      {/* Blinking Eye */}
      <motion.div
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      >
        <Eye className="w-5 h-5 text-red-500" />
      </motion.div>

      {/* Visitor Count */}
      <span className="text-white">{count}</span>

    </div>
  );
};

export default VisitorCounter;