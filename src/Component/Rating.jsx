
import React, { useState } from 'react';
import { Rating } from 'primereact/rating';

export const RatingDemo = () => {

    const [val, setVal] = useState(null);

    return (
        <div>
            <div className="mycomp">
                <Rating value={val} cancel={false} onChange={(e) => setVal(e.value)} />
            </div>
        </div>
    )
}

export default RatingDemo;
