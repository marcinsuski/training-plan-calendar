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
            start,
            end,
        });
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <form onSubmit={onSubmit}>
                <input
                    placelohder="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                ></input>
                <div>
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
                </div>
                <button>Add event</button>
            </form>
        </Modal>
    );
};

export default AddEventModal;
