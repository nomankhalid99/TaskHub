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
import { EmployeeFormProps } from "../../constants/types";
import CustomButton from "../global/CustomButton";

interface AddEmployeeModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const AddEmployeeModal = ({
  isOpen,
  closeModal,
}: AddEmployeeModalProps) => {
  const { handleSubmit, control } = useForm<EmployeeFormProps>({
    defaultValues: {
        employeeName: '',
        employeeCompany: '',
        file: undefined,
        employeeId: undefined,
        joiningDate: '',
        username: '',
        password: '',
        email: '',
        phone: undefined,
        department: 'web',
        designation: 'ui/ux design',
        description: '',
    },
  });

  const onSubmit = (data: EmployeeFormProps) => {
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
                    Add Employee
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
                        <InputLabel htmlFor="employeeName">
                          Employee Name
                        </InputLabel>
                        <Controller
                          name="employeeName"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              placeholder="Enter Name"
                              variant="outlined"
                            />
                          )}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        display="flex"
                        flexDirection="column"
                        gap={1}
                      >
                        <InputLabel htmlFor="employeeCompany">
                         Employee Company
                        </InputLabel>
                        <FormControl fullWidth variant="outlined">
                          <Controller
                            name="employeeCompany"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                {...field}
                                fullWidth
                                placeholder="Enter Company"
                                variant="outlined"
                              />
                            )}
                          />
                        </FormControl>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        display="flex"
                        flexDirection="column"
                        gap={1}
                      >
                        <InputLabel htmlFor="file">
                          Employee Profile
                        </InputLabel>
                        <Controller
                          name="file"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              type="file"
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
                        <InputLabel htmlFor="employeeId">
                         Employee ID
                        </InputLabel>
                        <FormControl fullWidth variant="outlined">
                          <Controller
                            name="employeeId"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                {...field}
                                fullWidth
                                placeholder="Enter Id"
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
                        <InputLabel htmlFor="joiningDate">
                          Joining Date
                        </InputLabel>
                        <Controller
                          name="joiningDate"
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
                        <InputLabel htmlFor="username">
                         User Name
                        </InputLabel>
                        <FormControl fullWidth variant="outlined">
                          <Controller
                            name="username"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                {...field}
                                fullWidth
                                placeholder="Enter Username"
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
                        <InputLabel htmlFor="password">
                         Password
                        </InputLabel>
                        <FormControl fullWidth variant="outlined">
                          <Controller
                            name="password"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                {...field}
                                fullWidth
                                placeholder="Enter Password"
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
                        <InputLabel htmlFor="email">
                         Email ID
                        </InputLabel>
                        <FormControl fullWidth variant="outlined">
                          <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                {...field}
                                fullWidth
                                placeholder="Enter Email"
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
                        <InputLabel htmlFor="phone">
                         Phone
                        </InputLabel>
                        <FormControl fullWidth variant="outlined">
                          <Controller
                            name="phone"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                {...field}
                                fullWidth
                                placeholder="Enter Phone Number"
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
                        <InputLabel htmlFor="department">
                          Department
                        </InputLabel>
                        <FormControl fullWidth variant="outlined">
                          <Controller
                            name="department"
                            control={control}
                            render={({ field }) => (
                              <Select {...field}>
                                <MenuItem value="web">Web Development</MenuItem>
                                <MenuItem value="managment">
                                  IT Managment
                                </MenuItem>
                                <MenuItem value="marketing">
                                  Marketing
                                </MenuItem>
                              </Select>
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
                        <InputLabel htmlFor="designation">
                         Designation
                        </InputLabel>
                        <FormControl fullWidth variant="outlined">
                          <Controller
                            name="designation"
                            control={control}
                            render={({ field }) => (
                              <Select {...field}>
                                <MenuItem value="ui/ux design">
                                  UI/UX Design
                                </MenuItem>
                                <MenuItem value="website design">
                                  Website Design
                                </MenuItem>
                                <MenuItem value="app development">
                                  App Development
                                </MenuItem>
                                <MenuItem value="quality assurance">
                                  Quality Assurance
                                </MenuItem>
                                <MenuItem value="development">
                                  Development
                                </MenuItem>
                                <MenuItem value="backend development">
                                  Backend Development
                                </MenuItem>
                                <MenuItem value="software testing">
                                  Software Testing
                                </MenuItem>
                                <MenuItem value="seo">SEO</MenuItem>
                                <MenuItem value="others">Others</MenuItem>
                              </Select>
                            )}
                          />
                        </FormControl>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        display="flex"
                        flexDirection="column"
                        gap={1}
                      >
                        <InputLabel htmlFor="description">
                          Description (Optional)
                        </InputLabel>
                        <Controller
                          name="description"
                          control={control}
                          render={({ field }) => (
                            <textarea
                              {...field}
                              rows={4}
                              style={{
                                backgroundColor: "#EEEEEE",
                                width: "100%",
                                padding: "5px",
                                resize: "vertical",
                                border: "1px solid #B7B7B7",
                                borderRadius: "5px",
                                marginBottom: "16px",
                              }}
                            />
                          )}
                        />
                      </Grid>
                    </Grid>
                  </form>
                  <Box
                    display="flex"
                    justifyContent='end'
                    gap={1}
                    width="full"
                  >
                    <CustomButton
                      title="Done"
                      btnType="button"
                      containerStyles="bg-[#6C757D] py-2 text-white px-5 rounded-md"
                      handleClick={closeModal}
                    />
                    <CustomButton
                      title="Create"
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

export default AddEmployeeModal;
