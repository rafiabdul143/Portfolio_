
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { useEffect, useState, useRef } from "react";
const VisitorCounter = () => {

  const [count, setCount] = useState(0);
const hasFetched = useRef(false);
  
  useEffect(() => {
  const hasVisited = localStorage.getItem("visited");

  const fetchData = async () => {
    try {
      if (!hasVisited) {
        // Immediately mark visited BEFORE API call
        localStorage.setItem("visited", "true");

        const res = await fetch("http://localhost:5000/visit");
        const data = await res.json();
        setCount(data.count);
      } else {
        const res = await fetch("http://localhost:5000/count");
        const data = await res.json();
        setCount(data.count);
      }
    } catch (err) {
      console.error(err);
    }
  };

  fetchData();
}, []);
  return (
    <div className="flex items-center gap-2 font-semibold">
      {/* Blinking Eye */}
      <motion.div
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      >
        <Eye className="w-5 h-5 text-red-500" />
      </motion.div>

      {/* Visitor Count */}
      <span className="text-red-500">{count}</span>
    </div>
  );
};

export default VisitorCounter;