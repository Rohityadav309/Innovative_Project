import React, { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";

function LeftPaper({ setActivePage }) {
  // Receive setActivePage as a prop
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const items = [
    "Connections",
    "Communities",
    "Suggestions",
    "Connection Requests",
    "Create Community",
  ];

  return (
    <Paper
      elevation={3}
      sx={{
        position: "fixed",
        top: "80px",
        left: "20px",
        width: "20%",
        height: "50vh",
        p: 2,
        transition: "all 0.3s ease",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {items.map((item, index) => (
        <Box
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => setActivePage(item)} // Set active page on click
          sx={{
            p: 1,
            pl: 2,
            textAlign: "left",
            position: "relative",
            backgroundColor: hoveredIndex === index ? "#AAFFA9" : "#fff", // Update hover color
            transition: "all 0.3s ease",
            transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
            cursor: "pointer", // Make it clickable
            "&:hover": {
              backgroundColor: "#AAFFA9", // Apply hover color here too
            },
            "&:after": {
              content: '""',
              position: "absolute",
              right: "-10px",
              top: "50%",
              transform: "translateY(-50%)",
              borderTop: "30px solid transparent",
              borderBottom: "30px solid transparent",
              borderLeft:
                hoveredIndex === index ? "10px solid #AAFFA9" : "none", // Update arrow color to match hover
              transition: "all 0.3s ease",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: hoveredIndex === index ? "1.1rem" : "1rem",
            }}
          >
            {item}
          </Typography>
        </Box>
      ))}
    </Paper>
  );
}

export default LeftPaper;
