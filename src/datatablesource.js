// dados temporários
export const userColumns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'username', headerName: 'Nome', width: 200 },
    { field: 'age', headerName: 'Idade', width: 100 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'phone', headerName: 'Telefone', width: 180 },
    { field: 'status', headerName: 'Status', width: 120, renderCell: (params) => {
        return (
            <div className={` cell-with-status ${params.row.status} `}>{params.row.status}</div>
        )
    }},
]

 export const userRows = [
        {
            id: 1,
            username: 'Victor Silva',
            status: 'Ativo',
            email: 'victorsilva@gmail.com',
            age: 26,
            phone: '(+55) 47 89435-7543',
        },
        {
            id: 2,
            username: 'Jair Santos',
            status: 'Ativo',
            email: 'jairsantista3@gmail.com',
            age: 43,
            phone: '(+55) 47 74242-2356',
        },
        {
            id: 3,
            username: 'Carlos Santana',
            status: 'Pendente',
            email: 'carlitossantana@hotmail.com',
            age: 34,
            phone: '(+55) 47 64334-4563',
        },
        {
            id: 4,
            username: 'Rafael Vieira',
            status: 'Cancelado',
            email: 'rafa4923@hotmail.com',
            age: 31,
            phone: '(+55) 47 76543-8632',
        },
        {
            id: 5,
            username: 'Dorival Junior',
            status: 'Ativo',
            email: 'dorivalj12@hotmail.com',
            age: 14,
            phone: '(+55) 47 76546-2346',
        },
        {
            id: 6,
            username: 'Luis Carlos',
            status: 'Cancelado',
            email: 'luiscarlos32@hotmail.com',
            age: 39,
            phone: '(+55) 47 96425-2346',
        },
        {
            id: 7,
            username: 'Romulo Viana',
            status: 'Pendente',
            email: 'romuviana@hotmail.com',
            age: 22,
            phone: '(+55) 47 23456-7634',
        },
        {
            id: 8,
            username: 'Thales Gomes',
            status: 'Ativo',
            email: 'thalesgms@hotmail.com',
            age: 18,
            phone: '(+55) 47 23524-5643',
        },
        {
            id: 9,
            username: 'Robson Araújo',
            status: 'Pendente',
            email: 'robsonaraujo@hotmail.com',
            age: 38,
            phone: '(+55) 47 98873-3521',
        },
        {
            id: 10,
            username: 'Mauricio Valente',
            status: 'Ativo',
            email: 'mauriciovalente@hotmail.com',
            age: 19,
            phone: '(+55) 47 98873-3521',
        },
             {
            id: 11,
            username: 'Jefferson Do Val',
            status: 'Cancelado',
            email: 'jeffdval@hotmail.com',
            age: 22,
            phone: '(+55) 47 35347-9875',
        },
]