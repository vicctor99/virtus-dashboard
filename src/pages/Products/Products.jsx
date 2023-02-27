import Datatable_Products from '../../components/datatable_products/Datatable_products';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './products.scss'


const Products = () => {
    return (
        <div className='list'>
            <Sidebar />
            <div className="list-container">
                <Navbar />
                <Datatable_Products/>
            </div>
        </div>
    )
}

export default Products;