import "./App.css";
import format from "date-fns/format";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid"; // a plugin!
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Card from "./UI/Card";
import NavBar from "./UI/NavBar";


function App() {


    const state = {
        weekendsVisible: true,
        currentEvents: [],
    };

    

    return (
        <div className="App">
            <Card>
                <NavBar />

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
                        plugins={[dayGridPlugin, timeGridPlugin]}
                        headerToolbar={{
                            left: 'dayGridMonth,timeGridWeek',
                            center: 'title',
                            right: 'today prev,next'
                          }}
                        initialView="dayGridMonth"
                        weekends={state.weekendsVisible}
                
                        events={[
                            { title: "event 1", date: "2023-02-06" },
                            { title: "event 2", date: "2023-02-07" },
                        ]}
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        weekNumbers={true}
                        firstDay={1}
               
                    />
                </div>
            </Card>
        </div>
    );
}

export default App;
