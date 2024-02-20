import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Box, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { notificationData } from "../../data/mockData";
import CustomButton from "./CustomButton";

interface NotificationModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const NotificationModal = ({ isOpen, closeModal }: NotificationModalProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <div className="fixed sm:top-14 top-28 left-2 sm:right-40">
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
                  className="relative w-full sm:max-w-[400px] max-w-[300px] max-h-[90vh] overflow-y-auto transform rounded-md bg-[#F9FBFD] text-left 
                shadow-xl transition-all flex flex-col "
                >
                  <Box
                    display="flex"
                    color="white"
                    p={2}
                    bgcolor="#4C3575"
                    justifyContent="space-between"
                  >
                    <Typography variant="h6" padding={-3} fontWeight="bold">
                      Notification
                    </Typography>
                    <Typography variant="h6" padding={-3} fontWeight="bold">
                      11
                    </Typography>
                  </Box>
                  <Box height='300px' overflow='auto'>
                  {notificationData.map((notification) => (
                    <Link to="#" key={notification.id} className="hover:text-[#D74772]">
                      <Box display="flex" p={2}>
                        <Box display="flex" gap={1}>
                          {notification.avatar}
                          <Box>
                            <Typography variant="subtitle1" fontWeight="bold">
                              {notification.name}
                            </Typography>
                            <Typography variant="subtitle1">
                              {notification.notify}
                            </Typography>
                          </Box>
                        </Box>
                        <Box>
                          <Typography>{notification.time}</Typography>
                        </Box>
                      </Box>
                      <Divider/>
                    </Link>
                  ))}
                  </Box>
                  <Box
                    display="flex"
                    p={2}
                    bgcolor="#F8F8F8"
                    justifyContent="center"
                  >
                    <Link to="#" className="hover:text-[#D74772]">
                      <CustomButton title="View all notifications" />
                    </Link>
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

export default NotificationModal;
