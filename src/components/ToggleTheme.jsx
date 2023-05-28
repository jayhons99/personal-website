import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ToggleTheme = ({ toggleTheme, isDark }) => {
  return (
    <div
      onClick={toggleTheme}
      className="w-[48px] h-[48px] rounded-md bg-primaryDark flex justify-center items-center dark:bg-primary relative top-6 left-6 hover:cursor-pointer"
    >
      {isDark ? (
        <LightModeIcon className="text-primaryDark" fontSize="large" />
      ) : (
        <DarkModeIcon className="text-light" fontSize="large" />
      )}
    </div>
  );
};
export default ToggleTheme;
