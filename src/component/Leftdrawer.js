import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";

const Leftdrawer = () => {
  const [isdraweropen, setisdraweropen] = React.useState(false);

  return (
    <>
      <Box sx={{ margin: "1em" }}>

        {isdraweropen === true ? (
          <CloseIcon onClick={() => setisdraweropen(false)} />
        ) : (
          <MenuIcon onClick={() => setisdraweropen(true)} />
        )}
        
      </Box>
      <Drawer
        PaperProps={{
          sx: {
            marginTop: "62px",
          },
        }}
        anchor="left"
        open={isdraweropen}
        onClose={() => setisdraweropen(false)}
      >
        <Box width="250px" textAlign="left" role="presentation">
          <Box>
            <List>
              <Typography>Kaftans</Typography>
              <Typography>Kaftan Kurtas</Typography>
              <Typography>T Shirts</Typography>
              <Typography>Shirt Kaftans</Typography>
              <Typography>New T Shirts</Typography>
              <Typography>New Arrivals</Typography>
              <Typography>Best Sellers</Typography>

              <Typography>
                <PermIdentityIcon />
                Log in
              </Typography>
            </List>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
export default Leftdrawer;
