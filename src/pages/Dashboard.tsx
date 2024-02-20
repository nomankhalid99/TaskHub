import { Box, Typography, Grid } from "@mui/material";
import { LiaClipboardListSolid } from "react-icons/lia";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import ProjectTable from "../components/dashboardComponents/ProjectTable";
import TimeLineChart from "../components/dashboardComponents/TimeLineChart";
import PolarAreaChart from "../components/dashboardComponents/PolarAreaChart";
import DashboardForm from "../components/dashboardComponents/DashboardForm";
import { projectData, taskData } from "../data/mockData";
import { useEffect } from "react";
import { Link } from "react-router-dom";

interface Props {
  menuCollapse: boolean;
}

const Dashboard: React.FC<Props> = ({ menuCollapse }) => {
  useEffect(() => {
    document.title = "TaskHub";
  }, []);
  return (
    <>
      <Grid
        container
        mb={2}
        sx={{ pl: { xs: 0, lg: menuCollapse ? 14 : 36 } }}
        spacing={2}
      >
        {taskData.map((item) => (
          <Grid item key={item.title} md={4} sm={6} xs={12}>
            <Box
              display="flex"
              alignItems="center"
              border={1}
              borderColor="#F0F0F0"
              bgcolor="White"
              borderRadius={2}
              p={3}
            >
              <Box
                bgcolor={
                  item.icon.type === LiaClipboardListSolid
                    ? "#FFE28C"
                    : "#A7DAFF"
                }
                padding={2}
                borderRadius={2}
              >
                {item.icon}
              </Box>
              <Box
                display="flex"
                ml={2}
                justifyContent="space-between"
                width="100%"
                alignItems="center"
              >
                <Box>
                  <Typography variant="body1">{item.title}</Typography>
                  <Typography variant="h6" fontWeight="bold">
                    {item.amount}
                  </Typography>
                </Box>
                <Link to="/tasks">
                  <Box>
                    <TbArrowBadgeRightFilled fontSize="54px" />
                  </Box>
                </Link>
              </Box>
            </Box>
          </Grid>
        ))}
        <Grid item md={7} xs={12}>
          <Grid
            container
            border={1}
            borderColor="#F0F0F0"
            bgcolor="white"
            sx={{ p: 2, borderRadius: 2 }}
          >
            <Grid
              item
              order={{ sm: 1, xs: 2 }}
              sm={6}
              xs={12}
              sx={{
                gap: "20px",
                display: "flex",
                flexDirection: "column",
                mt: { xs: 3, lg: 0 },
              }}
            >
              <Typography variant="h4" fontWeight="bold">
                Dylan Hunter
              </Typography>
              <Typography sx={{ paddingRight: 3 }}>
                Welcome back Dylan Hunter. Integer molestie, arcu non porta
                sollicitudin, arcu felis aliquam urna, placerat maximus lorem
                urna commodo sem. Pellentesque venenatis leo quam, sed mattis
                sapien lobortis ut. Placerat maximus lorem urna commodo sem.
              </Typography>
              <button className="bg-[#E05170] text-white flex self-start py-3 px-5 rounded-md">
                Free Inquire
              </button>
            </Grid>
            <Grid item order={{ sm: 2, xs: 1 }} sm={6} xs={12}>
              <img
                src="https://pixelwibes.com/template/my-task/html/dist/assets/images/task-view.svg"
                alt="dashboard-img"
                className="object-contain"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={5} xs={12}>
          <DashboardForm />
        </Grid>
        <Grid item md={4} xs={12}>
          <Box
            bgcolor={"white"}
            px={3}
            pt={3}
            border={1}
            borderColor="#F0F0F0"
            pb={11}
            display="flex"
            flexDirection="column"
            borderRadius={2}
          >
            <Typography variant="h6" fontWeight="bold">
              Income Analytics
            </Typography>
            <Box
              display="flex"
              gap={2}
              my={2}
              alignSelf={"flex-end"}
              width="full"
            >
              <Box>
                <Typography fontWeight="bold">$5,318</Typography>
                <Typography>Income</Typography>
              </Box>
              <Box>
                <Typography fontWeight="bold">$2,840</Typography>
                <Typography>Expense</Typography>
              </Box>
            </Box>
            <PolarAreaChart />
          </Box>
        </Grid>
        <Grid item md={8} xs={12}>
          <Box
            bgcolor={"white"}
            border={1}
            borderColor="#F0F0F0"
            p={3}
            borderRadius={2}
          >
            <Typography variant="h6" fontWeight="bold">
              Project Timeline
            </Typography>
            <TimeLineChart />
          </Box>
        </Grid>
        {projectData.map((item) => (
          <Grid item md={3} key={item.title} sm={6} xs={12}>
            <Box
              display="flex"
              alignItems="center"
              color="white"
              bgcolor="#4C3575"
              borderRadius={1}
              p={2}
            >
              <Box>{item.icon}</Box>
              <Box ml={2}>
                <Typography variant="subtitle1">{item.title}</Typography>
                <Typography variant="subtitle2">{item.amount}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Box
            bgcolor="white"
            border={1}
            borderColor="#F0F0F0"
            borderRadius={2}
            p={3}
          >
            <Typography variant="h6" fontWeight="bold">
              Projects Information
            </Typography>
            <ProjectTable />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
