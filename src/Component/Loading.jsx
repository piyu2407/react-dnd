
import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

export const LoadingDemo = () => {
    return (
        <div>
            <div className="mycomp">
                <ProgressSpinner style={{ width: '50px', height: '50px' }} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
            </div>
        </div>
    );
}
export default LoadingDemo;