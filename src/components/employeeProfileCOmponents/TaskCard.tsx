import React from "react";
import { Box, Typography, Avatar, AvatarGroup } from "@mui/material";

interface TaskProps {
  id: number;
  category: string;
  name: string;
  avatar: number;
  priority: string;
}

const limitedTaskCards: TaskProps[] = [
  {
    id: 1,
    category: "UI/UX Design",
    name: "Social Geek Made",
    avatar: 2,
    priority: "In Progress",
  },
  {
    id: 2,
    category: "Website Design",
    name: "Practice to Perfect",
    avatar: 1,
    priority: "Review",
  },
];

const TaskCard: React.FC = () => {
  return (
    <Box bgcolor="white" my={2}>
      {limitedTaskCards.map((task) => (
        <Box
          key={task.id}
          bgcolor="white"
          mb={2}
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px;"
          display="flex"
          flexDirection="column"
          gap={2}
          p={2}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="subtitle2"
              borderRadius={1}
              px={1}
              py={0.4}
              bgcolor={
                task.category === "Quality Assurance"
                  ? "#A0D9B4"
                  : task.category === "Website Design"
                  ? "#A8D7E0"
                  : "#EEE5FF"
              }
              fontWeight="bold"
            >
              {task.category}
            </Typography>
            <Box
              alignItems="center"
              gap={1}
              display="flex"
              flexDirection="column"
            >
              <Box>
                <AvatarGroup
                  max={10}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  {Array.from(
                    { length: Number(task.avatar) },
                    (_, memberIndex) => (
                      <Avatar
                        key={memberIndex}
                        sx={{ height: "24px", width: "24px" }}
                        alt={`Member ${memberIndex + 1}`}
                        src={`https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar${
                          (memberIndex % 10) + 1
                        }.jpg`}
                      />
                    )
                  )}
                </AvatarGroup>
              </Box>
              <Typography
                borderRadius={2}
                variant="caption"
                color="white"
                fontWeight="bold"
                bgcolor={
                  task.priority === "Review"
                    ? "#DC3545"
                    : task.priority === "In Progress"
                    ? "#FFC107"
                    : "#198754"
                }
                px={1}
              >
                {task.priority}
              </Typography>
            </Box>
          </Box>
          <Typography variant="body2" color="GrayText">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
            aliquam!
          </Typography>
          <Box display="flex" justifyContent="end" alignItems="center">
            <Typography
              variant="caption"
              borderRadius={1}
              px={1}
              py={0.5}
              bgcolor="#F1C8DB"
              fontWeight="bold"
            >
              {task.name}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default TaskCard;
