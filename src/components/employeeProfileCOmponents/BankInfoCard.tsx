import { Box, IconButton, Typography } from "@mui/material";
import { FaEdit } from "react-icons/fa";
import { bankInfoData } from "../../data/mockData";
import React from "react";

interface BankInfoCardProps {
  setIsBankModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BankInfoCard: React.FC<BankInfoCardProps> = ({ setIsBankModalOpen }) => {
  return (
    <Box
      borderRadius={1}
      border={1}
      borderColor="#F0F0F0"
      bgcolor="white"
      p={2}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Typography variant="subtitle1" fontWeight="bold">
          Bank Information
        </Typography>
        <IconButton onClick={() => setIsBankModalOpen(true)}>
          <FaEdit fontSize="20px" color="#4C3575" />
        </IconButton>
      </Box>
      {bankInfoData.map((info) => (
        <Box
          display="flex"
          mt={1}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography flex={1} variant="subtitle1" fontWeight="bold">
            {info.key}
          </Typography>
          <Typography flex={1} color="GrayText" variant="subtitle1">
            {info.value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default BankInfoCard;
