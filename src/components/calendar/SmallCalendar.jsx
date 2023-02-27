import dayjs, { Dayjs } from "dayjs";
import React from "react";
import { useContext, useEffect, useState } from "react";
import { getMonth } from "../../util";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import GlobalContext from "../../context/globalContext";

const SmallCallendar = () => {
    const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    
    useEffect(()=> {    
        setCurrentMonth(getMonth(currentMonthIdx));
    }, [currentMonthIdx]);

    const { monthIndex, setSmallCalendarMonth, setDaySelect, daySelected} = useContext(GlobalContext);

    useEffect(() => {
        setCurrentMonthIdx(monthIndex);
    }, [monthIndex])

    function handlePrevMonth() {
        setCurrentMonthIdx(currentMonthIdx - 1);
    }

    function handleNextMonth() {
        setCurrentMonthIdx(currentMonthIdx + 1);
    }

    function getDayClass(day) {
        const format = 'DD-MM-YY';
        const nowDay = dayjs().format(format);
        const currDay = day.format(format);
        const slcDay = daySelected && daySelected.format(format);
        if (nowDay === currDay) {
            return 'bg-blue-500 rounded-md text-white'
        } else if (currDay === slcDay){
            return 'bg-blue-100 rounded-full text-blue-400 font-bold'
        } else {
            return '';
        }
    }
    return (
        <div className='mt-9'>
            <header className='flex justify-between'>
                <p className='text-gray-500 font-bold first-letter:uppercase'>
                    {dayjs(new Date(dayjs().year(), currentMonthIdx)).format('MMMM YYYY')}
                </p>
                <div>
                    <button onClick={handlePrevMonth}>
                        <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
                            <ChevronLeftIcon />
                        </span>
                    </button>
                    <button onClick={handleNextMonth}>
                        <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
                            <ChevronRightIcon />
                        </span>
                    </button>
                </div>
            </header>
            <div className='grid grid-cols-7 grid-rows-6 uppercase mt-1'>
                {currentMonth[0].map((day, i) => (
                    <span key={i} className='text-sm py-1 text-center'>
                        {day.format('ddd').charAt(0)}
                    </span>
                ))}
                {currentMonth.map((row, i) => (
                    <React.Fragment key={i}>
                        {row.map((day, idx) => (
                            <button key={idx} className={`py-1 w-full ${getDayClass(day)}`} onClick={() => {setSmallCalendarMonth(currentMonthIdx); setDaySelect(day)}}>
                                <span className='text-sm'>{day.format('D')}</span>
                            </button>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default SmallCallendar;
