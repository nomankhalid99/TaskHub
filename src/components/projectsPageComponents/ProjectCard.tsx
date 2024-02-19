import React from "react";
import {
  Box,
  Avatar,
  AvatarGroup,
  Divider,
  LinearProgress,
  IconButton,
  Typography,
  Grid,
} from "@mui/material";
import { FaEdit, FaRegClock } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";
import CustomButton from "../global/CustomButton";
import { ProjectCardProps } from "../../constants/types";
import { FaMobileAlt } from "react-icons/fa";
import { IoColorPaletteSharp } from "react-icons/io5";
import { BsBezier } from "react-icons/bs";
import { BsDiagram3Fill } from "react-icons/bs";
import { TbCheckbox } from "react-icons/tb";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { BsClipboard2Check } from "react-icons/bs";

interface ProjectCardPropsExtended extends ProjectCardProps {
  onEditClick?: () => void;
  onDeleteClick?: (index: number) => void;
  onInviteClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardPropsExtended> = ({
  id,
  index,
  icon,
  name,
  title,
  deadline,
  progValue,
  details,
  onEditClick,
  onDeleteClick,
  onInviteClick,
}) => (
  <Box
    key={id}
    border={1}
    borderColor="#F0F0F0"
    bgcolor="white"
    position="relative"
    borderRadius={2}
    p={3}
  >
    <Box
      borderRadius={2}
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -310%)",
      }}
      bgcolor={
        icon.type === FaMobileAlt
          ? "#FFE28C"
          : icon.type === IoColorPaletteSharp
          ? "#EEE5FF"
          : icon.type === BsBezier
          ? "#A8D7E0"
          : icon.type === TbCheckbox
          ? "#A0D9B4"
          : icon.type === MdOutlineDeveloperMode
          ? "#FFAA8A"
          : icon.type === BsDiagram3Fill
          ? "#CF9EAC"
          : icon.type === BsClipboard2Check
          ? "#EEE5FF"
          : "#A7DAFF"
      }
      padding={2}
    >
      {icon}
    </Box>
    <Typography mt={2} color="GrayText" variant="body2" textAlign="center">
      {name}
    </Typography>
    <Box
      display="flex"
      mt={2}
      alignItems="center"
      justifyContent="space-between"
    >
      <Typography fontWeight="bold">{title}</Typography>
      {onEditClick && onDeleteClick && (
        <Box
          display="flex"
          sx={{
            border: "1px solid #F0F0F0",
            borderRadius: "4px",
          }}
        >
          {onEditClick && (
            <IconButton
              sx={{
                borderRadius: "4px 0px 0px 4px",
                color: "#198754",
                "&:hover": { background: "#E05170", color: "white" },
              }}
              onClick={onEditClick}
            >
              <FaEdit fontSize="16px" />
            </IconButton>
          )}
          {onDeleteClick && (
            <IconButton
              sx={{
                borderRadius: "0px 4px 4px 0px",
                color: "#E3654B",
                "&:hover": { background: "#E05170", color: "white" },
              }}
              onClick={() => onDeleteClick && onDeleteClick(index)}
            >
              <MdDelete fontSize="16px" />
            </IconButton>
          )}
        </Box>
      )}
    </Box>
    <Box display="flex" alignItems="self-start" mt={2}>
      <AvatarGroup max={20} sx={{ display: "flex", alignItems: "center" }}>
        {onInviteClick && (
          <IconButton
            sx={{ mr: -1, zIndex: 2, color: "#4C3575" }}
            aria-label="add-member"
            onClick={onInviteClick}
          >
            <FaPlusCircle />
          </IconButton>
        )}
        {Array.from({ length: Number(details[2].detail) }, (_, memberIndex) => (
          <Avatar
            key={memberIndex}
            sx={{ height: "24px", width: "24px" }}
            alt={`Member ${memberIndex + 1}`}
            src={`https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar${
              (memberIndex % 5) + 1
            }.jpg`}
          />
        ))}
      </AvatarGroup>
    </Box>
    <Grid container mt={1} mb={2} spacing={1}>
      {details.map((projectItem) => (
        <Grid item xs={6}>
          <Box display="flex" alignItems="center" gap={1}>
            <Box>{projectItem.icon}</Box>
            <Typography>{projectItem.detail}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
    <Divider />
    <Box display="flex" mt={2} justifyContent="space-between">
      <Typography variant="body2" fontWeight="bold">
        Progress
      </Typography>
      <CustomButton
        title={deadline}
        containerStyles={`py-1 px-1 rounded-md ${
          deadline === "Completed"
            ? "bg-[#A0D9B4]"
            : deadline === "Approval"
            ? "bg-[#FFF4DE]"
            : "bg-[#F1C8DB]"
        }`}
        textStyles="text-[14px] leading-[17px]"
        leftIcon={<FaRegClock />}
      />
    </Box>
    <Box mt={2}>
      <LinearProgress
        sx={{
          height: 10,
          borderRadius: 5,
          backgroundColor: "#F0F0F0",
          "& .MuiLinearProgress-bar": {
            borderRadius: 5,
            backgroundColor: "#E05170",
          },
        }}
        variant="determinate"
        value={progValue}
      />
    </Box>
  </Box>
);

export default ProjectCard;
