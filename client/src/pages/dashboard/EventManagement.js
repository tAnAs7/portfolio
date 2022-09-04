import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getEvents } from "../../actions/events";

import { Container, Grid, Grow, IconButton, Menu } from "@material-ui/core";

import EventCards from "../../components/Events/EventCards";
import EventInput from "../../components/Management/Events/EventInput";

import BasicTimeline from "../../molecules/timeline";
import { MenuBook } from "@material-ui/icons";

const EventManagement = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, [currentId, dispatch]);

  return (
    <>
      <Grow in>
        <>
          <Container className="vertical-spacing-1">
            {/* <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={4}>
              <EventInput currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={8}>
              <EventCards setCurrentId={setCurrentId} />
            </Grid>
          </Grid> */}
            {/* <BasicTimeline /> */}

            <EventCards setCurrentId={setCurrentId} />
          </Container>
        </>
      </Grow>
    </>
  );
};

export default EventManagement;
