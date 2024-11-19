import React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Paper } from "@mui/material";
import PostComments from "./post_comments";

// Styled components remain as-is, but Tailwind CSS will handle the layout and styling
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  width: "100%", // Ensure full width
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  width: "100%", // Full width
  paddingLeft: `calc(1em + ${theme.spacing(4)})`, // Space for the search icon
  paddingRight: theme.spacing(2), // Optional: padding on the right side
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 0),
    transition: theme.transitions.create("width"),
  },
}));

const StyledSearchIcon = styled(SearchIcon)(({ theme }) => ({
  color: "black",
}));

function Message() {
  return (
    <div className="flex-grow overflow-y-auto p-3 bg-[#96DEDA] scrollbar-hide">
      <Paper className="sticky top-0 z-10 flex items-center w-full h-12 bg-gray-10">
        {" "}
        {/* Changed to light grey */}
        <Search className="relative w-full">
          <SearchIconWrapper className="absolute inset-y-0 left-0 flex items-center pl-2">
            <StyledSearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search For Posts..."
            inputProps={{ "aria-label": "search" }}
            className="w-full pl-10 pr-4"
          />
        </Search>
      </Paper>
      <div className="mt-2">
        {" "}
        {/* Add margin-top to ensure comments are below the fixed search bar */}
        <PostComments />
        <PostComments />
        <PostComments />
        <PostComments />
      </div>
    </div>
  );
}

export default Message;
