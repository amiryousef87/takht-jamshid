import React, { useState } from "react";  
import { AppBar, Toolbar, Typography, Button, Drawer, List, ListItem } from "@mui/material";  
import { Link } from "react-router-dom";  

const Header = () => {  
  const [open, setOpen] = useState(false);  

  const toggleDrawer = (open) => (event) => {  
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {  
      return;  
    }  
    setOpen(open);  
  };  

  const DrawerList = (  
    <div  
      role="presentation"  
      onClick={toggleDrawer(false)}  
      onKeyDown={toggleDrawer(false)}  
      style={{ padding: '16px' }} // اضافه کردن padding  
    >  
      <List>  
        <ListItem>  
          <Button component={Link} to="/" onClick={toggleDrawer(false)} sx={{ color: "black", fontWeight: "bold", width: "100%" }}>  
            خانه  
          </Button>  
        </ListItem>  
        <ListItem>  
          <Button component={Link} to="/about" onClick={toggleDrawer(false)} sx={{ color: "black", fontWeight: "bold", width: "100%" }}>  
            درباره ما  
          </Button>  
        </ListItem>  
      </List>  
    </div>  
  );  

  return (  
    <AppBar position="static" sx={{ bgcolor: "primary.main" }}>  
      <Toolbar>  
        <Typography   
          variant="h6"   
          sx={{ flexGrow: 1, cursor: "pointer", fontWeight: "bold", color: "black" }}   
          onClick={toggleDrawer(true)} // فقط اینجا منو باز می‌شود  
        >  
          تخت جمشید  
        </Typography>  
        <Drawer open={open} onClose={toggleDrawer(false)}>  
          {DrawerList}  
        </Drawer>  
      </Toolbar>  
      {/* <Typography  
        variant="h6"  
        sx={{ textAlign: "center", fontWeight: "bold", color: "black", padding: "16px 0" }} // متن زیرین هدر  
      >  
        تخت جمشید  
      </Typography>   */}
    </AppBar>  
  );  
};  

export default Header;