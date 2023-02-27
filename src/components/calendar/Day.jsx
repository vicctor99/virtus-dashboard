import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../context/globalContext";


const Day = ({day, rowIdx}) => {
    const [dayEvents, setDayEvents] = useState([]);
    const {setDaySelect, setShowEventModal, filteredEvents, setSelectdEvent} = useContext(GlobalContext);
    useEffect(() => {
        const events = filteredEvents.filter(evt => dayjs(evt.day).format('DD-MM-YY') === day.format('DD-MM-YY'));
        setDayEvents(events)
    }, [filteredEvents, day])

    function getCurrentDayClass() {
        return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ? 'bg-blue-600 text-white rounded-md w-7' : '';
    }
    return (
        <div className="border flex flex-col">
            <header className="flex flex-col items-center">
                {rowIdx === 0 && (
                    <p className="text-sm mt-1">{day.format('ddd').toUpperCase()}</p>
                )}
            <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
                    {day.format('DD')}
                </p>
            </header>
            <div className='flex-1 cursor-pointer' onClick={() => {
                setDaySelect(day);
                setShowEventModal(true);
            }}>
                {dayEvents.map((evt, idx) => (
                    <div key={idx} className={`bg-${evt.label}-500 p-1 mr-3 text-white text-sm rounded mb-1 truncate`} onClick={() => setSelectdEvent(evt)}>
                        {evt.title}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Day;