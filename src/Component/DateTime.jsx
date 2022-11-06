
import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';


export const DateTimeDemo = () => {

    const [date1, setDate1] = useState(null);

    return (
        <div className='mycomp'>
            <div className="p-fluid grid formgrid">
                <div className="field col-12 md:col-4">
                    <label htmlFor="time24">Date - Time</label>
                    <Calendar id="time24" value={date1} onChange={(e) => setDate1(e.value)} showTime showSeconds />
                </div>
            </div>
        </div>
    );
}
export default DateTimeDemo;