import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const dashCalendar = props => (
  <div>
    <BigCalendar
      events={''}
      startAccessor='startDate'
      endAccessor='endDate'
    />
  </div>
);

export default dashCalendar;