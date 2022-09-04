import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core/';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';
import './styles.css'
import { ExpandMore } from '@material-ui/icons';

const Event = ({ event, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (e, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <Accordion expanded={expanded === event._id} onChange={handleChange(event._id)} className={classes.card} style={{borderRadius: "15px"}}>
      <AccordionSummary expandIcon={<ExpandMore />}
                        className={[classes.cardHeader, 'with-img-cover'].join(' ')}>
        <img src={event.selectedImg} alt={event.eventTitle} className={classes.cardImg} />
        <div className='full-width flex-center'>
          <Typography style={{textTransform: 'uppercase'}}>Dự kiến diễn ra</Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
          Aliquam eget maximus est, id dignissim quam.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Event;
