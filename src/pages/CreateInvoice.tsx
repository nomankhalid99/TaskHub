import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import html2pdf from "html2pdf.js";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import CreateInvoiceTable from "../components/CreateInvoiceComponent/CreateInvoiceTable";
import CustomButton from "../components/global/CustomButton";
import {MdOutlineLocalPrintshop } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import CreateInvoiceContent from "../components/CreateInvoiceComponent/CreateInvoiceContent";

interface Props {
  menuCollapse: boolean;
}

const CreateInvoice: React.FC<Props> = ({ menuCollapse }) => {
  const [rows, setRows] = useState([
    {
      item: "Item Name",
      description: "Description",
      unitCost: "$0",
      quantity: "0",
      price: "$0.00",
    },
  ]);

  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [amountDues, setAmountDues] = useState(0);
  const [balanceDue, setBalanceDue] = useState(0);

  const handleAddRow = () => {
    setRows([
      ...rows,
      {
        item: "Item Name",
        description: "Description",
        unitCost: "$0",
        quantity: "0",
        price: "$0.00",
      },
    ]);
  };

  useEffect(() => {
    document.title = "Create Invoice-TaskHub"
  }, [])

  const handleDeleteRow = (index: number) => {
    if (rows.length > 1) {
      const newRows = [...rows];
      newRows.splice(index, 1);
      setRows(newRows);
    }
  };

  // Handle Table Inputs
  const handleInputChange = (
    index: number,
    field: keyof (typeof rows)[0],
    value: string
  ) => {
    const newRows = [...rows];
    newRows[index][field] = value;

    const unitCost = parseFloat(newRows[index].unitCost.replace("$", ""));
    const quantity = parseFloat(newRows[index].quantity);
    newRows[index].price = `$${(unitCost * quantity).toFixed(2)}`;

    setRows(newRows);
  };

  useEffect(() => {
    const newSubtotal = rows.reduce(
      (acc, row) => acc + parseFloat(row.price.replace("$", "")),
      0
    );
    setSubtotal(newSubtotal);

    setTotal(newSubtotal);

    const newAmountDues = isNaN(amountDues) ? 0 : amountDues;
    setAmountDues(newAmountDues);

    const newBalanceDue = newSubtotal - newAmountDues;
    setBalanceDue(newBalanceDue);
  }, [rows, amountDues]);

  // Print the Invoice
  const componentRef = useRef<any>();

  const handlePrintInvoice = useReactToPrint({
    content: () => componentRef.current,
  });

  // Download the Invoice
  const handleDownloadPDF = () => {
    const content = document.getElementById("invoiceContent");

    const pdfOptions = {
      margin: 5,
      filename: "invoice.pdf",
      image: { type: "jpeg", quality: 1.0 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(content).set(pdfOptions).outputPdf().save();
  };

  return (
    <>
      <Grid container mb={2} sx={{ pl: { xs: 0, lg: menuCollapse ? 14 : 36 } }}>
        <Typography mt={4} mb={{ sm: 2, xs: 1 }} variant="h4" fontWeight="bold">
          Create Invoice
        </Typography>
        <Grid item xs={12}>
          <Divider />
          <Box
            id="invoiceContent"
            bgcolor="white"
            borderRadius={1}
            mt={3}
            p={{sm:2, xs:1}}
          >
            <Typography
              variant="h6"
              textTransform="uppercase"
              mb={1}
              fontWeight="bold"
            >
              Invoice
            </Typography>
            <Divider />
            <Box border={1} p={{sm:2, xs:1}} borderRadius={1} mt={3} borderColor="#F0F0F0">
              <form>
                <CreateInvoiceContent balanceDue={balanceDue} />
                <Box mt={3} overflow="scroll">
                  <CreateInvoiceTable
                    rows={rows}
                    handleInputChange={handleInputChange}
                    handleDeleteRow={handleDeleteRow}
                    handleAddRow={handleAddRow}
                    subtotal={subtotal}
                    total={total}
                    amountDues={amountDues}
                    setAmountDues={setAmountDues}
                    balanceDue={balanceDue}
                  />
                </Box>
              </form>
            </Box>
          </Box>
          <Box display="flex" justifyContent="end" mt={2} gap={1}>
            <Box>
              <CustomButton
                title="Print Invoice"
                containerStyles="w-full p-4 rounded-md bg-[#4C3575] "
                textStyles="text-white text-[14px] leading-[17px]"
                leftIcon={<MdOutlineLocalPrintshop className="text-white" />}
                handleClick={handlePrintInvoice}
              />
            </Box>
            <Box>
              <CustomButton
                title="Download PDF"
                containerStyles="w-full p-4 rounded-md bg-[#6C757D] "
                textStyles="text-white text-[14px] leading-[17px]"
                leftIcon={<IoMdDownload className="text-white" />}
                handleClick={handleDownloadPDF}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default CreateInvoice;
