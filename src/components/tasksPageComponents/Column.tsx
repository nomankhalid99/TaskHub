import React from "react";
import { Typography, Box, Avatar, AvatarGroup } from "@mui/material";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { TiFlag } from "react-icons/ti";
import { HiMiniPaperClip } from "react-icons/hi2";
import { MdMessage } from "react-icons/md";

interface Task {
  id: number;
  category: string;
  name: string;
  avatar: number;
  priority: string;
  date: string;
  message: number;
  attach: number;
}

interface ColumnProps {
  column: {
    id: string;
    title: string;
    taskIds: number[];
  };
  tasks: Task[];
}

const Column: React.FC<ColumnProps> = ({ column, tasks }) => {
  return (
    <>
      <Box my={3}>
        <Typography variant="h6" fontWeight="bold">
          {column.title}
        </Typography>
      </Box>

      <Droppable droppableId={column.id}>
        {(droppableProvided) => (
          <Box
            flex={1}
            flexDirection="column"
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={`${task.id}`} index={index}>
                {(draggableProvided) => (
                  <Box
                    bgcolor="white"
                    mb={2}
                    sx={{
                      cursor: "all-scroll",
                      borderBottom: `5px solid ${
                        column.id === "column-1"
                          ? "#FFC107"
                          : column.id === "column-2"
                          ? "#FFAA8A"
                          : "#28A745"
                      }`,
                    }}
                    boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px;"
                    display="flex"
                    flexDirection="column"
                    gap={2}
                    p={2}
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.draggableProps}
                    {...draggableProvided.dragHandleProps}
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
                            task.priority === "Medium"
                              ? "#FFC107"
                              : task.priority === "High"
                              ? "#DC3545"
                              : "#198754"
                          }
                          px={1}
                        >
                          {task.priority}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body2" color="GrayText">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Minus, aliquam!
                    </Typography>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Box display="flex" alignItems="center" gap={1}>
                        <TiFlag />
                        <Typography fontWeight={200} variant="body2">
                          {task.date}
                        </Typography>
                        <MdMessage />
                        <Typography variant="body2">{task.message}</Typography>
                        <HiMiniPaperClip />
                        <Typography variant="body2">{task.attach}</Typography>
                      </Box>
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
                )}
              </Draggable>
            ))}
            {droppableProvided.placeholder}
          </Box>
        )}
      </Droppable>
    </>
  );
};

export default Column;
