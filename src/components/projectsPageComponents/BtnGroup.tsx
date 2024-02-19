import { Box, Button } from "@mui/material";
import { useState } from "react";

interface BtnGroupProps {
  handleFilter: (deadline: string) => void;
}

const BtnGroup: React.FC<BtnGroupProps> = ({ handleFilter }) => {
  const [selectedButton, setSelectedButton] = useState<string>("All");

  const handleButtonClick = (value: string) => {
    setSelectedButton(value);
    handleFilter(value);
  };

  return (
    <Box
      display="flex"
      sx={{
        border: "1px solid #4C3575",
        borderRadius: "4px",
      }}
    >
      {(["All", "Started", "Approval", "Completed"] as const).map((title) => (
        <Button
          key={title}
          sx={{
            borderRadius: "0px",
            fontSize: "12px",
            backgroundColor: selectedButton === title ? "#4C3575" : "none",
            color: selectedButton === title ? "white" : "initial",
            "&:hover": {
              backgroundColor: selectedButton === title ? "#4C3575" : "none",
            },
          }}
          onClick={() => handleButtonClick(title)}
        >
          {title}
        </Button>
      ))}
    </Box>
  );
};

export default BtnGroup;
