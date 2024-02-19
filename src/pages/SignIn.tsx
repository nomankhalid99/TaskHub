import React, { useEffect } from "react";
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import CustomButton from "../components/global/CustomButton";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LuClipboardSignature } from "react-icons/lu";
import { Link } from "react-router-dom";

interface SignInFormData {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email("Email is invalid").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be atleast 8 characters")
    .required("Password is required"),
});

const SignIn: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<SignInFormData> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    document.title = "TaskHub"
  }, [])

  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          minHeight: "100vh",
          "& .MuiInputBase-input": {
            padding: "10px",
            background: "#EEEEEE",
          },
          "& .MuiCheckbox-colorPrimary.Mui-checked": {
            color: "#4C3575",
          },
          "& .MuiFormControlLabel-label": {
            color: "#4C3575",
            fontSize: "14px",
          },
        }}
      >
        <Grid item xs={12} sm={8} md={6} lg={5}>
          <Box
            bgcolor="white"
            borderRadius={3}
            boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px;"
            p={3}
          >
            <Box
              display="flex"
              flexDirection={{ sm: "row", xs: "column" }}
              mb={2}
              gap={1}
              justifyContent="center"
              alignItems="center"
            >
              <Box bgcolor="#4C3575" borderRadius="50%" p={1}>
                <IconButton>
                  <LuClipboardSignature fontSize="30px" color="white" />
                </IconButton>
              </Box>
              <Typography variant="h4" fontWeight="bold" align="center">
                TaskHub
              </Typography>
            </Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid
                  item
                  display="flex"
                  flexDirection="column"
                  gap={1}
                  xs={12}
                >
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        placeholder="Enter Email"
                        variant="outlined"
                        fullWidth
                        type="email"
                        error={!!errors.email}
                        helperText={errors.email?.message}
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
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        placeholder="Enter Password"
                        variant="outlined"
                        fullWidth
                        type="password"
                        error={!!errors.password}
                        helperText={errors.password?.message}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Remember me."
                  />
                </Grid>
                <Grid item display="flex" justifyContent="center" xs={12}>
                  <Link to="/" style={{width:"60%"}}>
                    <CustomButton
                      title="Sign In"
                      btnType="submit"
                      containerStyles="bg-[#4C3575] w-[100%] text-white p-3 rounded-md"
                    />
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignIn;
