import { Fragment, useEffect } from "react";
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
import { ProjectFormProps } from "../../constants/types";
import CustomButton from "../global/CustomButton";

interface EditProjectModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const EditProjectModal = ({ isOpen, closeModal }: EditProjectModalProps) => {
  const { handleSubmit, control, setValue } = useForm<ProjectFormProps>();

  useEffect(() => {
    setValue("startDate", "2022-01-03");
    setValue("endDate", "2022-05-10");
    setValue("projectName", "Social Geek Made");
    setValue("projectCategory", "ui/ux design");
    setValue("file", undefined);
    setValue("notificationSent", "all");
    setValue("taskAssign", "royan");
    setValue("budget", 1);
    setValue("priority", "high");
    setValue(
      "description",
      "lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, mollitia corporis amet, quisquam quasi vel ducimus facilis ad ipsa rerum libero!"
    );
  }, [setValue]);

  const onSubmit = (data: ProjectFormProps) => {
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
                    Edit Project
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
                        <InputLabel htmlFor="projectName">
                          Project Name
                        </InputLabel>
                        <Controller
                          name="projectName"
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
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        display="flex"
                        flexDirection="column"
                        gap={1}
                      >
                        <InputLabel htmlFor="ProjectCategory">
                          Project Category
                        </InputLabel>
                        <FormControl fullWidth variant="outlined">
                          <Controller
                            name="projectCategory"
                            control={control}
                            defaultValue=""
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
                        <InputLabel htmlFor="file">
                          Project Images & Document
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
                        display="flex"
                        sm={6}
                        xs={12}
                        flexDirection="column"
                        gap={1}
                      >
                        <InputLabel htmlFor="startDate">
                          Project Start Date
                        </InputLabel>
                        <Controller
                          name="startDate"
                          control={control}
                          defaultValue=""
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
                        <InputLabel htmlFor="endDate">End Date</InputLabel>
                        <Controller
                          name="endDate"
                          control={control}
                          defaultValue=""
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
                        xs={12}
                        display="flex"
                        flexDirection="column"
                        gap={1}
                      >
                        <InputLabel htmlFor="notificationSent">
                          Notification Sent
                        </InputLabel>
                        <FormControl fullWidth variant="outlined">
                          <Controller
                            name="notificationSent"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                              <Select {...field}>
                                <MenuItem value="all">All</MenuItem>
                                <MenuItem value="leader">
                                  Team Leader Only
                                </MenuItem>
                                <MenuItem value="member">
                                  Team Leader Only
                                </MenuItem>
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
                        <InputLabel htmlFor="taskAssign">
                          Task Assign Person
                        </InputLabel>
                        <FormControl fullWidth variant="outlined">
                          <Controller
                            name="taskAssign"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                              <Select {...field}>
                                <MenuItem value="lucinda">
                                  Lucinda Massay
                                </MenuItem>
                                <MenuItem value="royan">Royan Nolan</MenuItem>
                                <MenuItem value="oliver">Oliver Black</MenuItem>
                                <MenuItem value="adam">Adam Walker</MenuItem>
                                <MenuItem value="brain">Brain Skinner</MenuItem>
                                <MenuItem value="dan">Dan Short</MenuItem>
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
                        <InputLabel htmlFor="budget">Budget</InputLabel>
                        <Controller
                          name="budget"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              type="number"
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
                        <InputLabel htmlFor="priority">Priority</InputLabel>
                        <FormControl fullWidth variant="outlined">
                          <Controller
                            name="priority"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                              <Select {...field}>
                                <MenuItem value="high">Highest</MenuItem>
                                <MenuItem value="medium">Medium</MenuItem>
                                <MenuItem value="low">Low</MenuItem>
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
                          defaultValue=""
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

export default EditProjectModal;
