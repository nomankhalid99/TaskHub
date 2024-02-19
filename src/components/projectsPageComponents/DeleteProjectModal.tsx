import { Fragment} from "react";
import { Dialog, Transition } from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";
import { Box, Divider, Typography } from "@mui/material";
import CustomButton from "../global/CustomButton";
import { MdDelete } from "react-icons/md";

interface DeleteProjectModalProps {
  isOpen: boolean;
  closeModal: () => void;
  selectedProjectIndex: number | undefined;
  handleDeleteProject: (projectIndex: number) => void;
}

const DeleteProjectModal = ({
  isOpen,
  closeModal,
  selectedProjectIndex,
  handleDeleteProject,
}: DeleteProjectModalProps) => {

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
                  className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-[#F9FBFD] text-left 
                shadow-xl p-6 transition-all flex flex-col gap-5"
                >
                  <Typography variant="h6" padding={-3} fontWeight="bold">
                    Delete item Permanently?
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
                    flexDirection="column"
                    alignItems="center"
                  >
                    <MdDelete fontSize="90px" color="#DC3545" />
                    <Typography variant="subtitle1" fontSize="21px">
                      You can only delete this item Permanently
                    </Typography>
                  </Box>
                  <Divider />
                  <Box
                    display="flex"
                    justifyContent='end'
                    gap={1}
                    width="full"

                  >
                    <CustomButton
                      title="Cancel"
                      btnType="button"
                      containerStyles="bg-[#6C757D] py-2 text-white px-5 rounded-md"
                      handleClick={closeModal}
                    />
                    <CustomButton
                      title="Delete"
                      btnType="button"
                      containerStyles="bg-[#FC5A69] py-2 text-white px-5 rounded-md"
                      handleClick={() => {
                        if (selectedProjectIndex !== undefined) {
                          handleDeleteProject(selectedProjectIndex);
                          closeModal();
                        }
                      }}
                    />
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

export default DeleteProjectModal;
