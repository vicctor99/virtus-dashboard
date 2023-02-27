import './chart.scss';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Janeiro', Total: 32},
  { name: 'Fevereiro', Total: 27},
  { name: 'Março', Total: 20},
  { name: 'Abril', Total: 38},
  { name: 'Maio', Total: 36},
  { name: 'Junho', Total: 48},
  { name: 'Julho', Total: 39},
  { name: 'Agosto', Total: 54},
  { name: 'Setembro', Total: 42},
  { name: 'Outubro', Total: 37},
  { name: 'Novembro', Total: 41},
  { name: 'Dezembro', Total: 52},
];

const Chart = ({ aspect, title }) => {
    return (
        <div className='chart'>
            <h1 className="title">{title}</h1>
            <ResponsiveContainer width="100%" aspect={aspect}>
                <AreaChart width={730} height={250} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke='gray'/>
                <YAxis />
                <CartesianGrid strokeDasharray="3 3"  className='chart-grid'/>
                <Tooltip />
                <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart;