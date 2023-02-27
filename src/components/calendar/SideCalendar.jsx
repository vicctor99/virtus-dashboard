import SmallCallendar from './SmallCalendar';
import CreateEventButton from './CreateEventButton';
import Labels from './Labels';

const SideCalendar = () => {
    return (
        <aside className="border p-5 w-64 h-100 mx-8 mt-5 shadow-md">
            <CreateEventButton />
            <SmallCallendar />
            <Labels />
        </aside>
    )
}

export default SideCalendar;