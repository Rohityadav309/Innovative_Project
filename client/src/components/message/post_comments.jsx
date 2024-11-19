import { Box, Paper, TextField, Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import Post from "../post/Post";
import SendIcon from "@mui/icons-material/Send";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

function PostComments() {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  const handleSendClick = () => {
    if (input.trim()) {
      setComments([...comments, input]);
      setInput(""); // Clear the input field after sending
    }
  };

  return (
    <Box style={{ display: "flex"}}>
      <Post />
      <Paper
        style={{
          marginLeft: "10px",
          marginTop: "28px",
          marginBottom: "0px",
          padding: "10px",
          width: "420px",
          height: "548px",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          height:"508px"
        }}
      >
        <div
          style={{
            marginLeft: "20px",
            position: "sticky",
            top: 0,
            background: "#fff",
            zIndex: 1,
            paddingBottom: "10px", // Adjust spacing if needed
          }}
        >
          <h4>Comments</h4>
        </div>
        <div
          style={{
            marginLeft: "10px",
            marginTop: "10px",
            flex: 1,
            overflowY: "auto",
            overflowX: "hidden",
            paddingRight: "10px", // Space for scrollbar
            WebkitOverflowScrolling: "touch",
            wordBreak: "break-word", // Break words to fit container
            maxHeight: "548", // Adjust based on header and footer height
          }}
        >
          {comments.map((comment, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <p>{comment}</p>
            </div>
          ))}
        </div>
        <Box
          style={{
            position: "absolute",
            bottom: "10px",
            left: "10px",
            right: "10px",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#fff", // Match background of the Paper
          }}
        >
          <IconButton>
            <EmojiEmotionsIcon />
          </IconButton>
          <TextField
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="comment..."
            variant="outlined"
            size="small"
            fullWidth
            style={{ marginRight: "10px" }}
          />
          <Button
            onClick={handleSendClick}
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default PostComments;
