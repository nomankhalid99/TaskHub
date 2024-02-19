import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { paymentsData } from "../../data/mockData";
import React from "react";

const PaymentsTable: React.FC = () => {
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      type: "number",
      headerAlign: "left",
      align: "left",
      renderCell: ({ row }) => (
        <Box display="flex" alignItems="center">
          <span style={{ fontWeight: "bold", color:"#E05187" }}>
            {row.id}
          </span>
        </Box>
      ),
    },
    {
      field: "project",
      headerName: "Project",
      flex: 1,
    },
    {
      field: "client",
      headerName: "Client Name",
      flex: 1,
    },
    {
      field: "dateStart",
      headerName: "Date-Start",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "dateEnd",
      headerName: "Date-End",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "status",
      headerName: "Status",
      headerAlign: "center",
      align: "center",
      flex: 1,
      renderCell: ({ row }) => {
        const { status } = row;
        return (
          <Box margin="0 auto" display="flex" justifyContent="center">
            <Typography
              variant="caption"
              px={0.5}
              borderRadius={2}
              sx={{
                backgroundColor:
                  status === "Pending"
                    ? "#FFC107"
                    : status === "Paid"
                    ? "#198754"
                    : "#A883BA",
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
        rows={paymentsData}
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

export default PaymentsTable;
