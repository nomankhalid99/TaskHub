import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import CustomButton from "../global/CustomButton";
import { FaFileContract, FaUserSecret } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LiaClipboardListSolid } from "react-icons/lia";
import { MdOutlineStar } from "react-icons/md";
import { EmployeeProps } from "../../constants/types";

interface EmployeeCardProps {
  employees: EmployeeProps[];
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employees }) => {
  return (
    <>
      {employees.map((employee) => (
        <Grid item md={6} xs={12}>
          <Box
            display="flex"
            flexDirection={{ sm: "row", xs: "column" }}
            alignItems={{ sm: "start", xs: "center" }}
            gap={4}
            border={1}
            borderColor="#F0F0F0"
            borderRadius={1}
            bgcolor="white"
            p={3}
            sx={{
              "& .MuiAvatar-root" :{
                position: "static",
              }
            }}
          >
            <Box display="flex" flexDirection="column" alignItems="center">
              {employee.avatar}
              <Box display="flex" mt={3} gap={2}>
                <Box
                  display="flex"
                  flexDirection={{ sm: "column", xs: "row" }}
                  gap={0.5}
                  alignItems={{ sm: "space-between", xs: "center" }}
                >
                  <LiaClipboardListSolid fontSize="24px" color="#CF9EAC" />
                  <Typography variant="body1">{employee.taskDone}</Typography>
                </Box>
                <Box
                  display="flex"
                  flexDirection={{ sm: "column", xs: "row" }}
                  gap={0.5}
                  alignItems={{ sm: "space-between", xs: "center" }}
                >
                  <MdOutlineStar fontSize="24px" color="#FFC107" />
                  <Typography variant="body1">{employee.stars}</Typography>
                </Box>
                <Box
                  display="flex"
                  flexDirection={{ sm: "column", xs: "row" }}
                  gap={0.5}
                  alignItems={{ sm: "space-between", xs: "center" }}
                >
                  <FaFileContract fontSize="24px" color="#FFC4CE" />
                  <Typography variant="body1">
                    {employee.taskAssigns}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" gap={2}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems={{ sm: "start", xs: "center" }}
              >
                <Typography variant="body1" fontWeight="bold">
                  {employee.name}
                </Typography>
                <Typography
                  variant="caption"
                  px={1}
                  py={0.4}
                  fontWeight="bold"
                  borderRadius={2}
                  bgcolor={
                    employee.designation === "UI/UX Designer"
                      ? "#EEE5FF"
                      : employee.designation === "Quality Assurance"
                      ? "#A0D9B4"
                      : employee.designation === "Website Designer"
                      ? "#A8D7E0"
                      : employee.designation === "Developer"
                      ? "#FFAA8A"
                      : employee.designation === "QA/QC Engineer"
                      ? "#A7DAFF"
                      : "#FFE28C"
                  }
                >
                  {employee.designation}
                </Typography>
              </Box>
              <Divider />
              <Typography
                variant="body1"
                textAlign={{ sm: "start", xs: "center" }}
                color="GrayText"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur ea pariatur eligendi doloremque sit hic. Lorem,
                ipsum dolor sit amet consectetu.
              </Typography>
              <Box
                display="flex"
                justifyContent={{ sm: "start", xs: "center" }}
                gap={1}
              >
                <Box>
                  <Link to="/tasks">
                    <CustomButton
                      title="Add Task"
                      containerStyles="w-full py-3 px-4 rounded-md bg-[#4C3575] "
                      textStyles="text-white text-[16px] leading-[17px]"
                      leftIcon={<FaPlusCircle className="text-white" />}
                    />
                  </Link>
                </Box>
                <Box>
                  <Link to="/employee-profile">
                    <CustomButton
                      title="Profile"
                      containerStyles="w-full py-3 px-4 rounded-md bg-[#4C3575] "
                      textStyles="text-white text-[16px] leading-[17px]"
                      leftIcon={<FaUserSecret className="text-white" />}
                    />
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </>
  );
};

export default EmployeeCard;
