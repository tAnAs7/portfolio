import React from "react";
import { moment, parseMoment } from "../../../utils/momentSuffix";
import { useDispatch } from "react-redux";

import useStyles from "./eventCardStyles";
import "./styles.css";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import { MoreHoriz } from "@material-ui/icons";

const Event = ({ event, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          event.selectedImg ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        title={event.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{event.titleEvent}</Typography>
        <Typography variant="body2">
          {parseMoment(event.startedAt, event.endedAt)}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(event._id)}
        >
          <MoreHoriz fontSize="medium" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {event.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {event.titleEvent}
      </Typography>
      <CardContent>
        <Typography variant="subtitle1" color="textSecondary" component="p">
          {event.descriptionEvent}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Tạo bởi: {event.createdBy}
        </Typography>
        {event.path ? (
          <Link href={document.URL + "/" + event.path}>
            &rarr; Đến trang quản lý
          </Link>
        ) : (
          <Link href={document.URL + "/" + event._id}>
            &rarr; Đến trang quản lý
          </Link>
        )}
      </CardContent>
      {/* <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions> */}
    </Card>
  );
};

export default Event;
