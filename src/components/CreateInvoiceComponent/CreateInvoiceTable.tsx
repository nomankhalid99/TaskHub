import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IconButton, Typography } from "@mui/material";
import { MdDelete } from "react-icons/md";
import CustomButton from "../global/CustomButton";
import { CreateInvoiceTableProps } from "../../constants/types";

const CreateInvoiceTable: React.FC<CreateInvoiceTableProps>  = ({
  rows,
  handleInputChange,
  handleDeleteRow,
  handleAddRow,
  subtotal,
  total,
  balanceDue,
  amountDues,
  setAmountDues,
}) => {
  return (
    <Table
      sx={{
        minWidth: 650,
        borderRadius: 2,
        border: 1,
        borderColor: "#F0F0F0",
        "& .MuiTableCell-root": {
          padding: "5px",
        },
      }}
      aria-label="simple table"
    >
      <TableHead sx={{ bgcolor: "#F0F0F0" }}>
        <TableRow>
          <TableCell
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              border: "1px solid #F0F0F0",
              padding: "12px",
            }}
          >
            Item
          </TableCell>
          <TableCell
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              border: "1px solid #F0F0F0",
              padding: "12px",
            }}
            align="left"
          >
            {" "}
            Description
          </TableCell>
          <TableCell
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              border: "1px solid #F0F0F0",
              padding: "12px",
            }}
            align="left"
          >
            {" "}
            Unit Cost
          </TableCell>
          <TableCell
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              border: "1px solid #F0F0F0",
              padding: "12px",
            }}
            align="left"
          >
            {" "}
            Quantity
          </TableCell>
          <TableCell
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              border: "1px solid #F0F0F0",
              padding: "12px",
            }}
            align="left"
          >
            {" "}
            Price
          </TableCell>
          <TableCell
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              border: "1px solid #F0F0F0",
              padding: "12px",
            }}
          >
            Actions
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow
            key={index}
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
              "& td": { border: "1px solid #F0F0F0", padding: "12px" },
            }}
          >
            <TableCell width="25%">
              <textarea
                style={{
                  resize: "none",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  width: "100%",
                  fontSize: "16px",
                }}
                value={row.item}
                onChange={(e) =>
                  handleInputChange(index, "item", e.target.value)
                }
              />
            </TableCell>
            <TableCell width="35%" align="left">
              <textarea
                style={{
                  resize: "none",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  width: "100%",
                  fontSize: "16px",
                }}
                value={row.description}
                onChange={(e) =>
                  handleInputChange(index, "description", e.target.value)
                }
              />
            </TableCell>
            <TableCell width="80px" align="left">
              <textarea
                style={{
                  resize: "none",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  width: "100%",
                  fontSize: "16px",
                }}
                value={row.unitCost}
                onChange={(e) =>
                  handleInputChange(index, "unitCost", e.target.value)
                }
              />
            </TableCell>
            <TableCell width="80px" align="left">
              <textarea
                style={{
                  resize: "none",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  width: "100%",
                  fontSize: "16px",
                }}
                value={row.quantity}
                onChange={(e) =>
                  handleInputChange(index, "quantity", e.target.value)
                }
              />
            </TableCell>
            <TableCell width="80px" align="left">
              <Typography>{row.price}</Typography>
            </TableCell>
            <TableCell width="60px">
              <IconButton onClick={() => handleDeleteRow(index)}>
                <MdDelete color="#E3654B" />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
        <CustomButton
          title="Add a Row"
          containerStyles="bg-[#E05170] text-white px-2 text-sm py-1 ms-4 rounded-md my-2 hover:bg-[#cc284b]"
          handleClick={handleAddRow}
        />
        <TableRow>
          <TableCell colSpan={2} />
          <TableCell
            colSpan={2}
            align="right"
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              border: "1px solid #F0F0F0",
              padding: "12px",
            }}
          >
            Subtotal:
          </TableCell>
          <TableCell
            colSpan={2}
            align="left"
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              border: "1px solid #F0F0F0",
              padding: "12px",
            }}
          >
            ${subtotal.toFixed(2)}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={2} />
          <TableCell
            colSpan={2}
            align="right"
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              border: "1px solid #F0F0F0",
              padding: "12px",
            }}
          >
            Total:
          </TableCell>
          <TableCell
            colSpan={2}
            align="left"
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              border: "1px solid #F0F0F0",
              padding: "12px",
            }}
          >
            ${total.toFixed(2)}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={2} />
          <TableCell
            colSpan={2}
            align="right"
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              border: "1px solid #F0F0F0",
              padding: "12px",
            }}
          >
            Amount Dues:
          </TableCell>
          <TableCell
            colSpan={2}
            align="left"
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              border: "1px solid #F0F0F0",
              padding: "12px",
            }}
          >
            {" "}
            <textarea
              style={{
                resize: "none",
                paddingTop: "5px",
                paddingBottom: "5px",
                width: "100%",
                fontSize: "16px",
              }}
              value={amountDues}
              onChange={(e) => setAmountDues(parseFloat(e.target.value))}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={2} />
          <TableCell
            colSpan={2}
            align="right"
            sx={{
              bgcolor: "#F0F0F0",
              fontSize: "16px",
              fontWeight: "bold",
              border: "1px solid #F0F0F0",
              padding: "12px",
            }}
          >
            Balance Due:
          </TableCell>
          <TableCell
            colSpan={2}
            align="left"
            sx={{
              bgcolor: "#F0F0F0",
              fontSize: "16px",
              fontWeight: "bold",
              border: "1px solid #F0F0F0",
              padding: "12px",
            }}
          >
            ${balanceDue.toFixed(2)}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default CreateInvoiceTable;
