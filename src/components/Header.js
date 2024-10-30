import React, { useState } from "react";
import { AppBar, Toolbar, Button, Drawer, List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../components/image/7.png"; // مسیر به فایل لوگو خود را وارد کنید

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  const DrawerList = (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      style={{ padding: "16px", textAlign: "right" }} // راست‌چین کردن جعبه
    >
      <List>
        <ListItem>
          <Button
            component={Link}
            to="/"
            onClick={toggleDrawer(false)}
            sx={{
              color: "black",
              fontWeight: "bold",
              width: "100%",
              textAlign: "right",
            }} // راست چین
          >
          Home
          </Button>
        </ListItem>
        <ListItem>
          <Button
            component={Link}
            to="/about"
            onClick={toggleDrawer(false)}
            sx={{
              color: "black",
              fontWeight: "bold",
              width: "100%",
              textAlign: "right",
            }} // راست چین
          >
            About the place
          </Button>
        </ListItem>
        <ListItem>
          <Button
            component={Link}
            to="/explore"
            onClick={toggleDrawer(false)}
            sx={{
              color: "black",
              fontWeight: "bold",
              width: "100%",
              textAlign: "right",
            }} // راست چین
          >
           exploring
          </Button>
        </ListItem>
      </List>
    </div>
  );

  return (
    <AppBar position="static" sx={{ bgcolor: "primary.main" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {" "}
        {/* تنظیمات Toolbar */}
        <Link to="/">
          {" "}
          {/* لینک به صفحه اصلی */}
          <img
            src={logo}
            alt="لوگو"
            style={{ height: "40px", cursor: "pointer" }}
          />{" "}
          {/* لوگو */}
        </Link>
        <div style={{ display: "flex", gap: "16px" }}>
          {" "}
          {/* دکمه‌ها در وسط نوار با فضاگذاری */}
          {/* <Button component={Link} to="/" sx={{ color: "white", fontWeight: "bold" }}>خانه</Button>  
          <Button component={Link} to="/about" sx={{ color: "white", fontWeight: "bold" }}>درباره ی مکان</Button>  
          <Button component={Link} to="/explore" sx={{ color: "white", fontWeight: "bold" }}>کاوش</Button>   */}
        </div>
        <Button onClick={toggleDrawer(true)} sx={{ color: "black" }}>
          Menu
        </Button>
      </Toolbar>
      <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </AppBar>
  );
};

export default Header;
