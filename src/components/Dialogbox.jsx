import React, { useState } from "react";
import { Snackbar, Button, Typography, IconButton, Box, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";

const Dialogbox = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      {/* Chat Bubble (Click to Open Snackbar) */}
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          display: "flex",
          alignItems: "center",
          backgroundColor: "#fff",
          padding: "8px 12px",
          borderRadius: "20px",
          boxShadow: "0px 2px 10px rgba(0,0,0,0.2)",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        <ChatBubbleOutlineIcon sx={{ color: "#5e2b65", marginRight: 1 }} />
        <Typography variant="body2">Hey there 👋 Want to know something cool?</Typography>
        <EmojiPeopleIcon sx={{ color: "#5e2b65", marginLeft: 1 }} />
      </Box>

      {/* Snackbar */}
      <Snackbar
        open={open}
        autoHideDuration={null} // Stays open until user closes
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Paper
          sx={{
            maxWidth: 400,
            backgroundColor: "#fff",
            padding: 2,
            borderRadius: 2,
            boxShadow: "0px 2px 10px rgba(0,0,0,0.2)",
            position: "relative",
          }}
        >
          {/* Close Button (Top Right) */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 2,
              right: 8,
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Content */}
          <Typography variant="body2" sx={{ textAlign: "center", mb: 2,mr:5 }}>
            This website uses cookies to enhance user experience and analyze performance and traffic on our website.
            We also share information about your use of our site with our social media, advertising, and analytics partners.
            <Typography component="span" sx={{ color: "#007bff", cursor: "pointer", marginLeft: 1, }}>
              More Info
            </Typography>
          </Typography>

          {/* Accept Cookies Button */}
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{
              backgroundColor: "#5e2b65",
              color: "#fff",
              "&:hover": { backgroundColor: "#4a235a" },
              width: "100%",
            }}
          >
            ACCEPT ALL COOKIES
          </Button>
        </Paper>
      </Snackbar>
    </Box>
  );
};

export default Dialogbox;
