import { Box, Divider, Typography } from "@mui/material";
import { experienceCardData } from "../../data/mockData";

const ExperienceCard: React.FC = () => {
  return (
    <Box
      bgcolor="white"
      display="flex"
      border={1}
      borderColor="#F0F0F0"
      flexDirection="column"
      borderRadius={1}
      mt={2}
      padding="15px"
    >
      <Typography variant="subtitle1" fontWeight="bold">
        Experience
      </Typography>
      <Box mt={3}>
        {experienceCardData.map((activity) => (
          <Box borderLeft={1} borderColor='#E0E0E0' display="flex" flexDirection="column" gap={2}>
            <Box display="flex" paddingLeft={2} gap={2}>
              <Box>{activity.avatar}</Box>
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  {activity.company}
                </Typography>
                <Typography variant="subtitle1" color="GrayText">
                  {activity.experience}
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

export default ExperienceCard;
