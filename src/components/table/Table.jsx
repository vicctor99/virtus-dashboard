import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




const List = () => {
    const rows = [
        {
            id: 1143155,
            product: 'Corte Cabelo',
            img: 'https://picsum.photos/200',
            customer: 'John Smith',
            date: '1 de Março',
            amount: 1,
            method: 'Dinheiro',
            value: 'R$ 20',
            status: 'Aprovado',
        },
        {
            id: 2563355,
            product: 'Corte Cabelo + Barba',
            img: 'https://picsum.photos/200',
            customer: 'Michele Doe',
            date: '16 de Maio',
            amount: 1,
            method: 'Cartão',
            value: 'R$ 40',
            status: 'Aprovado',
        },
        {
            id: 5623412,
            product: 'Corte Completo',
            img: 'https://picsum.photos/200',
            customer: 'Abel James',
            date: '25 de Setembro',
            amount: 1,
            method: 'Online',
            value: 'R$ 50',
            status: 'Pendente',
        },
    ]
    return (
        <TableContainer component={Paper} className='table'>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell className='table-cell'>ID Serviço</TableCell>
                    <TableCell className='table-cell'>Serviço</TableCell>
                    <TableCell className='table-cell'>Cliente</TableCell>
                    <TableCell className='table-cell'>Data</TableCell>
                    <TableCell className='table-cell'>Quantidade</TableCell>
                    <TableCell className='table-cell'>Método de Pagamento</TableCell>
                    <TableCell className='table-cell'>Valor</TableCell>
                    <TableCell className='table-cell'>Status</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.id}>
                    <TableCell className='table-cell'>{row.id}</TableCell>
                    <TableCell className='table-cell'>
                        <div className="cell-wrapper">
                            <img src={row.img} alt="" className="image" />
                            {row.product}
                        </div>
                    </TableCell>
                    <TableCell className='table-cell'>{row.customer}</TableCell>
                    <TableCell className='table-cell'>{row.date}</TableCell>
                    <TableCell className='table-cell'>{row.amount}</TableCell>
                    <TableCell className='table-cell'>{row.method}</TableCell>
                    <TableCell className='table-cell'>{row.value}</TableCell>
                    <TableCell className='table-cell'><span className={ `status ${row.status}`}>{row.status}</span></TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        
    )
}

export default List;