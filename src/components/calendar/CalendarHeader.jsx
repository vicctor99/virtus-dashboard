import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { useContext } from 'react';
import GlobalContext from '../../context/globalContext';

dayjs.locale('pt-br');

const CalendarHeader = () => {
    const {monthIndex, setMonthIndex} = useContext(GlobalContext);
    function handlePrevMonth () {
        setMonthIndex(monthIndex - 1);
    }
    function handleNextMonth () {
        setMonthIndex(monthIndex + 1);
    }
    function handleReset() {
        setMonthIndex(monthIndex === dayjs().month() ? monthIndex + Math.random() : dayjs().month());
    }
    return (
        <header className='py-2 my-5 flex items-center'>
            <h1 className='mr-10 text-xl text-gray-500 font-bold'>Agenda</h1>
            <button className="border rounded py-2 px-4 mr-5 hover:bg-slate-100" onClick={handleReset}>Hoje</button>
            <button className='cursor-pointer text-gray-600 mx-2' onClick={handlePrevMonth}><span><ChevronLeftIcon /></span></button>
            <button className='cursor-pointer text-gray-600 mx-2' onClick={handleNextMonth}><span><ChevronRightIcon /></span></button>
            <h2 className='ml-4 text-xl text-gray-500 font-bold first-letter:uppercase'>
                {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM [de] YYYY')}
            </h2>
        </header>
    )
}

export default CalendarHeader;