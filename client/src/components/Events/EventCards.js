import React from "react";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

import useStyles from "./eventCardStyles";

import EventCard from "./Event/EventCard";
import Page204 from "../../molecules/responds/page204";

function groupBy(list, keyGetter) {
  const map = new Map();
  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}

const Events = ({ setCurrentId }) => {
  const classes = useStyles();
  const events = useSelector((state) => state.events);
  if (!events.length) return <Page204 />;
  else {
    const grouped = groupBy(events, (event) =>
      new Date(event.createdAt).getMonth()
    );
    return (
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {events.reverse().map((event) => {
          return (
            <Grid key={event._id} item xs={12} sm={6} md={3}>
              <EventCard event={event} setCurrentId={setCurrentId} />
            </Grid>
            // <Grid key={event._id} item xs={12} sm={6} md={4}>
            //   <EventCard event={event} setCurrentId={setCurrentId} />
            // </Grid>
          );
        })}
      </Grid>
    );
  }
};
// return (
//   <>
//     {!events.length ? (
//       <Page204 />
//     ) : (
//       <Grid
//         className={classes.container}
//         container
//         alignItems="stretch"
//         spacing={3}
//       >
//         {events.map((event) => {
//           return (
//             <>
//               <Grid key={event._id} item xs={12} sm={6} md={3}>
//                 <EventCard event={event} setCurrentId={setCurrentId} />
//               </Grid>
//             </>
//             // <Grid key={event._id} item xs={12} sm={6} md={4}>
//             //   <EventCard event={event} setCurrentId={setCurrentId} />
//             // </Grid>
//           );
//         })}
//       </Grid>
//     )}
//   </>
// );

export default Events;
