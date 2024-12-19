import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

const LoadingSpinner = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`flex items-center justify-center min-h-screen ${
        theme === "light" ? "bg-gray-50" : "bg-black"
      }`}
    >
      <motion.div
        className={`w-12 h-12 border-4 rounded-full ${
          theme === "light"
            ? "border-blue-200 border-t-blue-600"
            : "border-blue-900 border-t-blue-400"
        }`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default LoadingSpinner;
