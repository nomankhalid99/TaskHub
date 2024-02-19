import { Icon } from "@mui/material";
import { CustomButtonProps } from "../../constants/types";

const CustomButton = ({
  title,
  handleClick,
  btnType,
  textStyles,
  containerStyles,
  leftIcon,
  rightIcon,
}: CustomButtonProps) => {
  return (
    <button
      type={btnType || "button"}
      className={`flex flex-row relative justify-center items-center outline-none ${containerStyles}`}
      onClick={handleClick}
    >
      {leftIcon && (
        <Icon sx={{ fontSize: 15 }} className="mr-2">
          {leftIcon}
        </Icon>
      )}
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <Icon sx={{ fontSize: 15 }} className="ml-1">
          {rightIcon}
        </Icon>
      )}
    </button>
  );
};

export default CustomButton;
