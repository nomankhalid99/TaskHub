import { Avatar, Box, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { mockDataProjects } from "../../data/mockData";

const ProjectTable = () => {
  const columns: GridColDef[] = [
    {
      field: "title",
      headerName: "Title",
      flex: 1,
    },
    {
      field: "dateStart",
      headerName: "Date-Start",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "deadline",
      headerName: "Deadline",
      flex: 1,
    },
    {
      field: "leader",
      headerName: "Leader",
      flex: 1,
      renderCell: ({ row }) => (
        <Box display="flex" alignItems="center">
          <Avatar src={row.avatarUrl} alt={row.leader} />
          <span style={{ marginLeft: "8px" }}>{row.leader}</span>
        </Box>
      ),
    },
    {
      field: "stage",
      headerName: "Stage",
      headerAlign: "center",
      align: "center",
      flex: 1,
      renderCell: ({ row }) => {
        const { stage } = row;
        return (
          <Box
            width="60%"
            margin="0 auto"
            display="flex"
            justifyContent="center"
            borderRadius="4px"
          >
            <Typography
              variant="caption"
              px={0.5}
              borderRadius={2}
              sx={{
                backgroundColor:
                  stage === "High"
                    ? "#FFC107"
                    : stage === "Medium"
                    ? "#E05170"
                    : "#198754",
                color: "white",
              }}
            >
              {stage}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Box
        m="40px 0 0 0"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "bold",
            fontSize: "16px",
          },
        }}
      >
        <DataGrid
          rows={mockDataProjects}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
        />
      </Box>
    </Box>
  );
};

export default ProjectTable;
