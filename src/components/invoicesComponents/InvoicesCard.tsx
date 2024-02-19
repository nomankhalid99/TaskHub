import { Box, Button, Grid, Pagination, Typography } from "@mui/material";
import React, { useState } from "react";
import { FaLocationDot, FaSackDollar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { invoicesData } from "../../data/mockData";
const InvoicesCard: React.FC = () => {
  const invoicesPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastInvoice = currentPage * invoicesPerPage;
  const indexOfFirstInvoice = indexOfLastInvoice - invoicesPerPage;
  const currentInvoices = invoicesData.slice(
    indexOfFirstInvoice,
    indexOfLastInvoice
  );

  const paginate = (event: React.ChangeEvent<unknown>, pageNumber: number) =>
    setCurrentPage(pageNumber);

  return (
    <>
      {currentInvoices.map((invoice) => (
        <Grid item xs={12} key={invoice.id} gap={2} mt={3}>
          <Box border={1} marginX="auto" maxWidth="700px" borderColor="#F0F0F0">
            <Box
              bgcolor="white"
              display="flex"
              boxShadow="rgba(0, 0, 0, 0.1) 0px 2px 3px;"
              flexDirection={{ sm: "row", xs: "column" }}
              justifyContent={{ sm: "space-between", xs: "center" }}
              alignItems={{ sm: "center", xs: "" }}
              padding={3}
            >
              <Box
                display="flex"
                flexDirection={{ sm: "row", xs: "column" }}
                justifyContent="center"
                gap={2}
                alignItems="center"
              >
                {invoice.avatar}
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems={{ sm: "start", xs: "center" }}
                >
                  <Link to="#" className="hover:text-[#E05170]">
                    <Typography variant="body1">{invoice.client}</Typography>
                  </Link>
                  <Typography variant="body2" color="GrayText">
                    {invoice.project}
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Box
                  display="flex"
                  justifyContent={{ sm: "end", xs: "center" }}
                  gap={0.5}
                  alignItems="center"
                >
                  <FaLocationDot fontSize="13px" />
                  <Typography variant="subtitle2">{invoice.address}</Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent={{ sm: "end", xs: "center" }}
                  gap={0.6}
                  alignItems="center"
                >
                  <FaSackDollar color="GrayText" fontSize="13px" />
                  <Typography variant="body2" color="GrayText">
                    {" "}
                    {invoice.price}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              p={1}
              display="flex"
              flexDirection={{ sm: "row", xs: "column" }}
              justifyContent={{ sm: "space-between", xs: "center" }}
              alignItems="center"
            >
              <Typography variant="body2">
                <span style={{ fontWeight: "bold" }}>Applied on:</span>{" "}
                {invoice.appliedOn}
              </Typography>
              <Box display="flex" gap={1}>
                {(["Download", "Send", "Delete"] as const).map((title) => (
                  <Button
                    className="hover:translate-y-1"
                    key={title}
                    sx={{
                      fontSize: "12px",
                      color: "black",
                      bgcolor: "white",
                      transition: "all 0.2s ease-in-out",
                    }}
                    onClick={() => {}}
                  >
                    {title}
                  </Button>
                ))}
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
      <Box
        sx={{
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "#d4c4f0",
            color: "#4C3575",
          },
        }}
        display="flex"
        justifyContent="center"
        width="100%"
        mt={3}
      >
        <Pagination
          count={Math.ceil(invoicesData.length / invoicesPerPage)}
          page={currentPage}
          onChange={paginate}
          variant="outlined"
          shape="rounded"
        />
      </Box>
    </>
  );
};

export default InvoicesCard;
