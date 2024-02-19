import { Box, Divider, Typography } from "@mui/material";
import { taskRecentActivities } from "../../data/mockData";

const TaskRecentActivity: React.FC = () => {
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
        Recent Activities
      </Typography>
      <Box height={260} sx={{ overflowY: "scroll" }}>
        {taskRecentActivities.map((activity) => (
          <Box
            borderLeft={1}
            borderColor="#E0E0E0"
            display="flex"
            flexDirection="column"
            gap={2}
          >
            <Box display="flex" paddingLeft={2} gap={2}>
              <Box>{activity.avatar}</Box>
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  {activity.activity}
                </Typography>
                <Typography variant="subtitle2" color="GrayText">
                  {activity.time}
                </Typography>
              </Box>
            </Box>
            <Divider sx={{ mb: 2 }} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TaskRecentActivity;
