import { Divider, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import PaymentsTable from "../components/paymentsComponents/PaymentsTable";

interface Props {
  menuCollapse: boolean;
}

const Payments :React.FC<Props> = ({menuCollapse}) => {

  useEffect(() => {
    document.title = "Payments-TaskHub"
  }, [])
  return (
    <Grid container mb={2}sx={{ pl: { xs: 0, lg: menuCollapse ? 14 : 36 }}}>
      <Typography mt={4} mb={{ sm: 3, xs: 1 }} variant="h4" fontWeight="bold">
        Payments
      </Typography>
      <Grid item xs={12}>
      <Divider />
      <PaymentsTable/>
      </Grid>
    </Grid>
  );
};

export default Payments;
