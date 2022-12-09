const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("db/databas.db");



import React, {useState} from 'react';
import BookingCalendar from 'booking-calendar';

export default function App() {
    const today = new Date()
    const nextWeek =  new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);
    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(nextWeek);

    return (
        <BookingCalendar 
            defaultAvailable={true}
            onSelectStart={setStartDate}
            onSelectEnd={setEndDate}
            bookingPickerType={'dateRangePicker'}
        />
    );

}