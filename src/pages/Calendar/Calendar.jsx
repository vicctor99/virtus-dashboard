import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { getMonth } from '../../util';
import CalendarHeader from '../../components/calendar/CalendarHeader';
import Month from '../../components/calendar/Month';
import { useContext, useEffect, useState } from 'react';
import '../../styles/build.css';
import './calendar.scss';
import GlobalContext from '../../context/globalContext';
import SideCalendar from '../../components/calendar/SideCalendar';
import EventModal from '../../components/calendar/EventModal';

const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    const { monthIndex, showEventModal } = useContext(GlobalContext);

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
    }, [monthIndex]);
    return (
        <div className='calendar flex'>
            <Sidebar className='sidebar' />
            <div className='content'>
                <Navbar className='navbar'/>
                <div className="flex calendar-data g">
                    <SideCalendar/> 
                    <div className="flex flex-1 pr-8 flex-col">
                        <CalendarHeader />
                        <Month month={currentMonth}/>
                        {showEventModal && <EventModal />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calendar;