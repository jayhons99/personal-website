"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const variants = {
  initial: { opacity: 0, translateY: 10 },
  enter: { opacity: 1, translateY: 0 },
  exit: { opacity: 0, translateY: -10 },
};

const PageWrapper = ({ children }) => {
  const path = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={path}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
export default PageWrapper;
