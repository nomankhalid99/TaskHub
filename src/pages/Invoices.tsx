import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import CustomButton from "../components/global/CustomButton";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import InvoicesCard from "../components/invoicesComponents/InvoicesCard";

interface Props {
  menuCollapse: boolean;
}

const Invoices: React.FC<Props> = ({ menuCollapse }) => {
  useEffect(() => {
    document.title = "Invoices-TaskHub"
  }, [])
  return (
    <>
      <Grid container mb={2} sx={{ pl: { xs: 0, lg: menuCollapse ? 14 : 36 } }}>
        <Grid item xs={12}>
          <Box
            display="flex"
            flexDirection={{ sm: "row", xs: "column" }}
            justifyContent="space-between"
            alignItems={{ sm: "center", xs: "" }}
          >
            <Typography
              mt={4}
              mb={{ sm: 2, xs: 1 }}
              variant="h4"
              fontWeight="bold"
            >
              Invoices
            </Typography>
            <Box>
              <Link to="/create-invoice">
                <CustomButton
                  title="Create Invoice"
                  containerStyles="w-full p-3 rounded-md bg-[#4C3575] "
                  textStyles="text-white text-[14px] leading-[17px]"
                  leftIcon={<FaPlusCircle className="text-white" />}
                />
              </Link>
            </Box>
          </Box>
          <Divider />
        </Grid>
        <InvoicesCard />
      </Grid>
    </>
  );
};

export default Invoices;
