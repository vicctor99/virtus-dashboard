import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';
import SegmentIcon from '@mui/icons-material/Segment';
import ScheduleIcon from '@mui/icons-material/Schedule';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckIcon from '@mui/icons-material/Check';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useContext, useState } from 'react';
import GlobalContext from '../../context/globalContext';

const labelsClasses = ['indigo', 'gray', 'green', 'blue', 'red', 'purple',];

const EventModal = () => {
    const {setShowEventModal, daySelected, dispatchCalEvent, selectdEvent} = useContext(GlobalContext);
    const [title, setTitle] = useState(selectdEvent ? selectdEvent.title : '');
    const [description, setDescription] = useState(selectdEvent ? selectdEvent.description : '');
    const [selectdLabel, setSelectedLabel] = useState(
        selectdEvent ? labelsClasses.find((lbl) => lbl === selectdEvent.label) : labelsClasses[0]
    );

    function handleSubmit(e) {
        e.preventDefault();
        const calendarEvent = {
            title,
            description,
            label: selectdLabel,
            day: daySelected.valueOf(),
            id: selectdEvent ? selectdEvent.id : Date.now(),
        };
        if(selectdEvent) {
            dispatchCalEvent({type: 'update', payload: calendarEvent});
        } else {
            dispatchCalEvent({type: 'push', payload: calendarEvent});
        }
        setShowEventModal(false);
    }
    return (
        <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
            <form className="bg-white rounded-lg shadow-2xl w-1/4">
                <header className="bg-gray-100 px-4 py-2 flex justify-between items-center"> 
                    <span className="material-icons-outlined text-gray-400">
                        <DragHandleIcon />
                    </span>
                    <div>
                        {selectdEvent && (
                        <span
                            className="material-icons-outlined text-gray-400 cursor-pointer"
                            onClick={() => {
                            dispatchCalEvent({
                                type: 'delete',
                                payload: selectdEvent
                            });
                            setShowEventModal(false);
                            }}
                        >
                            <DeleteForeverIcon />
                        </span>
                        )}
                        <button onClick={() => setShowEventModal(false)}>
                        <span className="material-icons-outlined text-gray-400">
                            <CloseIcon />
                        </span>
                        </button>
                    </div>
                </header>
                <div className="p-3">
                    <div className="grid grid-cols-1/5 items-end gap-y-7">
                        <div></div>
                        <input type="text" name='title' placeholder='Adicionar título' value={title} onChange={(e) => setTitle(e.target.value)} required autoComplete='off' className='pt-3 border-0 text-gray-600 text-xl pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500'/>
                        <span className="material-icons-outlined text-gray-400">
                            <ScheduleIcon />
                        </span>
                        <p>{daySelected.format('dddd , D [de] MMMM [de] YYYY')}</p>
                        <span className="material-icons-outlined text-gray-400">
                            <SegmentIcon />
                        </span>
                        <input type="text" name='description' placeholder='Adicionar descrição' value={description} onChange={(e) => setDescription(e.target.value)} required className='pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500' autoComplete='off'/>
                        <span className="material-icons-outlined text-gray-400">
                            <BookmarkBorderIcon />
                        </span>
                        <div className="flex gap-x-2">
                            {labelsClasses.map((lblClass, i) => (
                                <span key={i} onClick={() => setSelectedLabel(lblClass)} className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}>
                                    {selectdLabel === lblClass &&
                                        <span className="material-icons-outlined text-white text-sm">
                                            <CheckIcon fontSize='small'/>
                                        </span>
                                    }
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <footer className='flex justify-end border-t p-3 mt-5'>
                    <button type='submit' className='bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white' onClick={handleSubmit}>
                        Salvar
                    </button>
                </footer>
            </form>
        </div>
    )
}

export default EventModal;