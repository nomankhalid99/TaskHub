import { Divider, Grid, Typography } from "@mui/material";
import LeaderTable from "../components/leadersComponents/LeaderTable";
import React, { useEffect, useState } from "react";
import InviteMemberModal from "../components/projectsPageComponents/InviteMemberModal";

interface Props {
  menuCollapse: boolean;
}

const Leaders :React.FC<Props> = ({menuCollapse}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    useEffect(() => {
      document.title = "Leaders-TaskHub"
    }, [])
  return (
    <Grid container mb={2} sx={{ pl: { xs: 0, lg: menuCollapse ? 14 : 36 }}}>
      <Typography mt={4} mb={{ sm: 3, xs: 1 }} variant="h4" fontWeight="bold">
        Team Leaders
      </Typography>
      <Grid item xs={12}>
      <Divider />
        <LeaderTable onInviteClick={() => setIsOpen(true)}/>
      </Grid>
      <InviteMemberModal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </Grid>
  );
};

export default Leaders;
