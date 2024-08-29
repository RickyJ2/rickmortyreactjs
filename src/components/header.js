import { AppBar, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import ListMenu from "./listMenu";
import { Menu } from "@mui/icons-material";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppBar
      style={{
        display: "flex",
        flexDirection: "row",
        height: "10vh",
        alignItems: "center",
      }}
    >
      <IconButton onClick={() => setIsOpen(true)}>
        <Menu style={{ color: "white" }} />
      </IconButton>
      <Typography>Rick & Morty</Typography>
      <ListMenu open={isOpen} onClose={() => setIsOpen(false)} />
    </AppBar>
  );
};

export default Header;
