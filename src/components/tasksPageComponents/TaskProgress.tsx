import { Box, LinearProgress, Typography } from "@mui/material";
import { taskProgressData } from "../../data/mockData";

const TaskProgress: React.FC = () => {
  return (
    <Box
      bgcolor="white"
      display="flex"
      flexDirection="column"
      gap={2}
      border={1}
      borderColor="#F0F0F0"
      borderRadius={2}
      padding="15px"
    >
      <Typography variant="h6" fontWeight="bold">
        Task Progress
      </Typography>
      <Box height={260} sx={{ overflowY: "scroll" }}>
        {taskProgressData.map((data) => (
          <Box display="flex" flexDirection="column">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mt={3}
            >
              <Typography variant="subtitle1" fontWeight="bold">
                {data.title}
              </Typography>
              <Typography variant="caption" color="GrayText">
                {data.date}
              </Typography>
            </Box>
            <LinearProgress
              sx={{
                height: 10,
                borderRadius: 5,
                backgroundColor: "#F0F0F0",
                "& .MuiLinearProgress-bar": {
                  borderRadius: 5,
                  backgroundColor:
                    data.title === "UI/UX Design"
                      ? "#EEE5FF"
                      : data.title === "Web Design"
                      ? "#A8D7E0"
                      : data.title === "Quality Assurance"
                      ? "#A0D9B4"
                      : data.title === "Development"
                      ? "#FFAA8A"
                      : data.title === "Testing"
                      ? "#FFE28C"
                      : "",
                },
              }}
              variant="determinate"
              value={data.progValue}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TaskProgress;
