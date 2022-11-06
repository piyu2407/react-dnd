
import React, { useState } from 'react';
import { Panel } from 'primereact/panel';
import { useDrop } from 'react-dnd';


import InputTextDemo from './InputTextDemo';
import TextareaDemo from './TextArea';
import InputNumberDemo from './Number';
import PasswordDemo from './Password';
import CheckboxDemo from './CheckBox';
import { DropdownDemo } from './DropDown';
import RadioButtonDemo from './RadioButton';
import ButtonDemo from './Button';
import ToggleButtonDemo from './Toggle';
import RatingDemo from './Rating';
import { FileUploadDemo } from './FileUpload';
import MentionDemo from './CommentBox';
import ProgressBarDemo from './ProgressBar';
import LoadingDemo from './Loading';
import EmailDemo from './Email';
import { ConfirmPopupDemo } from './ConfirmPopup';
import { CalendarDemo } from './Date';
import TimeDemo from './Time';
import DateTimeDemo from './DateTime';
import MobileNumberDemo from './MobileNumber';



export const PanelDemo = () => {

    const ActualComponent = [
        {
            id: 1,
            comp: <InputTextDemo />,
        },
        {
            id: 2,
            comp: <TextareaDemo />,
        },
        {
            id: 3,
            comp: <InputNumberDemo />,
        },
        {
            id: 4,
            comp: <PasswordDemo />,
        },
        {
            id: 5,
            comp: <CheckboxDemo />,
        },
        {
            id: 6,
            comp: <DropdownDemo />,
        },
        {
            id: 7,
            comp: <RadioButtonDemo />,
        },
        {
            id: 8,
            comp: <ButtonDemo />,
        },
        {
            id: 9,
            comp: <ToggleButtonDemo />,
        },
        {
            id: 10,
            comp: <RatingDemo />,
        },
        {
            id: 11,
            comp: <FileUploadDemo />,
        },

        {
            id: 12,
            comp: <MentionDemo />,
        },
        {
            id: 13,
            comp: <ProgressBarDemo />,
        },
        {
            id: 14,
            comp: <LoadingDemo />,
        },
        {
            id: 15,
            comp: <EmailDemo />,
        },
        {
            id: 16,
            comp: <LoadingDemo />,
        },
        {
            id: 17,
            comp: <ConfirmPopupDemo />,
        },
        {
            id: 18,
            comp: <CalendarDemo />,
        },
        {
            id: 19,
            comp: <TimeDemo />,
        },
        {
            id: 20,
            comp: <DateTimeDemo />,
        },
        {
            id: 21,
            comp: <MobileNumberDemo />,
        },
        {
            id: 22,
            comp: <PanelDemo />
        },

    ]





    const [dragdropareacomp, Setdragdropareacomp] = useState([]);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "text",
        drop: (item) => addcompIncomp(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addcompIncomp = (id) => {
        const actualComponent = ActualComponent.filter((component) => id === component.id);
        // Setdragdropareacomp(() => [actualComponent[0]]);
        Setdragdropareacomp((dragdropareacomp) => [...dragdropareacomp, actualComponent[0]]);
    };






    return (
        <div className='mycomp'>
            <Panel header="Header">
                <div
                    className="area"
                    ref={drop}>
                    {dragdropareacomp.map((components) => {
                        return (
                            <div>
                                {components.comp}
                            </div>
                        )
                    })}
                </div>
            </Panel>
        </div>
    )
}

export default Panel;
