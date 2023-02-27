import './widget.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widget = ({ type }) => {

    // temporary data
    const amount = 100;
    const diff = 20;

    let data = {};
        switch(type) {
            case 'user':
                data={
                    title: 'USUÁRIOS',
                    isMoney: false,
                    link: 'Ver todos os usuários',
                    icon: <AccountCircleIcon className='icon' style={{color: 'crimson' , backgroundColor: 'rgba(255, 0, 0, 0.1)'}}/>,
                };
                break;
                case 'order':
                data={
                    title: 'VENDAS',
                    isMoney: false,
                    link: 'Ver todas as vendas',
                    icon: <ShoppingCartOutlinedIcon className='icon' style={{color: 'goldenrod' , backgroundColor: 'rgba(218, 165, 32, 0.2)'}}/>,
                };
                break;
                case 'earning':
                data={
                    title: 'RECEITAS',
                    isMoney: true,
                    link: 'Ver todas as receitas',
                    icon: <MonetizationOnOutlinedIcon className='icon' style={{color: 'green' , backgroundColor: 'rgba(0, 128, 0, 0.2)'}}/>,
                };
                break;
                case 'balance':
                data={
                    title: 'CAIXA',
                    isMoney: true,
                    link: 'Ver detalhes',
                    icon: <AccountBalanceWalletOutlinedIcon className='icon' style={{color: 'purple' , backgroundColor: 'rgba(128, 0, 128, 0.2)'}}/>,
                };
                break;
            default:
                break;    
        }
    return (
        <div className='widget'>
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && '$'} {amount} </span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />{diff} %
                </div>
                {data.icon}
            </div>

        </div>
    )
}

export default Widget;