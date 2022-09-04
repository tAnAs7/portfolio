import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';

import useStyles from './styles';

import Event from './Event/Event';
import Page204 from '../../molecules/responds/page204'

const Events = ({ setCurrentId }) => {
  const events = useSelector((state) => state.events);
  const classes = useStyles();

  return (
    <>
    {!events.length ? 
      <Page204 /> :
      <Paper elevation={3} className='vertical-spacing-1'>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {events.map((event) => (
            <Grid key={event._id} item xs={12}>
              <Event event={event} setCurrentId={setCurrentId} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    }
    </>
  );
};

export default Events;
