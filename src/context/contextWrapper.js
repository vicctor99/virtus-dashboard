import dayjs from "dayjs";
import { useEffect, useMemo, useReducer, useState } from "react";
import GlobalContext from "./globalContext";

function savedEventsReducer(state, {type, payload}) {
    switch (type) {
        case 'push':
            return [...state, payload];
        case 'update':
            return state.map(evt => evt.id === payload.id ? payload : evt);
        case 'delete':
            return state.filter(evt => evt.id !== payload.id);        
        default:
            throw new Error();
    }
}

function initEvents() {
    const storageEvents = localStorage.getItem('savedEvents');
    const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
    return parsedEvents;
}

const ContextWrapper = (props) => {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
    const [daySelected, setDaySelect] = useState(dayjs());
    const [showEventModal, setShowEventModal] = useState(false);
    const [selectdEvent, setSelectdEvent] = useState(null);
    const [labels, setLabels] = useState([]);
    const [savedEvents, dispatchCalEvent] = useReducer(savedEventsReducer, [], initEvents);

    const filteredEvents = useMemo(() => {
        return savedEvents.filter(evt => 
            labels.filter((lbl) => lbl.checked)
            .map((lbl) => lbl.label)
            .includes(evt.label)
        )
    }, [savedEvents, labels])

    useEffect(() => {
        localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
    }, [savedEvents]);

    useEffect(() => {
        setLabels((prevLabels) => {
            return [...new Set( savedEvents.map(evt => evt.label))].map(label => {
                const currentLabel = prevLabels.find(lbl => lbl.label === label)
                return {
                    label,
                    checked: currentLabel ? currentLabel.checked : true,
                };
            })
        })
    }, [savedEvents])

    useEffect(() => {
        if(smallCalendarMonth !== null) {
            setMonthIndex(smallCalendarMonth);
        }
    }, [smallCalendarMonth]);

    useEffect(() => {
        if(!showEventModal) {
            setSelectdEvent(null);
        }
    }, [showEventModal])

    function updateLabel(label) {
        setLabels(labels.map((lbl) => lbl.label === label.label ? label : lbl))
    }

    return (
        <GlobalContext.Provider value={{
            monthIndex, 
            setMonthIndex, 
            showEventModal, 
            setShowEventModal, 
            setSmallCalendarMonth, 
            smallCalendarMonth, 
            daySelected, 
            setDaySelect,
            dispatchCalEvent,
            savedEvents,
            selectdEvent,
            setSelectdEvent,
            setLabels,
            labels,
            updateLabel,
            filteredEvents,
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default ContextWrapper;