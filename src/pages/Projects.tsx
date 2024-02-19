import React, { useEffect, useState } from "react";
import { Grid, Typography, Box, Divider } from "@mui/material";
import { FaPlusCircle } from "react-icons/fa";
import CustomButton from "../components/global/CustomButton";
import BtnGroup from "../components/projectsPageComponents/BtnGroup";
import { projectCardData } from "../data/mockData";
import InviteMemberModal from "../components/projectsPageComponents/InviteMemberModal";
import CreateProjectModal from "../components/projectsPageComponents/CreateProjectModal";
import EditProjectModal from "../components/projectsPageComponents/EditProjectModal";
import DeleteProjectModal from "../components/projectsPageComponents/DeleteProjectModal";
import { ProjectCardProps } from "../constants/types";
import ProjectCard from "../components/projectsPageComponents/ProjectCard";

interface Props {
  menuCollapse: boolean;
}

const Projects: React.FC<Props> = ({menuCollapse}) => {
  const [filteredCards, setFilteredCards] =
    useState<ProjectCardProps[]>(projectCardData);
  const [isOpen, setIsOpen] = useState(false);
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [editProjectModalOpen, setEditProjectModalOpen] = useState(false);
  const [deleteProjectModalOpen, setDeleteProjectModalOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | undefined>(undefined);

  useEffect(() => {
    document.title = "Projects-TaskHub"
  }, [])

  const handleFilter = (deadline: string) => {
    if (deadline === "All") {
      setFilteredCards(projectCardData);
    } else {
      const filtered = projectCardData.filter((card) => {
        if (deadline === "Completed" && card.deadline === deadline) {
          return true;
        } else if (deadline === "Approval" && card.deadline === deadline) {
          return true;
        } else if (
          deadline === "Started" &&
          !["Completed", "Approval"].includes(card.deadline)
        ) {
          return true;
        } else {
          return false;
        }
      });
      setFilteredCards(filtered);
    }
  };

  const handleDeleteProject = (projectIndex: number) => {
    const updatedProjects = filteredCards.filter(
      (_, index) => index !== projectIndex
    );
    setFilteredCards(updatedProjects);
  };

  return (
    <>
      <Grid
        container
        mt={0}
        mb={2}
        sx={{ pl: { xs: 0, lg: menuCollapse ? 14 : 36 }}}
        rowSpacing={6}
        columnSpacing={2}
      >
        <Grid item mb={5} xs={12}>
          <Box
            display="flex"
            mb={2}
            flexDirection={{ sm: "row", xs: "column" }}
            justifyContent="space-between"
            alignItems={{ sm: "center", xs: "" }}
          >
            <Typography mb={{ sm: 0, xs: 1 }} variant="h4" fontWeight="bold">
              Projects
            </Typography>
            <Box
              gap={2}
              display="flex"
              flexDirection={{ sm: "row", xs: "column" }}
            >
              <CustomButton
                title="Create Project"
                containerStyles="w-full py-2 px-2 rounded-md bg-[#4C3575] "
                textStyles="text-white text-[14px] leading-[17px]"
                leftIcon={<FaPlusCircle className="text-white" />}
                handleClick={() => setProjectModalOpen(true)}
              />
              <BtnGroup handleFilter={handleFilter} />
            </Box>
          </Box>
          <Divider />
        </Grid>
        {filteredCards.map((card, index) => (
          <Grid item md={4} sm={6} xs={12} key={index}>
            <ProjectCard
              key={card.id}
              index={index}
              id={card.id}
              icon={card.icon}
              name={card.name}
              title={card.title}
              deadline={card.deadline}
              progValue={card.progValue}
              details={card.details}
              onEditClick={() => setEditProjectModalOpen(true)}
              onDeleteClick={(index: number) => {
                setDeleteProjectModalOpen(true);
                setSelectedProjectIndex(index);
              }}
              onInviteClick={() => setIsOpen(true)}
            />
          </Grid>
        ))}
      </Grid>
      <EditProjectModal
        isOpen={editProjectModalOpen}
        closeModal={() => setEditProjectModalOpen(false)}
      />
      <CreateProjectModal
        isOpen={projectModalOpen}
        closeModal={() => setProjectModalOpen(false)}
      />
      <InviteMemberModal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
      <DeleteProjectModal
        selectedProjectIndex={selectedProjectIndex}
        isOpen={deleteProjectModalOpen}
        closeModal={() => setDeleteProjectModalOpen(false)}
        handleDeleteProject={(projectId: number) =>
          handleDeleteProject(projectId)
        }
      />
    </>
  );
};

export default Projects;
