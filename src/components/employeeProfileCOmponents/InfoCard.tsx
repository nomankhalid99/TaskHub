import { Avatar, Box, Grid, Typography } from "@mui/material";
import { FaBirthdayCake, FaMobileAlt } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const InfoCard = () => {
  return (
    <Box
      bgcolor="white"
      display="flex"
      border={1}
      borderColor="#F0F0F0"
      flexDirection={{ sm: "row", xs: "column" }}
      alignItems={{ sm: "start", xs: "center" }}
      p={3}
      gap={{ sm: 4, xs: 1 }}
      borderRadius={1}
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar
          className="border"
          sx={{ height: "120px", width: "120px" }}
          src="https://pixelwibes.com/template/my-task/html/dist/assets/images/lg/avatar3.jpg"
        />
        <Box mt={2}>
          <Typography variant="body1" fontWeight="bold">
            Web Developer
          </Typography>
          <Typography variant="subtitle2" color="GrayText">
            Employee id: 0001
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems={{ sm: "start", xs: "center" }}
        gap={1}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems={{ sm: "start", xs: "center" }}
        >
          <Typography variant="body1" fontWeight="bold">
            Luke Short
          </Typography>
          <Typography variant="caption" color="GrayText" fontWeight="bold">
            Web Designer
          </Typography>
        </Box>
        <Typography variant="caption" textAlign={{ sm: "start", xs: "center" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          ea pariatur eligendi doloremque sit hic. Lorem, ipsum dolor sit amet
          consectetu.
        </Typography>
        <Grid container mt={1} spacing={1}>
          <Grid item sm={6} xs={12}>
            <Box display="flex" gap={1}>
              <FaMobileAlt />
              <Typography variant="caption">202-555-0174</Typography>
            </Box>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Box display="flex" gap={1}>
              <IoIosMail />
              <Typography variant="caption">LukeShortn@gmail.com</Typography>
            </Box>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Box display="flex" gap={1}>
              <FaBirthdayCake />
              <Typography variant="caption">19/03/1980</Typography>
            </Box>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Box display="flex" gap={1}>
              <FaAddressBook />
              <Typography variant="caption">
                2734 West Fork Street,EASTON 02334.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default InfoCard;
