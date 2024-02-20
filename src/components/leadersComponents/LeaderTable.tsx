import {
  Avatar,
  AvatarGroup,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { FaPlusCircle } from "react-icons/fa";
import { leadersData } from "../../data/mockData";
import React from "react";

interface LeaderProps {
  onInviteClick: () => void;
}

const LeaderTable: React.FC<LeaderProps> = ({ onInviteClick }) => {
  const columns: GridColDef[] = [
    {
      field: "leader",
      headerName: "Leader",
      width:190,
      renderCell: ({ row }) => (
        <Box display="flex" alignItems="center">
          <Avatar src={row.avatar} alt={row.leader} />
          <span style={{ fontWeight: "bold", marginLeft: "8px" }}>
            {row.leader}
          </span>
        </Box>
      ),
    },
    {
      field: "project",
      headerName: "Project",
      width:170,
    },
    {
      field: "tasks",
      headerName: "Total Task",
      width:110,
    },
    {
      field: "email",
      headerName: "Email",
      width:190,
    },
    {
      field: "assigned",
      headerName: "Project Assigned",
      type: "number",
      headerAlign: "left",
      align: "left",
      width:150
    },
    {
      field: "staff",
      headerName: "Assigned Staff",
      width:190,
      renderCell: ({ row }) => {
        const { staff } = row;
        console.log("Staff:", staff);
        return (
          <Box>
            <AvatarGroup
              max={20}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <IconButton
                sx={{ mr: -1, zIndex: 2, color: "#4C3575" }}
                aria-label="add-member"
                onClick={onInviteClick}
              >
                <FaPlusCircle />
              </IconButton>
              {Array.from({ length: Number(staff) }, (_, memberIndex) => (
                <Avatar
                  key={memberIndex}
                  sx={{ height: "24px", width: "24px" }}
                  alt={`Member ${memberIndex + 1}`}
                  src={`https://pixelwibes.com/template/my-task/html/dist/assets/images/xs/avatar${
                    (memberIndex % 5) + 1
                  }.jpg`}
                />
              ))}
            </AvatarGroup>
          </Box>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      headerAlign: "center",
      align: "center",
      width:150,
      renderCell: ({ row }) => {
        const { status } = row;
        console.log("Stage:", status);
        return (
          <Box margin="0 auto" display="flex" justifyContent="center">
            <Typography
              variant="caption"
              px={0.5}
              borderRadius={2}
              sx={{
                backgroundColor: "#198754",
                color: "white",
              }}
            >
              {status}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box
      m="30px 0 0 0"
      p={2}
      border={1}
      borderColor="#F0F0F0"
      borderRadius={1}
      sx={{
        bgcolor: "white",
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
        rows={leadersData}
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
  );
};

export default LeaderTable;
