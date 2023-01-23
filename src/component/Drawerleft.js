import { Box, Drawer, List } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const Drawerleft = () => {
  const [drawer, setdrawer] = useState(false);
  return (
    <>
      <Box sx={{ margin: "20px" }}>
        {drawer === true ? (
          <CloseIcon onClick={() => setdrawer(false)} />
        ) : (
          <MenuIcon onClick={() => setdrawer(true)} />
        )}
      </Box>

      <Drawer
        PaperProps={{
          sx: {
            marginTop: "60px",
          },
        }}
        open={drawer}
        onClose={() => setdrawer(false)}
      >
        <Box sx={{ width: "250px", textAlign: "left" }}>
          <List>
            <Box>
              <List sx={{ margin: "15px" }}>Home</List>
              <List sx={{ margin: "15px" }}>Service</List>
              <List sx={{ margin: "15px" }}>About us</List>
              <List sx={{ margin: "15px" }}>Product</List>
              <List sx={{ margin: "15px" }}>State</List>
              <List sx={{ margin: "15px" }}>Country</List>
              <List sx={{ margin: "15px" }}>Delhi</List>
              <List sx={{ margin: "15px" }}>Hyderabad</List>
              <List sx={{ margin: "15px" }}>Login</List>
            </Box>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Drawerleft;
