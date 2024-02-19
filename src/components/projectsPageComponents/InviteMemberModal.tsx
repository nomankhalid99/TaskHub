import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import {
  MdOutlineKeyboardArrowDown,
  MdKey,
  MdSettingsSuggest,
} from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdDoNotDisturb } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

interface InviteMemberModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const InviteMemberModal = ({ isOpen, closeModal }: InviteMemberModalProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const [anchorEl3, setAnchorEl3] = React.useState<null | HTMLElement>(null);
  const [anchorEl4, setAnchorEl4] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);
  const open4 = Boolean(anchorEl4);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl2(null);
  };
  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl3(null);
  };
  const handleClick3 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl4(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorEl4(null);
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterTo="opacity-100"
            enterFrom="opacity-0"
            leave="ease-in duration-200"
            leaveTo="opacity-0"
            leaveFrom="opacity-100"
          >
            <div className="fixed inset-0 bg-black opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterTo="opacity-100 scale-100"
                enterFrom="opacity-0 scale-95"
                leave="ease-in duration-200"
                leaveTo="opacity-0 scale-95"
                leaveFrom="opacity-100 scale-100"
              >
                <Dialog.Panel
                  className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto transform rounded-2xl bg-[#F9FBFD] text-left 
                shadow-xl p-6 transition-all flex flex-col gap-5"
                >
                  <Typography variant="h6" padding={-3} fontWeight="bold">
                    Employee Invitation
                  </Typography>
                  <button
                    className="absolute top-4 p-2 right-4 z-10 w-fit bg-primary-blue-100 rounded-full"
                    type="button"
                    onClick={closeModal}
                  >
                    <RxCross2 fontSize={22} />
                  </button>
                  <Divider />
                  <Box
                    display="flex"
                    sx={{
                      width: "auto",
                      maxWidth: "100%",
                    }}
                  >
                    <input
                      className="w-full border p-2 focus:outline-none  rounded-s-md"
                      placeholder="Email Address"
                    />
                    <button
                      className="bg-[#4C3575] py-2 px-3 text-white w-26 rounded-e-md"
                      type="button"
                    >
                      Sent
                    </button>
                  </Box>
                  <Typography fontWeight="bold">Employee</Typography>
                  <Box display='flex' flexDirection='column' gap={3} bgcolor="white" px={3} py={2}>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Box display="flex" gap={2}>
                        <Avatar
                          sx={{ height: "44px", width: "44px" }}
                          alt="Cindy Baker"
                          src="https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar3.jpg"
                        />
                        <Box>
                          <Typography fontWeight="bold">
                            Rachel Carr(you)
                          </Typography>
                          <Typography color="GrayText" variant="body2">
                            rachel.carr@gmail.com
                          </Typography>
                        </Box>
                      </Box>
                      <Box display="flex" alignItems="center">
                        <Typography color="GrayText">Admin</Typography>
                        <Button
                          id="basic-button"
                          sx={{ color: "black" }}
                          aria-controls={open4 ? "basic-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={open4 ? "true" : undefined}
                          onClick={handleClick3}
                          endIcon={<MdOutlineKeyboardArrowDown />}
                        >
                          <MdSettingsSuggest fontSize={18} />
                        </Button>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl4}
                          open={open4}
                          onClose={handleClose3}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                        >
                          <MenuItem onClick={handleClose3}>
                            <MdKey fontSize={18} />
                            ResetPassword
                          </MenuItem>
                          <MenuItem onClick={handleClose3}>
                            <BsGraphUp fontSize={18} />
                            ActivityReports
                          </MenuItem>
                        </Menu>
                      </Box>
                    </Box>
                    <Divider/>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Box display="flex" gap={2}>
                        <Avatar
                          sx={{ height: "44px", width: "44px" }}
                          alt="Cindy Baker"
                          src="https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar3.jpg"
                        />
                        <Box>
                          <Typography fontWeight="bold">
                            Lucas Baker<Link to='#'><span className="text-[#E05170] hover:text-[#656C71] ml-1">(Resend invitation)</span></Link>
                          </Typography>
                          <Typography color="GrayText" variant="body2">
                            lucas.baker@gmail.com
                          </Typography>
                        </Box>
                      </Box>
                      <Box display="flex" alignItems="center">
                        <Button
                          id="basic-button"
                          sx={{ color: "black" }}
                          aria-controls={open2 ? "basic-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={open2 ? "true" : undefined}
                          onClick={handleClick1}
                          endIcon={<MdOutlineKeyboardArrowDown />}
                        >
                          Member
                        </Button>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl2}
                          open={open2}
                          onClose={handleClose1}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                        >
                          <MenuItem onClick={handleClose1}>
                            <FaRegCheckCircle fontSize={18} />
                            All Operation Permission
                          </MenuItem>
                          <MenuItem onClick={handleClose1}>
                            Only invite & manage team
                          </MenuItem>
                        </Menu>
                        <Button
                          id="basic-button"
                          sx={{ color: "black" }}
                          aria-controls={open3 ? "basic-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={open3 ? "true" : undefined}
                          onClick={handleClick2}
                          endIcon={<MdOutlineKeyboardArrowDown />}
                        >
                          <MdSettingsSuggest fontSize={18} />
                        </Button>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl3}
                          open={open3}
                          onClose={handleClose2}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                        >
                          <MenuItem onClick={handleClose2}>
                            <MdDoNotDisturb fontSize={18} />
                            Delete Member
                          </MenuItem>
                        </Menu>
                      </Box>
                    </Box>
                    <Divider/>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Box display="flex" gap={2}>
                        <Avatar
                          sx={{ height: "44px", width: "44px" }}
                          alt="Cindy Baker"
                          src="https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar3.jpg"
                        />
                        <Box>
                          <Typography fontWeight="bold">Una Coleman</Typography>
                          <Typography color="GrayText" variant="body2">
                            una.coleman@gmail.com
                          </Typography>
                        </Box>
                      </Box>
                      <Box display="flex" alignItems="center">
                      <Button
                          id="basic-button"
                          sx={{ color: "black" }}
                          aria-controls={open2 ? "basic-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={open2 ? "true" : undefined}
                          onClick={handleClick1}
                          endIcon={<MdOutlineKeyboardArrowDown />}
                        >
                          Member
                        </Button>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl2}
                          open={open2}
                          onClose={handleClose1}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                        >
                          <MenuItem onClick={handleClose1}>
                            <FaRegCheckCircle fontSize={18} />
                            All Operation Permission
                          </MenuItem>
                          <MenuItem onClick={handleClose1}>
                            Only invite & manage team
                          </MenuItem>
                        </Menu>
                        <Button
                          id="basic-button"
                          sx={{ color: "black" }}
                          aria-controls={open ? "basic-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                          onClick={handleClick}
                          endIcon={<MdOutlineKeyboardArrowDown />}
                        >
                          <MdSettingsSuggest fontSize={18} />
                        </Button>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                        >
                          <MenuItem onClick={handleClose}>
                            <MdKey fontSize={18} />
                            ResetPassword
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <BsGraphUp fontSize={18} />
                            ActivityReports
                          </MenuItem>
                          
                          <MenuItem onClick={handleClose}>
                            <RiDeleteBin6Line fontSize={18} />
                           Suspend Member
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <MdDoNotDisturb fontSize={18} />
                            Delete Member
                          </MenuItem>
                        </Menu>
                      </Box>
                    </Box>
                  </Box>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default InviteMemberModal;
