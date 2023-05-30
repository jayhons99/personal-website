import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { AnimatePresence, motion } from "framer-motion";

const ToggleTheme = ({ toggleTheme, isDark }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={isDark}
          initial={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: 10 }}
          transition={{ duration: 0.3 }}
          onClick={toggleTheme}
          className="w-[48px] h-[48px] rounded-md bg-primaryDark flex justify-center items-center dark:bg-primary relative top-6 left-6 hover:cursor-pointer"
        >
          {isDark ? (
            <LightModeIcon className="text-primaryDark" fontSize="large" />
          ) : (
            <DarkModeIcon className="text-light" fontSize="large" />
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
export default ToggleTheme;
