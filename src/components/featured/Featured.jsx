import './featured.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
    return (
        <div className='featured'>
            <div className="top">
                <h1 className="title">Receita Total</h1>
                <MoreVertIcon fontSize='small'/>
            </div>
            <div className="bottom">
                <div className="featured-chart">
                    <CircularProgressbar value={70} text={'70%'} strokeWidth={5}/>
                </div>
                <p className="title">Total de vendas hoje</p>
                <p className="amount">R$ 451</p>
                <p className="desc">Transações anteriores processando. Últimos pagamentos talvez não estejam incluso</p>
                <div className="summary">
                    <div className="item">
                        <div className="item-title">Último Dia</div>
                        <div className="item-result negative">
                            <KeyboardArrowDownIcon fontSize='small'/>
                            <div className="result-amount">R$ 542</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-title">Última Semana</div>
                        <div className="item-result positive">
                            <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                            <div className="result-amount">R$ 12.600</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-title">Último Mês</div>
                        <div className="item-result positive">
                            <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                            <div className="result-amount">R$ 53.528</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured;