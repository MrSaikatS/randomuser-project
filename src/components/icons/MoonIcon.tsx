import { motion } from "framer-motion";
import { MoonStar } from "lucide-react";

const MoonIcon = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      <MoonStar />
    </motion.div>
  );
};

export default MoonIcon;
