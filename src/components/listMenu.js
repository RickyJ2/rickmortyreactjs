import { Drawer, IconButton, List, ListItem, colors } from "@mui/material";
import { Close } from "@mui/icons-material";
import { Link } from "react-router-dom";

const listStyle = {
  "& a": {
    textDecoration: "none",
    fontSize: "1.5rem",
  },
};

const ListMenu = ({ open, onClose }) => {
  return (
    <Drawer open={open} onClose={onClose}>
      <IconButton onClick={onClose}>
        <Close />
      </IconButton>
      <List>
        <ListItem key="home" onClick={onClose} sx={listStyle}>
          <Link to={"/"}>Home</Link>
        </ListItem>
        <ListItem key="lokasi" onClick={onClose} sx={listStyle}>
          <Link to={"/locations"}>Daftar Lokasi</Link>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default ListMenu;
