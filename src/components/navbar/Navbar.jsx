import './navbar.scss';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscrennExitOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';



const Navbar = () => {
    const {dispatch} = useContext(DarkModeContext);
    return ( 
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    
                </div>
                <div className="items">
                    <div className="item">
                        <DarkModeOutlinedIcon className='icon' onClick={() => dispatch({type: 'toggle'})}/>
                    </div>
                    <div className="item">
                        <FullscrennExitOutlinedIcon className='icon'/>
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className='icon'/>
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className='icon'/>
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className='icon'/>
                    </div>
                    <div className="item">
                        <img src="https://picsum.photos/32" alt="avatar" className='avatar'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;