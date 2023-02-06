import "./App.css";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import Card from "./UI/Card";
import NavBar from "./UI/NavBar";

function App() {
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
                    <h3>Użytkownik: Adrian Ścibor</h3>
                </div>
                <div className="callendar_container">
                    <FullCalendar
                        plugins={[dayGridPlugin]}
                        initialView="dayGridMonth"
                    />
                </div>
            </Card>
        </div>
    );
}

export default App;
