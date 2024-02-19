import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Divider,
  FormControl,
  InputLabel,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import {
    BankInfoFormProps,
} from "../../constants/types";
import CustomButton from "../global/CustomButton";

interface EditBankInfoModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const EditBankInfoModal = ({
  isOpen,
  closeModal,
}: EditBankInfoModalProps) => {
  const { handleSubmit, control } = useForm<BankInfoFormProps>({
    defaultValues: {
      accountHolder: "Luke Short",
      bankName: "Allied",
      accountType: "Asaan Current Account",
      accountNo: 5436874596325486,
      ibanNo: "allied09000021",
    },
  });

  const onSubmit = (data: BankInfoFormProps) => {
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
                  className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto transform rounded-2xl bg-[#F9FBFD] text-left 
                shadow-xl p-6 transition-all flex flex-col gap-5"
                >
                  <Typography variant="h6" padding={-3} fontWeight="bold">
                    Personal Informations
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
                        sm={6}
                        xs={12}
                        display="flex"
                        flexDirection="column"
                        gap={1}
                      >
                        <InputLabel htmlFor="accountHolder">
                          Account Holder
                        </InputLabel>
                        <Controller
                          name="accountHolder"
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
                        <InputLabel htmlFor="bankName">
                         Bank Name
                        </InputLabel>
                        <FormControl fullWidth variant="outlined">
                          <Controller
                            name="bankName"
                            control={control}
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
                        <InputLabel htmlFor="accountType">Account Type</InputLabel>
                        <Controller
                          name="accountType"
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
                        <InputLabel htmlFor="accountNo">
                          Account No.
                        </InputLabel>
                        <FormControl fullWidth variant="outlined">
                          <Controller
                            name="accountNo"
                            control={control}
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
                        <InputLabel htmlFor="ibanNo">
                          IBAN No.
                        </InputLabel>
                        <Controller
                          name="ibanNo"
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
                    </Grid>
                  </form>
                  <Box display="flex" justifyContent="end" gap={1} width="full">
                    <CustomButton
                      title="Cancel"
                      btnType="button"
                      containerStyles="bg-[#6C757D] py-2 text-white px-5 rounded-md"
                      handleClick={closeModal}
                    />
                    <CustomButton
                      title="Save Changes"
                      btnType="button"
                      containerStyles="bg-[#4C3575] py-2 text-white px-5 rounded-md"
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

export default EditBankInfoModal;
