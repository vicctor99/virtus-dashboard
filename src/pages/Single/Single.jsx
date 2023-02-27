import Chart from '../../components/chart/Chart';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import List from '../../components/table/Table';
import './single.scss';

const Single = () => {
    return (
        <div className='single'>
            <Sidebar />
            <div className="single-container">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="edit-button">Editar</div>
                        <h1 className="title">Informações</h1>
                        <div className="item">
                            <img src="https://picsum.photos/500" alt="user image" className="item-img" />
                            <div className="details">
                                <h1 className="item-title">Victor Silva</h1>
                                <div className="detail-item">
                                    <span className="item-key">Email:</span>
                                    <span className="item-value">victorsilva@gmail.com</span>
                                </div>
                                <div className="detail-item">
                                    <span className="item-key">Telefone:</span>
                                    <span className="item-value">+47 98284-2421</span>
                                </div>
                                <div className="detail-item">
                                    <span className="item-key">Endereço:</span>
                                    <span className="item-value">Centro, Itajaí</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={4 / 1} title='Gastos do Usuário'/>
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Últimas Transações</h1>
                    <List />
                </div>
            </div>
        </div>
    )
}

export default Single;