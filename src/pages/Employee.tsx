import React, { useEffect, useState } from "react";
import { Grid, Typography, Box, Divider, Menu, MenuItem } from "@mui/material";
import { FaPlusCircle } from "react-icons/fa";
import CustomButton from "../components/global/CustomButton";
import { IoMdArrowDropdown } from "react-icons/io";
import EmployeeCard from "../components/employeeComponents/EmployeeCard";
import AddEmployeeModal from "../components/employeeComponents/AddEmployeeModal";
import { employeeData } from "../data/mockData";

interface Props {
  menuCollapse: boolean;
}

const Employee: React.FC<Props> = ({menuCollapse}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [employeeModalOpen, setEmployeeModalOpen] = useState(false);
  const [filterOption, setFilterOption] = useState("All");

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFilterOption = (option: string) => {
    setFilterOption(option);
    setAnchorEl(null);
  };

  const filteredEmployees = employeeData.filter((employee) => {
    if (filterOption === "All") {
      return true;
    } else if (filterOption === "Task Assign Members") {
      return employee.taskAssigns > 0;
    } else if (filterOption === "Not Assign Members") {
      return employee.taskAssigns === 0;
    }
    return false;
  });

  useEffect(() => {
    document.title = "Employees-TaskHub"
  }, [])

  return (
    <>
      <Grid container mt={3} mb={2}  sx={{ pl: { xs: 0, lg: menuCollapse ? 14 : 36 }}} spacing={2}>
        <Grid item mb={3} xs={12}>
          <Box
            display="flex"
            mb={2}
            flexDirection={{ sm: "row", xs: "column" }}
            justifyContent="space-between"
            alignItems={{ sm: "center", xs: "" }}
          >
            <Typography mb={{ sm: 0, xs: 1 }} variant="h4" fontWeight="bold">
              Employee
            </Typography>
            <Box
              gap={1}
              display="flex"
              flexDirection={{ sm: "row", xs: "column" }}
            >
              <CustomButton
                title="Add Employee"
                containerStyles="w-full p-3 rounded-md bg-[#4C3575] "
                textStyles="text-white text-[14px] leading-[17px]"
                leftIcon={<FaPlusCircle className="text-white" />}
                handleClick={() => setEmployeeModalOpen(true)}
              />
              <Box>
                <CustomButton
                  title="Status"
                  containerStyles="w-full p-3 rounded-md bg-[#4C3575] "
                  textStyles="text-white text-[14px] leading-[17px]"
                  rightIcon={<IoMdArrowDropdown className="text-white" />}
                  handleClick={handleClick}
                />
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  sx={{
                    "& .MuiMenuItem-root:hover": {
                      color: "#E05170",
                    },
                  }}
                >
                  <MenuItem onClick={() => handleFilterOption("All")}>
                    All
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleFilterOption("Task Assign Members")}
                  >
                    Task Assign Members
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleFilterOption("Not Assign Members")}
                  >
                    Not Assign Members
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
          </Box>
          <Divider />
        </Grid>
        <EmployeeCard employees={filteredEmployees} />
        <AddEmployeeModal
          isOpen={employeeModalOpen}
          closeModal={() => setEmployeeModalOpen(false)}
        />
      </Grid>
    </>
  );
};

export default Employee;
