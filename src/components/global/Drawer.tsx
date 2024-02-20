import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FaList, FaUsers } from "react-icons/fa";
import {
  LuArrowBigLeftDash,
  LuClipboardSignature,
} from "react-icons/lu";
import { AiFillHome } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Box, IconButton, Typography } from "@mui/material";
import { FaToolbox } from "react-icons/fa6";
import { IoCalculatorOutline } from "react-icons/io5";

type TemporaryDrawerProps = {
  isOpen: boolean;
  toggleDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};

const TemporaryDrawer: React.FC<TemporaryDrawerProps> = ({
  isOpen,
  toggleDrawer,
}) => {
  const location = useLocation();

  const isMenuItemActive = (path: string) => {
    return location.pathname === path;
  };
  return (
    <div>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={isOpen}
            sx={{
              display: { lg: "none", xs: "block" },
              "& .ps-submenu-content": {
                backgroundColor: "#4C3575",
                fontSize: "16px",
              },
              "& .ps-submenu-content .ps-menu-button": {
                height: "30px",
                paddingLeft: "60px",
              },
            }}
            onClose={() => toggleDrawer(false)}
          >
            <Box
              role="presentation"
              bgcolor="#4C3575"
              sx={{
                width: "200px",
                height: "100%",
                color: "white",
                display: { lg: "none", xs: "block" },
              }}
              onKeyDown={() => toggleDrawer(false)}
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={1}
                mt={5}
                mb={2}
              >
                <Box
                  className="logotext"
                  bgcolor="white"
                  borderRadius="50%"
                  p={1}
                >
                  <IconButton>
                    <LuClipboardSignature fontSize="30px" color="#4C3575" />
                  </IconButton>
                </Box>
                <Box>
                  <Typography variant="h5" fontWeight="bold">
                    TaskHub
                  </Typography>
                </Box>
              </Box>
              <Menu className="text-lg h-[280px] overflow-y-auto">
                <MenuItem
                  active={isMenuItemActive("/")}
                  icon={<AiFillHome fontSize="22px" />}
                  onClick={() => toggleDrawer(false)}
                >
                  <Link to="/">Dashboard</Link>
                </MenuItem>
                <MenuItem
                  active={isMenuItemActive("/projects")}
                  icon={<FaToolbox fontSize="22px" />}
                  onClick={() => toggleDrawer(false)}
                >
                  <Link to="/projects">Projects</Link>
                </MenuItem>
                <MenuItem
                  active={isMenuItemActive("/tasks")}
                  icon={<FaList fontSize="22px" />}
                  onClick={() => toggleDrawer(false)}
                >
                  <Link to="/tasks">Tasks</Link>
                </MenuItem>
                <SubMenu label="Members" icon={<FaUsers fontSize="22px" />}>
                  <Link to="/leaders">
                    <MenuItem
                      onClick={() => toggleDrawer(false)}
                      active={isMenuItemActive("/leaders")}
                    >
                      Leaders
                    </MenuItem>
                  </Link>
                  <Link to="/employees">
                    <MenuItem
                      onClick={() => toggleDrawer(false)}
                      active={isMenuItemActive("/employees")}
                    >
                      Employees
                    </MenuItem>
                  </Link>
                  <Link to="/employee-profile">
                    <MenuItem
                      onClick={() => toggleDrawer(false)}
                      active={isMenuItemActive("/employee-profile")}
                    >
                      Employee Profile
                    </MenuItem>
                  </Link>
                </SubMenu>
                <SubMenu
                  label="Accounts"
                  icon={<IoCalculatorOutline fontSize="22px" />}
                >
                  <Link to="/invoices">
                    <MenuItem
                      onClick={() => toggleDrawer(false)}
                      active={isMenuItemActive("/invoices")}
                    >
                      Invoices
                    </MenuItem>
                  </Link>
                  <Link to="/payments">
                    <MenuItem
                      onClick={() => toggleDrawer(false)}
                      active={isMenuItemActive("/payments")}
                    >
                      Payments
                    </MenuItem>
                  </Link>
                  <Link to="/expenses">
                    <MenuItem
                      onClick={() => toggleDrawer(false)}
                      active={isMenuItemActive("/expenses")}
                    >
                      Expenses
                    </MenuItem>
                  </Link>
                  <Link to="/create-invoice">
                    <MenuItem
                      onClick={() => toggleDrawer(false)}
                      active={isMenuItemActive("/create-invoice")}
                    >
                      Create Invoice
                    </MenuItem>
                  </Link>
                </SubMenu>
              </Menu>
              <Box
                className="closemenu"
                display="flex"
                justifyContent="space-around"
                alignItems="center"
                marginTop={9}
                onClick={() => toggleDrawer(false)}
              >
                <LuArrowBigLeftDash fontSize="30px" />
              </Box>
            </Box>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TemporaryDrawer;
