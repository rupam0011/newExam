import React, { useState } from "react";
import { AppBar, Box, Toolbar, Typography, Button, Avatar, Container, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom"; // Correct import for routing
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"; // Import Icon
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  // Open Menu Handler
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close Menu Handler
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent", padding: "8px 0" }} elevation={0}>
      <Container>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

          {/* Logo and Navigation */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "50px" }}>
            <img
              src="https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-black.png"
              alt="logo img"
            />

            {/* Navigation Links */}
            <Box sx={{ display: "flex", gap: "30px" }}>

              {/* Product (Dropdown) */}
              <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={handleMenuOpen}>
                <Typography sx={navStyle}>Product</Typography>
                <KeyboardArrowDownIcon
                  sx={{
                    fontSize: "20px",
                    marginLeft: "5px",
                    color: "black",
                    transition: "transform 0.2s ease",
                    transform: anchorEl ? "rotate(180deg)" : "rotate(0deg)", // Rotate icon when menu opens
                  }}
                />
              </Box>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                MenuListProps={{ "aria-labelledby": "product-button" }}
              >
                <MenuItem onClick={handleMenuClose} component={Link} to="/features">Features</MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} to="/accessibility">Accessibility</MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} to="/status">Staus</MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} to="/integrations">Integrations</MenuItem>
              </Menu>

              {/* Other Links */}
              <Typography as={Link} to="/" sx={navStyle}>Enterprise</Typography>
              <Typography as={Link} to="/" sx={navStyle}>Resources</Typography>
              <Typography as={Link} to="/" sx={navStyle}>Pricing</Typography>
            </Box>
          </Box>

          {/* User Profile Section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <SearchIcon sx={{color:"black", cursor:"pointer"}} />
            <Typography sx={{ color: "black", cursor:"pointer", fontWeight:600}}>Sign in</Typography>
            <Button variant="outlined" sx={{ color: "#642067", borderColor: "#642067", fontWeight: 600 }}>
              TALK TO SALES
            </Button>
            <Button variant="contained" sx={{ bgcolor: "#642067", fontWeight: 600 }}>
              TRY FOR FREE
            </Button>

          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

const navStyle = {
  color: "black",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  cursor: "pointer",
  "&:hover": { color: "#642067" },
};

export default Header;
