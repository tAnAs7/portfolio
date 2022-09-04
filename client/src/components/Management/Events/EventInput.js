import React, { useState, useEffect, useRef } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import getBase64 from "../../../third-party/firebase/firebaseUpload";

import DateFnsUtils from "@date-io/date-fns";
import viLocale from "date-fns/locale/vi";

import useStyles from "./styles";

import { createEvent, updateEvent } from "../../../actions/events";
import {
  KeyboardDateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

const EventInput = ({ currentId, setCurrentId }) => {
  const [eventData, setEventData] = useState({
    titleEvent: "",
    descriptionEvent: "",
    path: "",
    tags: "",
    createdAt: new Date(),
    startedAt: null,
    endedAt: null,
    createdBy: "",
    selectedImg: "",
  });
  const [img, setImg] = useState();
  const event = useSelector((state) =>
    currentId ? state.events.find((message) => message._id === currentId) : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();
  const fileRef = useRef();

  useEffect(() => {
    if (event) setEventData(event);
  }, [event]);

  const clear = () => {
    fileRef.current.value = null;
    setCurrentId(0);
    setEventData({
      titleEvent: "",
      descriptionEvent: "",
      path: "",
      tags: "",
      createdAt: new Date(),
      startedAt: null,
      endedAt: null,
      createdBy: "",
      selectedImg: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createEvent(eventData));
      clear();
    } else {
      dispatch(updateEvent(currentId, eventData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="subtitle1" component="h6">
          {currentId
            ? `Chỉnh sửa sự kiện "${event.titleEvent}"`
            : "Tạo mới sự kiện"}
        </Typography>
        <TextField
          name="createdBy"
          variant="outlined"
          label="Người tạo"
          fullWidth
          value={eventData.createdBy}
          onChange={(e) =>
            setEventData({ ...eventData, createdBy: e.target.value })
          }
        />
        <TextField
          name="titleEvent"
          variant="outlined"
          label="Tên sự kiện"
          fullWidth
          value={eventData.titleEvent}
          onChange={(e) =>
            setEventData({ ...eventData, titleEvent: e.target.value })
          }
        />
        <TextField
          name="path"
          variant="outlined"
          label="Chủ sự kiện"
          fullWidth
          value={eventData.path}
          onChange={(e) => setEventData({ ...eventData, path: e.target.value })}
        />
        <TextField
          name="descriptionEvent"
          variant="outlined"
          label="Mô tả chi tiết"
          fullWidth
          multiline
          rows={4}
          value={eventData.descriptionEvent}
          onChange={(e) =>
            setEventData({ ...eventData, descriptionEvent: e.target.value })
          }
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={viLocale}>
          {currentId ? (
            <>
              <KeyboardDateTimePicker
                name="startedAt"
                inputVariant="outlined"
                fullWidth
                disabled
                ampm={false}
                label="Bắt đầu lúc"
                value={eventData.startedAt}
                format="dd MMMM yyyy, HH:mm"
                onChange={(e) => setEventData({ ...eventData, startedAt: e })}
              />
              <KeyboardDateTimePicker
                name="endedAt"
                inputVariant="outlined"
                fullWidth
                disabled
                ampm={false}
                label="Kết thúc lúc"
                value={eventData.endedAt}
                format="dd MMMM yyyy, HH:mm"
                onChange={(e) => setEventData({ ...eventData, endedAt: e })}
              />
            </>
          ) : (
            <>
              <KeyboardDateTimePicker
                name="startedAt"
                inputVariant="outlined"
                disablePast
                fullWidth
                ampm={false}
                label="Bắt đầu lúc"
                value={eventData.startedAt}
                format="dd MMMM yyyy, HH:mm"
                onChange={(e) => setEventData({ ...eventData, startedAt: e })}
              />
              <KeyboardDateTimePicker
                name="endedAt"
                inputVariant="outlined"
                disablePast
                fullWidth
                ampm={false}
                label="Kết thúc lúc"
                value={eventData.endedAt}
                format="dd MMMM yyyy, HH:mm"
                onChange={(e) => setEventData({ ...eventData, endedAt: e })}
              />
            </>
          )}
        </MuiPickersUtilsProvider>
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={eventData.tags}
          onChange={(e) =>
            setEventData({ ...eventData, tags: e.target.value.split(",") })
          }
        />

        {/* File Input */}
        <div className={classes.fileInput}>
          <input
            type="file"
            ref={fileRef}
            accept="image/png, image/jpeg"
            onChange={async (e) =>
              await getBase64(e).then((link) => {
                setEventData({ ...eventData, selectedImg: link });
              })
            }
          />
        </div>

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Thêm
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Làm mới
        </Button>
      </form>
    </Paper>
  );
};

export default EventInput;
