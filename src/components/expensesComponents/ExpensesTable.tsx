import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { ExpensesTableProps } from "../../constants/types";

interface ExpensesExtendsTableProps {
  expenses: ExpensesTableProps[];
  onDeleteClick: (id: string) => void;
  onEditClick: () => void;
}

const ExpensesTable: React.FC<ExpensesExtendsTableProps> = ({
  expenses,
  onEditClick,
  onDeleteClick,
}) => {
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "EXP-ID",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "item",
      headerName: "Item",
      flex: 1,
    },
    {
      field: "orderBy",
      headerName: "Ordered By",
      flex: 1,
      renderCell: ({ row }) => (
        <Box display="flex" alignItems="center">
          <Avatar src={row.avatar} alt={row.orderBy} />
          <span style={{ fontWeight: "bold", marginLeft: "8px" }}>
            {row.orderBy}
          </span>
        </Box>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      type: "number",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "from",
      headerName: "From",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "status",
      headerName: "Status",
      headerAlign: "center",
      align: "center",
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
                  status === "In Progress"
                    ? "#FFC107"
                    : status === "Completed"
                    ? "#198754"
                    : status === "Decline"
                    ? "#FC4F2A"
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
    {
      field: "actions",
      headerName: "Actions",
      headerAlign: "center",
      align: "center",
      flex: 1,
      renderCell: (params) => {
        const id = params.row.id;
        return (
          <Box margin="0 auto" display="flex" justifyContent="center">
            <Box
              display="flex"
              sx={{
                border: "1px solid #F0F0F0",
                borderRadius: "4px",
              }}
            >
              <IconButton
                sx={{
                  borderRadius: "4px 0px 0px 4px",
                  color: "#198754",
                  "&:hover": { background: "#E05170", color: "white" },
                }}
                onClick={onEditClick}
              >
                <FaEdit fontSize="16px" />
              </IconButton>
              <IconButton
                sx={{
                  borderRadius: "0px 4px 4px 0px",
                  color: "#E3654B",
                  "&:hover": { background: "#E05170", color: "white" },
                }}
                onClick={() => onDeleteClick(id)}
              >
                <MdDelete fontSize="16px" />
              </IconButton>
            </Box>
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
        rows={expenses}
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

export default ExpensesTable;
