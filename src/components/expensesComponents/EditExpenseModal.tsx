import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Select,
  Divider,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import { AddExpenseFormProps } from "../../constants/types";
import CustomButton from "../global/CustomButton";

interface EditExpenseModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const EditExpenseModal = ({ isOpen, closeModal }: EditExpenseModalProps) => {
  const { handleSubmit, control } = useForm<AddExpenseFormProps>({
    defaultValues: {
      item: "Internet Payment",
      orderBy: "Joan Dyer",
      date: "04/17/2024",
      from: "Airtel Portal",
      status: "progress",
    },
  });

  const onSubmit = (data: AddExpenseFormProps) => {
    console.log(data);
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
                  className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto transform rounded-2xl bg-[#F9FBFD] text-left 
                shadow-xl p-6 transition-all flex flex-col gap-5"
                >
                  <Typography variant="h6" padding={-3} fontWeight="bold">
                    Edit Expenses
                  </Typography>
                  <button
                    className="absolute top-4 p-2 right-4 z-10 w-fit bg-primary-blue-100 rounded-full"
                    type="button"
                    onClick={closeModal}
                  >
                    <RxCross2 fontSize={22} />
                  </button>
                  <Divider />
                  <form
                    className="overflow-y-scroll"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <Grid
                      container
                      spacing={2}
                      sx={{
                        "& .MuiInputBase-input": {
                          padding: "10px",
                          background: "#EEEEEE",
                        },
                      }}
                    >
                      <Grid
                        item
                        xs={12}
                        display="flex"
                        flexDirection="column"
                        gap={1}
                      >
                        <InputLabel htmlFor="item">Item</InputLabel>
                        <FormControl fullWidth variant="outlined">
                          <Controller
                            name="item"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                              <TextField
                                {...field}
                                fullWidth
                                variant="outlined"
                              />
                            )}
                          />
                        </FormControl>
                      </Grid>
                      <Grid
                        item
                        sm={6}
                        xs={12}
                        display="flex"
                        flexDirection="column"
                        gap={1}
                      >
                        <InputLabel htmlFor="orderBy">Order By</InputLabel>
                        <FormControl fullWidth variant="outlined">
                          <Controller
                            name="orderBy"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                              <TextField
                                {...field}
                                fullWidth
                                variant="outlined"
                              />
                            )}
                          />
                        </FormControl>
                      </Grid>
                      <Grid
                        item
                        display="flex"
                        sm={6}
                        xs={12}
                        flexDirection="column"
                        gap={1}
                      >
                        <InputLabel htmlFor="date">Date</InputLabel>
                        <Controller
                          name="date"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              type="date"
                              variant="outlined"
                            />
                          )}
                        />
                      </Grid>
                      <Grid
                        item
                        sm={6}
                        xs={12}
                        display="flex"
                        flexDirection="column"
                        gap={1}
                      >
                        <InputLabel htmlFor="from">From</InputLabel>
                        <Controller
                          name="from"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              variant="outlined"
                            />
                          )}
                        />
                      </Grid>
                      <Grid
                        item
                        sm={6}
                        xs={12}
                        display="flex"
                        flexDirection="column"
                        gap={1}
                      >
                        <InputLabel htmlFor="status">
                          Task Assign Person
                        </InputLabel>
                        <FormControl fullWidth variant="outlined">
                          <Controller
                            name="status"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                              <Select {...field}>
                                <MenuItem value="progress">
                                  In Progress
                                </MenuItem>
                                <MenuItem value="completed">Completed</MenuItem>
                                <MenuItem value="waiting">Waiting</MenuItem>
                                <MenuItem value="decline">Decline</MenuItem>
                              </Select>
                            )}
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                  </form>
                  <Box display="flex" justifyContent="end" gap={1} width="full">
                    <CustomButton
                      title="Done"
                      btnType="button"
                      containerStyles="bg-[#6C757D] float-end py-2 text-white px-5 rounded-md"
                      handleClick={closeModal}
                    />
                    <CustomButton
                      title="Save Changes"
                      btnType="button"
                      containerStyles="bg-[#4C3575] py-2 float-end text-white px-5 rounded-md"
                      handleClick={closeModal}
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

export default EditExpenseModal;
