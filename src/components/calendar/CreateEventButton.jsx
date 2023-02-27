import AddIcon from '@mui/icons-material/Add';
import { useContext } from 'react';
import GlobalContext from '../../context/globalContext';

const CreateEventButton = () => {
        const {setShowEventModal} = useContext(GlobalContext);
    return (
        <button onClick={() => setShowEventModal(true)} className="border p-2 rounded-full flex items-center hover:shadow-sm">
            <AddIcon className='w-7 h-7'/>
            <span className='pl-2 pr-5'>Criar</span>
        </button>
    )
}

export default CreateEventButton;