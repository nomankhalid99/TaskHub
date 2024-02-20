import { Box, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import { LuClipboardSignature } from "react-icons/lu";

interface ContentProps{
    balanceDue : number
}

const CreateInvoiceContent : React.FC<ContentProps> = ({ balanceDue}) => {
    const [textareaValue, setTextareaValue] = useState(`Jone Martin,
2838 Oliverio Drive
Allen, Kansas 66833
Phone: (620) 528-2614`);
  return (
    <>
      <Box
        display="flex"
        mb={2}
        gap={2}
        flexDirection={{sm:"row", xs:"column"}}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box order={{sm:1, xs:2}}>
        <pre
          contentEditable
          style={{
            border: "1px solid #F0F0F0",
            backgroundColor: "#EEEEEE",
            borderRadius: "5px",
            width: "250px",
            resize: "none",
            padding: "10px",
            fontSize: "18px",
            whiteSpace: "pre-wrap",
          }}
          onBlur={(e) => setTextareaValue(e.target.innerText)}
        >
          {textareaValue}
        </pre>
        </Box>
        <Box order={{sm:2, xs:1}}>
          <LuClipboardSignature fontSize="40px" color="#4C3575" />
        </Box>
      </Box>
      <Divider />
      <Box
        mt={2}
        display="flex"
        gap={2}
        flexDirection={{md:"row" , xs:"column"}}
        alignItems="start"
        justifyContent="space-between"
      >
        <textarea
          style={{
            border: "1px solid #F0F0F0",
            backgroundColor: "#EEEEEE",
            borderRadius: "5px",
            resize: "none",
            width: "200px",  
            padding: "10px",
            fontSize: "20px",
            fontWeight: "700",
          }}
          defaultValue="Widget Catalog"
          rows={1}
        />
        <Box
          border={1}
          display="flex"
          flexDirection={{sm:"row", xs:"column"}}
          gap={1}
          width={{md:"auto", xs:'100%'}}
          borderRadius={1}
          borderColor="#F0F0F0"
        >
          <Box
            display="flex"
            bgcolor="#EEEEEE"
            width="100%"
            gap={3}
            px={1}
            py={2}
            flexDirection="column"
          >
            <Typography variant="subtitle1">
              Invoice #
            </Typography>
            <Typography variant="subtitle1">
              Date
            </Typography>
            <Typography variant="subtitle1">
              Balance Due
            </Typography>
          </Box>
          <Box display="flex" gap={1} p={0.5} flexDirection="column">
            <input
              style={{
                border: "1px solid #F0F0F0",
                backgroundColor: "#EEEEEE",
                borderRadius: "5px",
                textAlign: "right",
                padding: "8px",
              }}
              defaultValue="000123"
              type="text"
            />
            <Divider />
            <input
              style={{
                border: "1px solid #F0F0F0",
                backgroundColor: "#EEEEEE",
                borderRadius: "5px",
                padding: "8px",
                textAlign: "right",
              }}
              defaultValue="February 16, 2024"
              type="text"
            />
            <Divider />
            <Typography textAlign="end">${balanceDue.toFixed(2)}</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CreateInvoiceContent;
