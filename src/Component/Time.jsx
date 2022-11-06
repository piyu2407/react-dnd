
import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';


export const TimeDemo = () => {

    const [date1, setDate1] = useState(null);

    return (
        <div className='mycomp'>
            <div className="p-fluid grid formgrid">
                <div className="field col-12 md:col-4">
                    <label htmlFor="time12">Time</label>
                    <Calendar id="time12" value={date1} onChange={(e) => setDate1(e.value)} timeOnly hourFormat="12" />
                </div>
            </div>
        </div>
    );
}
export default TimeDemo;