import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Avatar,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
  Button,
  Drawer,
} from "@material-ui/core";

import {
  Event,
  NearMe,
  Home,
  PersonOutline,
  ArrowForward,
} from "@material-ui/icons";

import { guest_avatar } from "../../../constants/resource";

import "./SideMenu.css";

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 300,
    background: "#eee",
    height: "100%",
  },
  avatar: {
    margin: "0.5rem auto",
    padding: "1rem",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "rgba(0, 0, 0, 0.54)",
    "&:hover": {
      backgroundColor: "lightgrey",
    },
  },
  itemLink: {
    textDecoration: "none",
  },
  arrow: {
    justifyContent: "flex-end",
  },
  disableLink: {
    pointerEvents: "none",
  },
}));

const listItems = [
  {
    listIcon: <Home />,
    listText: "Về trang chủ",
    link: "/",
  },
  {
    listIcon: <Event />,
    listText: "Sự kiện",
    link: "/events",
  },
  {
    listIcon: <Event />,
    listText: "Cập nhật gần đây",
    link: "/news",
  },
  {
    listIcon: <PersonOutline />,
    listText: "Về tôi",
    link: "/about-me",
  },
  {
    listIcon: <NearMe />,
    listText: "Liên hệ",
    link: "/contact",
  },
];

const SideMenu = ({ open, toggleSlider, location }) => {
  const classes = useStyles();
  const [hovered, setHovered] = useState(null);
  return (
    <Drawer open={open} anchor="left" onClose={toggleSlider}>
      <Box
        className={[classes.menuSliderContainer, "flex-split-topbottom"].join(
          " "
        )}
        component="div"
      >
        {/* Sidebar header */}
        <div>
          <Avatar className={classes.avatar} src={guest_avatar} alt="Guest" />
          <div className="flex-center">
            <Chip label="Tài khoản khách" size="small" color="primary" />
          </div>
        </div>

        {/* Sidebar body */}
        <div>
          <List>
            {listItems.map((listItem, index) => (
              <Link
                to={listItem.link}
                className={[
                  classes.itemLink,
                  location.pathname === listItem.link
                    ? classes.disableLink
                    : "",
                ].join(" ")}
                key={index}
                onMouseEnter={(e) => setHovered(index)}
                onMouseLeave={(e) => setHovered(null)}
              >
                <ListItem className={classes.listItem}>
                  <ListItemIcon className={classes.listItem}>
                    {listItem.listIcon}
                  </ListItemIcon>
                  <ListItemText
                    primary={listItem.listText}
                    className="currentItemText"
                  />
                  {hovered === index ? (
                    <ListItemIcon id="hoveredArrow" className={classes.arrow}>
                      <ArrowForward />
                    </ListItemIcon>
                  ) : (
                    ""
                  )}
                </ListItem>
              </Link>
            ))}
          </List>
        </div>

        {/* Sidebar footer */}
        <div className="vertical-spacing-2">
          <div className="flex-center">
            <Typography variant="subtitle2" style={{ margin: "1em 0" }}>
              Để truy cập thêm nhiều chức năng khác
            </Typography>
          </div>
          <div className="flex-center">
            <Button variant="contained">Đăng nhập / Đăng ký</Button>
          </div>
        </div>
      </Box>
    </Drawer>
  );
};

export default SideMenu;
