import { Box, Divider, Typography } from "@mui/material";
import { taskAllocatedData } from "../../data/mockData";
import CustomButton from "../global/CustomButton";
import { useState } from "react";

const TaskAllocated: React.FC = () => {
  const [allocatedMembers, setAllocatedMembers] = useState(taskAllocatedData);

  const handleRemoveMember = (memberId: number) => {
    const updatedMembers = allocatedMembers.filter((member) => member.id !== memberId);
    setAllocatedMembers(updatedMembers);
  };
  return (
    <Box
      bgcolor="white"
      display="flex"
      border={1}
      borderColor="#F0F0F0"
      flexDirection="column"
      gap={2}
      borderRadius={2}
      padding="15px"
    >
      <Typography variant="h6" fontWeight="bold">
        Allocated Task Members
      </Typography>
      <Box height={260} sx={{ overflowY: "scroll" }}>
        {allocatedMembers.map((allocate) => (
          <Box display="flex" flexDirection="column" gap={2}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box display="flex" alignItems="center" gap={2}>
                <Box>{allocate.avatar}</Box>
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {allocate.name}
                  </Typography>
                  <Typography variant="subtitle2" color="GrayText">
                    {allocate.job}
                  </Typography>
                </Box>
              </Box>
              <CustomButton
                title="Remove"
                containerStyles="py-2 rounded-md px-5 bg-[#F1C8DB]"
                handleClick={() => handleRemoveMember(allocate.id)}
              />
            </Box>
            <Divider sx={{ mb: 2 }} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TaskAllocated;
