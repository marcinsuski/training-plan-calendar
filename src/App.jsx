import "./App.css";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid"; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Card from "./UI/Card";
import NavBar from "./UI/NavBar";
import Modal from "react-modal";
import "react-datetime/css/react-datetime.css";
import AddEventModal from "./components/AddEventModal";
import { useRef } from "react";
import axios from "axios";
import moment from "moment";
import { INITIAL_EVENTS, createEventId } from "./event-utils";

Modal.setAppElement("#root");

function App() {
    const [modalOpen, setModalOpen] = useState(false);
    const [events, setEvents] = useState([]);
    const calendarRef = useRef(null);

    // const onEventAdded = (e) => {
    //     let calendarApi = calendarRef.current.getApi();
    //     calendarApi.addEvent({
    //         start: moment(e.start).toDate(),
    //         end: moment(e.end).toDate(),
    //         title: e.title,
    //     });
    // };

    // const handleEventAdd = async (data) => {
    //     await axios.post("/api/v1/calendar/create-event", data.event);
    // };

    // const handleDatesSet = async (data) => {
    //     const response = await axios.get(
    //         "api/v1/calendar/get-events?start=" +
    //             moment(data.start).toISOString() +
    //             "&end=" +
    //             moment(data.end).toISOString()
    //     );
    //     setEvents(response.data);
    // };

    const handleEventClick = (clickInfo) => {
        if (
            window.confirm(
                `Are you sure you want to delete the event '${clickInfo.event.title}'`
            )
        ) {
            clickInfo.event.remove();
        }
    };

    const handleDateSelect = (selectInfo) => {
        let title = prompt("Please enter a new title for your event");
        let calendarApi = selectInfo.view.calendar;

        calendarApi.unselect(); // clear date selection

        if (title) {
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay,
            });
        }
    };

    function renderEventContent(eventInfo) {
        return (
            <>
                <b>{eventInfo.timeText}</b>
                <i>{eventInfo.event.title}</i>
            </>
        );
    }

    return (
        <div className="App">
            <Card>
                <NavBar />
                <button onClick={() => setModalOpen(true)}>Add Event</button>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "100%",
                        margin: "1rem 0",
                    }}
                >
                    <h1>Edytowanie kalendarza</h1>
                    <h3>Użytkownik: Marcin Suski</h3>
                </div>
                <div className="callendar_container">
                    <FullCalendar
                        ref={calendarRef}
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        headerToolbar={{
                            left: "dayGridMonth,timeGridWeek",
                            center: "title",
                            right: "today prev,next",
                        }}
                        initialView="dayGridMonth"
                        weekends={true}
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        weekNumbers={true}
                        initialEvents={INITIAL_EVENTS}
                        firstDay={1}
                        select={handleDateSelect}
                        eventContent={renderEventContent}
                        eventClick={handleEventClick}
                        // eventsSet={handleEvents}
                        events={events}
                        // eventAdd={(e) => handleEventAdd(e)}
                        // datesSet={(date) => handleDatesSet(date)}
                    />
                </div>
            </Card>
            {/* <AddEventModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onEventAdded={(e) => onEventAdded(e)}
            /> */}
        </div>
    );
}

export default App;
