import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import Datetime from "react-datetime";

const AddEventModal = ({ isOpen, onClose, onEventAdded }) => {
    const [title, setTitle] = useState("");
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());

    const onSubmit = (e) => {
        e.preventDefault();

        
        onEventAdded({
            title,
            start: e.startStr,
            end: e.endStr,
            allDay: e.allDay,
        });
        onClose();
    };

    // const handleDateSelect = (selectInfo) => {
    //     let title = prompt("Please enter a new title for your event");
    //     let calendarApi = selectInfo.view.calendar;

    //     calendarApi.unselect(); // clear date selection

    //     if (title) {
    //         calendarApi.addEvent({
    //             id: createEventId(),
    //             title,
    //             start: selectInfo.startStr,
    //             end: selectInfo.endStr,
    //             allDay: selectInfo.allDay,
    //         });
    //     }
    // };



    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <form onSubmit={onSubmit}>
                <input
                    placelohder="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                ></input>
                {/* <div>
                    <label>Start Date</label>
                    <Datetime
                        value={start}
                        onChange={(date) => setStart(date)}
                    />
                </div>
                <div>
                    <label>End Date</label>
                    <Datetime
                        value={end}
                        onChange={(date) => setEnd(date)}
                    />
                </div> */}
                <button>Add event</button>
            </form>
        </Modal>
    );
};

export default AddEventModal;
