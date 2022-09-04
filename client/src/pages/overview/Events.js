import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { OriginCounter } from '../../components/Counter/OriginCounter';
import { Counter } from '../../components/Counter/Counter';
import Events from '../../components/Events/Events';
import { getEvents } from '../../actions/events';


const Event = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, [currentId, dispatch]);

  return (
    <>
      {/* <OriginCounter />
      <Counter /> */}

      <Events setCurrentId={setCurrentId} />
    </>
  );
};

export default Event;
