import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";
import { Divider, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import {
  useForm,
  SubmitHandler,
  SubmitErrorHandler,
  Controller,
} from "react-hook-form";
import {
  TextField,
  Grid,
  InputLabel,
  Box,
  Avatar,
} from "@mui/material";
import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
import CustomButton from "./CustomButton";

interface ProfileModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

interface FormData {
  name: string;
  email: string;
  address: string;
  username: string;
  password: string;
  confirmPassword: string;
  image: FileList | null;
}

const schema = yup.object().shape({
  password: yup
    .string()
    .min(8, "Password must be atleast 8 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .min(8, "Password must be matched")
    .required("Confirm Password is required"),
});

const ProfileModal = ({ isOpen, closeModal }: ProfileModalProps) => {
  const [avatarSrc, setAvatarSrc] = useState<string>(
    "https://pixelwibes.com/template/my-task/html/dist/assets/images/lg/avatar3.jpg"
  );

  const customResolver = async (data: FormData) => {
    try {
      await schema.validate(data, { abortEarly: false });
      return {
        values: data,
        errors: {},
      };
    } catch (validationErrors) {
      const errors = (validationErrors as yup.ValidationError).inner.reduce(
        (acc: any, error: any) => ({ ...acc, [error.path!]: error.message }),
        {}
      );
      return {
        values: {},
        errors,
      };
    }
  };

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "Dylan Hunter",
      email: "dylanhunter@gmail.com",
      address: "2734 West Fork Street,EASTON 02334.",
      username: "dylanhunter99",
      password: "12345678",
      confirmPassword: "12345678",
      image: null,
    },
    resolver: customResolver,
  });


  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const onError: SubmitErrorHandler<FormData> = (errors, e) => {
    console.log(errors, e);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setAvatarSrc(imageUrl);
      setValue("image", e.target.files);
    }
  };

  const openFileManager = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
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
                    Edit Profile
                  </Typography>
                  <button
                    className="absolute top-4 p-2 right-4 z-10 w-fit bg-primary-blue-100 rounded-full"
                    type="button"
                    onClick={closeModal}
                  >
                    <RxCross2 fontSize={22} />
                  </button>
                  <Divider />
                  <form className="overflow-y-auto" onSubmit={handleSubmit(onSubmit, onError)}>
                    <Grid
                      container
                      sx={{
                        "& .MuiInputBase-input": {
                          padding: "10px",
                          background: "#EEEEEE",
                        },
                      }}
                      spacing={2}
                    >
                      <Grid item xs={12} display="flex" justifyContent='center'>
                        <Box
                          display="flex"
                          flexDirection="column"
                          alignItems="center"
                        >
                          <Avatar
                            className="border"
                            src={avatarSrc}
                            alt="Admin Image"
                            sx={{ width: 120, height: 120 }}
                          />
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            style={{ display: "none" }}
                            id="image-upload"
                            ref={fileInputRef}
                          />
                          <label htmlFor="image-upload">
                            <CustomButton
                              title="Change Image"
                              containerStyles="bg-[#4C3575] mt-3 text-white px-5 py-3 rounded-md"
                              btnType="button"
                              handleClick={openFileManager}
                            />
                          </label>
                        </Box>
                      </Grid>

                      <Grid
                        item
                        display="flex"
                        flexDirection="column"
                        gap={1}
                        xs={12}
                      >
                        <InputLabel htmlFor="name">Name</InputLabel>
                        <Controller
                          name="name"
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
                        display="flex"
                        flexDirection="column"
                        gap={1}
                        sm={6}
                        xs={12}
                      >
                        <InputLabel htmlFor="email">Email</InputLabel>
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
                      </Grid>
                      <Grid
                        item
                        display="flex"
                        flexDirection="column"
                        gap={1}
                        sm={6}
                        xs={12}
                      >
                        <InputLabel htmlFor="username">Username</InputLabel>
                        <Controller
                          name="username"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              placeholder="Enter usrename"
                              variant="outlined"
                            />
                          )}
                        />
                      </Grid>
                      <Grid
                        item
                        display="flex"
                        flexDirection="column"
                        gap={1}
                        xs={12}
                      >
                        <InputLabel htmlFor="address">Address</InputLabel>
                        <Controller
                          name="address"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              placeholder="Enter Address"
                              variant="outlined"
                            />
                          )}
                        />
                      </Grid>
                      <Grid
                        item
                        display="flex"
                        flexDirection="column"
                        gap={1}
                        xs={12}
                      >
                        <Typography variant="h6" fontWeight="bold">
                          Change Password
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        display="flex"
                        flexDirection="column"
                        gap={1}
                        sm={6}
                        xs={12}
                      >
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Controller
                          name="password"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              placeholder="Enter Password"
                              variant="outlined"
                              type="password"
                              error={!!errors.password}
                              helperText={errors.password?.message}
                            />
                          )}
                        />
                      </Grid>
                      <Grid
                        item
                        display="flex"
                        flexDirection="column"
                        gap={1}
                        sm={6}
                        xs={12}
                      >
                        <InputLabel htmlFor="confirmPassword">
                          Confirm Password
                        </InputLabel>
                        <Controller
                          name="confirmPassword"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              placeholder="Confirm Password"
                              variant="outlined"
                              type="password"
                              error={!!errors.confirmPassword}
                              helperText={errors.confirmPassword?.message}
                            />
                          )}
                        />
                      </Grid>
                    </Grid>
                  </form>
                  <Box display="flex" gap={2} justifyContent="end">
                          <CustomButton
                            title="Cancel"
                            containerStyles="bg-[#6C757D] text-white px-5 py-3 rounded-md"
                            btnType="button"
                          />
                          <CustomButton
                            title="Save Changes"
                            containerStyles="bg-[#4C3575] text-white px-5 py-3 rounded-md"
                            btnType="button"
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

export default ProfileModal;
