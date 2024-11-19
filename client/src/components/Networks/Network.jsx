import React, { useState, useEffect } from "react";
import { Box, Paper, Grid } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import LeftPaper from "./LeftPaper"; // Import LeftPaper component
import RightPaper from "./RightPaper";

function Networks() {
  const [rightPaperElevated, setRightPaperElevated] = useState(3);
  const [activePage, setActivePage] = useState("Connections"); // Active page state

  // Disable scrolling on mount
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div >
      {/* Fixed Navbar */}
      <Box sx={{ position: "fixed", width: "100%", zIndex: 100 }}>
        <Navbar />
      </Box >

      {/* Main content with padding to avoid content behind the fixed navbar */}
      <Box sx={{ pt: 8, p: 3, height: "100vh", overflow: "hidden" , background: "linear-gradient(to right, #4ca1af, #c4e0e5)"}}>
        <Grid container spacing={0} sx={{ height: "100%" }}>
          {/* Left Paper Component */}
          <Grid item xs={3} sx={{ height: "100%", overflowY: "auto" }}>
            <LeftPaper setActivePage={setActivePage} />{" "}
            {/* Pass setActivePage */}
          </Grid>

          {/* Right Paper (Scrolls with the main page) */}
          <Grid item xs={9} sx={{ height: "80%", overflowY: "none" }}>
            
           <div style={{marginTop:"58px"}}>
              <RightPaper activePage={activePage} /> {/* Pass activePage */}
            </div>
          </Grid>
        </Grid>
      </Box>
      </div>
    
  );
}

export default Networks;
