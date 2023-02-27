import './datatable_products.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatableproducts';
import { Link } from 'react-router-dom';


const Datatable_Products = () => {
    const actionColumn = [
        {field: 'action', headerName: 'Action', width: 130, renderCell:()=>{
            return (
                <div className='cell-action'>
                    <Link to='/users/test' style={{textDecoration: 'none'}}>
                        <div className="view-button">Editar</div>
                    </Link>
                    <div className="delete-button">Deletar</div>
                </div>
            )
        }}
    ]
    return (
        <div className='data-table'>
            <div className="datatable-title">
                Tabela de Produtos
                <Link to='/products/new' className='link'>
                    Adicionar Novo
                </Link>
            </div>
            <DataGrid className='data-grid' rows={userRows} columns={userColumns.concat(actionColumn)} pageSize={10} rowsPerPageOptions={[1]} checkboxSelection />
        </div>
    )
}

export default Datatable_Products;