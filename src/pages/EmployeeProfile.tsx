import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import InfoCard from "../components/employeeProfileCOmponents/InfoCard";
import { projectCardData } from "../data/mockData";
import ProjectCard from "../components/projectsPageComponents/ProjectCard";
import TaskCard from "../components/employeeProfileCOmponents/TaskCard";
import PersonalInfoCard from "../components/employeeProfileCOmponents/PersonalInfoCard";
import BankInfoCard from "../components/employeeProfileCOmponents/BankInfoCard";
import ExperienceCard from "../components/employeeProfileCOmponents/ExperienceCard";
import EditPersonalInfoModal from "../components/employeeProfileCOmponents/EditPersonalInfoModal";
import EditBankInfoModal from "../components/employeeProfileCOmponents/EditBankInfoModal";

interface Props {
  menuCollapse: boolean;
}

const EmployeeProfile: React.FC<Props> = ({menuCollapse}) => {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isBankModalOpen, setIsBankModalOpen] = useState(false);
  const limitedProjectCards = projectCardData.slice(0, 2);

  useEffect(() => {
    document.title = "Employee Profile-TaskHub"
  }, [])

  return (
    <Grid container mb={2} sx={{ pl: { xs: 0, lg: menuCollapse ? 14 : 36 } }} spacing={2}>
      <Grid item xs={12}>
        <Typography mt={4} mb={{ sm: 3, xs: 1 }} variant="h4" fontWeight="bold">
          Employee Profile
        </Typography>
        <Divider />
      </Grid>
      <Grid item md={8}>
        <InfoCard />
        <Grid container mt={0} spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" fontWeight="bold">
              Current Work Project
            </Typography>
          </Grid>
          {limitedProjectCards.map((card, index) => (
            <Grid item sm={6} xs={12} mt={4} key={index}>
              <ProjectCard
                id={card.id}
                index={index}
                icon={card.icon}
                name={card.name}
                title={card.title}
                deadline={card.deadline}
                progValue={card.progValue}
                details={card.details}
              />
            </Grid>
          ))}
          <Grid item sm={6} xs={12}>
            <PersonalInfoCard setIsInfoModalOpen={setIsInfoModalOpen} />
          </Grid>
          <Grid item sm={6} xs={12}>
            <BankInfoCard setIsBankModalOpen={setIsBankModalOpen} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={4} gap={2} xs={12}>
        <Box
          bgcolor="white"
          border={1}
          borderColor="#F0F0F0"
          borderRadius={1}
          p={2}
        >
          <Typography variant="subtitle1" fontWeight="bold">
            Current Task
          </Typography>
          <TaskCard />
        </Box>
        <ExperienceCard />
      </Grid>
      <EditPersonalInfoModal
        isOpen={isInfoModalOpen}
        closeModal={() => setIsInfoModalOpen(false)}
      />
      <EditBankInfoModal
        isOpen={isBankModalOpen}
        closeModal={() => setIsBankModalOpen(false)}
      />
    </Grid>
  );
};

export default EmployeeProfile;
