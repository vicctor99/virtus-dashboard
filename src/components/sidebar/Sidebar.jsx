import './sidebar.scss';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import SettingsIcon from '@mui/icons-material/Settings';
import PinIcon from '@mui/icons-material/Pin';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {
    const {dispatch} = useContext(DarkModeContext);
    return (
        <div className="sidebar">
            <div className="top">
                <Link to='/' style={{textDecoration: 'none'}}>
                    <span className="logo">Carvalhos</span>
                </Link>    
            </div>
            <div className="center">
                <ul>
                    <p className="title">MENU</p>
                    <Link to='/' style={{textDecoration: 'none'}}>
                        <li>
                            <HomeIcon className='icon'/>
                            <span>Home</span>
                        </li>
                    </Link>
                    <Link to='/calendar' style={{textDecoration: 'none'}}>
                        <li>
                            <CalendarMonthIcon className='icon'/>
                            <span>Calendário</span>
                        </li>
                    </Link>
                    <p className="title">LISTAS</p>
                    <Link to='/users' style={{textDecoration: 'none'}}>
                        <li>
                            <AccountCircleIcon className='icon'/>
                            <span>Usuários</span>
                        </li>
                    </Link>
                    <Link to='/products' style={{textDecoration: 'none'}}>  
                        <li>
                            <LocalShippingIcon className='icon'/>
                            <span>Produtos</span>
                        </li>
                    </Link>      
                    <p className="title">UTILIDADES</p>
                    <li>
                        <NotificationsIcon className='icon'/>
                        <span>Notificações</span>
                    </li>
                    <li>
                        <MonitorHeartIcon className='icon'/>
                        <span>Status</span>
                    </li>
                    <p className="title">SERVIÇOS</p>
                    <li>
                        <SettingsIcon className='icon'/>
                        <span>Configurações</span>
                    </li>
                    <li>
                        <PinIcon className='icon'/>
                        <span>Logs</span>
                    </li>
                    <p className="title">USUÁRIO</p>
                    <li>
                        <LogoutIcon className='icon'/>
                        <span>Sair</span>
                    </li>
                </ul>
            </div>
            <div className="bottom-theme">
                <div className="color-option" onClick={()=> dispatch({type:'light'})}></div>
                <div className="color-option" onClick={()=> dispatch({type:'dark'})}></div>
            </div>
        </div>
    )
}

export default Sidebar;