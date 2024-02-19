import { Box, Typography } from "@mui/material"
import { FormValues,} from "../../constants/types";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });


const DashboardForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormValues>({
        resolver: yupResolver(schema),
      });
    
      const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
      };
    
      const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
        console.error(errors, e);
      };

  return (
    <>
     <Box bgcolor="#CFE2FF" p={3} borderRadius={2}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              color="#052C65"
              lineHeight={0.3}
            >
              Create Project Credentials
            </Typography>
            <Typography variant="caption" color="#052C65">
              Create a Project credentials now and never miss
            </Typography>
            <form
              className="flex w-full flex-col gap-4 mt-3"
              onSubmit={handleSubmit(onSubmit, onError)}
            >
              <div>
                <input
                  className="w-full p-3 rounded-md focus:outline-none"
                  placeholder="Enter Username"
                  {...register("username")}
                />
                <p>{errors.username?.message}</p>
              </div>
              <div>
                <input
                  className="w-full p-3 rounded-md focus:outline-none"
                  type="password"
                  placeholder="Enter Password"
                  {...register("password")}
                />
                <p>{errors.password?.message}</p>
              </div>
              <div>
                <input
                  className="w-full p-3 rounded-md focus:outline-none"
                  type="password"
                  placeholder="Confirm Paswword"
                  {...register("confirmPassword")}
                />
                <p>{errors.confirmPassword?.message}</p>
              </div>

              <button
                className="bg-[#4C3575] text-white flex self-start p-3 rounded-md"
                type="submit"
              >
                Create Credential
              </button>
            </form>
          </Box>
    </>
  )
}

export default DashboardForm